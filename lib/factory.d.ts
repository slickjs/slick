import { Renderer } from './common';
import { Container } from './container';
export interface CreateOptions {
    el?: Element;
}
export declare abstract class Factory<T> {
    protected container: Container;
    protected module: new () => T;
    protected _renderer: new () => Renderer;
    constructor(container: Container, module: new () => T, _renderer: new () => Renderer);
    renderer(renderer: new (el?: HTMLElement) => Renderer): this;
    create(options?: CreateOptions): Promise<any>;
    private __registerRenderer();
}
