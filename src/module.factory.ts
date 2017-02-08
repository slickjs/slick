import { Container } from './container';
import { ControllerFactory } from './controller.factory'
import {Factory} from './factory'


export class ModuleFactory<T> extends Factory<T> {

    configure<T>(config: new (...args) => T, fn:(e:T) => void) {
        let m = this.container.get<T>(config)
        fn(m)
        return this;
    } 

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