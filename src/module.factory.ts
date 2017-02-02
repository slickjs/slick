import { Container } from './container';
import { ControllerFactory } from './controller.factory'



/*
export class ModuleFactory<T> {

    constructor(private container: Container, public module: T, private _renderer: new () => Renderer) {
        
    }

    renderer(renderer: new (el?: HTMLElement) => Renderer) {
        if (renderer == null) return this;
        this._renderer = renderer;
        return this;
    }


    controller<T extends FunctionConstructor>(name: string | T, fn?: T) {
        if (arguments.length === 1 && typeof name !== 'function') {
            throw new TypeError("");
        }
        if (typeof name === 'function') {
            fn = name;
            name = fn.name;
        }

        if (!name) throw new Error('the controller name cannot be empty. Either use a named function, a function contructor or use the name parameter');

        let child = this.container.createChild(false);
        child.registerInstance(Container, child);
        
        let factory = new ControllerFactory(child, fn, this._renderer);
        this.container.registerInstance(name, factory);
        
        return this;
    }

    create(options: CreateOptions = {}): Promise<T> {
        let mod
        if (this._renderer) {
            if (this.container.hasHandler(MetaKeys.renderer)) {
                this.container.unregister(MetaKeys.renderer);
            }
            this.container.registerTransient(MetaKeys.renderer, this._renderer);
        }

        if (options.el) {
            this.container.registerInstance(MetaKeys.element, options.el);
        }
        
        try { 
            mod = this.container.get(this.module)
        } catch (e) {
            return Promise.reject(e)
        }

        if (options.el) {
            let renderer = this.container.get<Renderer>(MetaKeys.renderer);
            renderer.render(mod, this.container);
        }

        return Promise.resolve(mod);

    }

}*/
import {Factory} from './factory'
export class ModuleFactory<T> extends Factory<T> {
    controller<T>(name: string | T, fn?:  new() => T) {

        if (arguments.length === 1 && typeof name !== 'function') {
            throw new TypeError("");
        }
        if (typeof name === 'function') {
            fn = name;
            name = fn.name;
        }

        if (!name) throw new Error('the controller name cannot be empty. Either use a named function, a function contructor or use the name parameter');

        let child = this.container.createChild(false);
        child.registerInstance(Container, child);
        
        let factory = new ControllerFactory(child, fn, this._renderer);
        this.container.registerInstance(name, factory);
        
        return this;
    }

}