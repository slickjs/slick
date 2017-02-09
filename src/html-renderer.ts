import {MetaKeys, Droppable, Renderer} from './common'
import {bind, transient, inject} from './decorators'
import {Model} from 'slick-model';
import {Container} from './container';
import {ControllerFactory} from './controller.factory';

interface Binding extends Droppable {
    el: Element;
}

class AttributeBinding implements Droppable {
    constructor(public el: Element, private model:Model, private property:string) {
        model.on(`change:${property}`, this.onChange);
        this.setValue(model.get(property))
    }

    @bind
    onChange(_,n) {
        this.setValue(n)
    }

    setValue(value?) {
        var node = <HTMLInputElement>this.el
		var isCheckbox = /checkbox/.test(node.type);
		var isRadio = /radio/.test(node.type);

		var isRadioOrCheckbox = isCheckbox || isRadio;
		var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
		var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
		var isSelect = /select/i.test(node.nodeName)

		if (!arguments.length) {
			if (isCheckbox) {
				return Boolean(node.checked);
			} else if (isInput || isSelect) {
				return node.value || "";
			} else {
				return node.innerHTML || "";
			}
		}


		if (value == null) {
			value = "";
		} else {
			//clearInterval(this._autocompleteCheckInterval);
		}

		if (isRadioOrCheckbox) {
			if (isRadio) {
				if (String(value) === String(node.value)) {
					node.checked = true;
				}
			} else {
				node.checked = value;
			}
		} else if (String(value) !== this.setValue()) {

			if (isInput || isSelect) {
				node.value = value;
			} else {
				node.innerHTML = value;
			}
		}
    }

    drop() {
        this.model.off(`change:${this.property}`, this.onChange);
    }
}

class EventBinding implements Droppable {
    constructor(public el: Element, private event:string, private fn:Function) {
        el.addEventListener(event, <any>fn);
    }
    drop() {
        this.el.removeEventListener(this.event, <any>this.fn);
    }
}

@inject(MetaKeys.element, Container)
@transient(MetaKeys.renderer)
export class HtmlRenderer extends Droppable implements Renderer {
    private bindings: Binding[] = [];
    constructor(public el: HTMLElement, private container:Container) {
        super();
        
    }

    render(model) {
        //let names = Object.getOwnPropertyNames(model)
        let binding = Reflect.getOwnMetadata(MetaKeys.bindable, model);
        
        let els = this.el.querySelectorAll(`[bind-attr]`);
        for (let el of els) {
            let n = el.getAttribute('bind-attr')
            this.bindings.push(new AttributeBinding(el, binding, n))
        }

        this.addEventBinding('click', model);
        this.addControllerBindings();
    }


    addEventBinding(event:string, model) {
        let prop = `bind-${event}`;
        let els = this.el.querySelectorAll(`[${prop}]`);
        
        for (let el of els) {
            let fn = model[el.getAttribute(prop)];
            if (typeof fn !== 'function') throw TypeError('not function');
            this.bindings.push(new EventBinding(el, event ,fn.bind(model)));
        }
    }

    getChildren(el:Element) {
        let out: Element[] = [];
        for (let i = 0, ii = el.children.length; i < ii; i++) {
            out.push(el.children[i]);
            out.push(...this.getChildren(el.children[i]))
        }
        
        return out;
    }
    
    addControllerBindings() {
        let els = this.el.querySelectorAll('[bind-controller]');
        for (let el of els) {
            let controllerName = el.getAttribute('bind-controller');
            let bindings = this.bindings
            let children = this.getChildren(el);
            
            for (let b of bindings) {
                if (children.find(m => m === b.el)) {
                    console.log('found')
                    this.bindings.splice(this.bindings.indexOf(b), 1);
                    b.drop();
                }
                
            }
        
            let factory = this.container.get<ControllerFactory<any>>(controllerName);
            factory.create({
                el: el
            }).catch(e => {
                console.error(e.error);
            });
        }
    }

    drop() {
        for (let binding of this.bindings) {
            binding.drop();
        }
        this.bindings = [];
    }
}