import { Factory, CreateOptions } from './factory';
import { Renderer } from './common';
import { Container } from './container';
export declare class ControllerFactory<T> extends Factory<T> {
    constructor(container: Container, module: new () => T, renderer: new () => Renderer);
    create(options: CreateOptions): Promise<any>;
}
