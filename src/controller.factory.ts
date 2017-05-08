import {transient} from 'slick-di';
import {Factory, CreateOptions} from './factory';
import {  Renderer, Droppable, isDroppable, MetaKeys } from './common';
import { Container } from './container';

export class ControllerWrapper extends Droppable {
    
    constructor(private container: Container, private instance:any) {
        super();
    }
    
    drop() {
        if (isDroppable(this.instance)) {
            this.instance.drop();
        }

        if (this.container.hasHandler(MetaKeys.element,false))
            this.container.unregister(MetaKeys.element);
    
        if (this.container.hasHandler(MetaKeys.renderer, false)) 
            this.container.unregister(MetaKeys.renderer);
    
        this.container.clear();
    }

    didRender() {
        if (typeof this.instance.didRender === 'function') {
            this.instance.didRender();
        }
    }
}

export class ControllerFactory<T> extends Factory<T> {
    constructor(container: Container, module: new () => T, renderer: new () => Renderer) {
        super(container, module, renderer);
        // Register the controller as transient (default is singleton)
        transient()(module);
    }

    create(options:CreateOptions = {}) {
        /*return super.create(options).then( instance => {
            return new ControllerWrapper(this.container, instance);
        })*/
    
        let container = this.container.createChild(false);
        return this._create(container, options)
        .then( instance => new ControllerWrapper(container, instance));
    }

}