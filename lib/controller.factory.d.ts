import { Factory, CreateOptions } from './factory';
import { Renderer, Droppable } from './common';
import { Container } from './container';
export declare class ControllerWrapper extends Droppable {
    private container;
    private instance;
    constructor(container: Container, instance: any);
    drop(): void;
    didRender(): void;
}
export declare class ControllerFactory<T> extends Factory<T> {
    constructor(container: Container, module: new () => T, renderer: new () => Renderer);
    create(options?: CreateOptions): Promise<ControllerWrapper>;
}
