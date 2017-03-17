import { Renderer } from './common';
import { Container } from './container';
/**
 *
 *
 * @export
 * @interface CreateOptions
 */
export interface CreateOptions {
    /**
     * The element to mount the factory on
     *
     * @type {Element}
     * @memberOf CreateOptions
     */
    el?: Element;
    /**
     * Options
     *
     * @type {*}
     * @memberOf CreateOptions
     */
    options?: any;
}
export declare abstract class Factory<T> {
    protected container: Container;
    protected module: new () => T;
    protected _renderer: new () => Renderer;
    constructor(container: Container, module: new () => T, _renderer: new () => Renderer);
    /**
     * Override the renderer for this module or controller
     *
     * @param {new (el?: HTMLElement) => Renderer} renderer
     * @returns
     *
     * @memberOf Factory
     */
    renderer(renderer: new (el?: HTMLElement) => Renderer): this;
    /**
     * Create an instance of the module or controller
     *
     * @param {CreateOptions} [options={}]
     * @returns
     *
     * @memberOf Factory
     */
    create(options?: CreateOptions): Promise<any>;
    private __registerRenderer();
}
