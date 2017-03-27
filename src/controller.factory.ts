import {transient} from 'slick-di';
import {Factory, CreateOptions} from './factory';
import {  Renderer } from './common';
import { Container } from './container';

export class ControllerFactory<T> extends Factory<T> {
    constructor(container: Container, module: new () => T, renderer: new () => Renderer) {
        super(container, module, renderer);
        // Register the controller as transient (default is singleton)
        transient()(module);
    }

    create(options:CreateOptions) {
        return this._create(this.container.createChild(false), options);
    }
}