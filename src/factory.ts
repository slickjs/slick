import { MetaKeys, Renderer } from './common';
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

export abstract class Factory<T> {
    constructor(protected container: Container, protected module: new () => T, protected _renderer: new () => Renderer) {

    }

    /**
     * Override the renderer for this module or controller
     * 
     * @param {new (el?: HTMLElement) => Renderer} renderer 
     * @returns 
     * 
     * @memberOf Factory
     */
    public renderer(renderer: new (el?: HTMLElement) => Renderer) {
        if (renderer == null) return this;
        this._renderer = renderer;
        return this;
    }

    /**
     * Create an instance of the module or controller
     * 
     * @param {CreateOptions} [options={}] 
     * @returns 
     * 
     * @memberOf Factory
     */
    public create(options: CreateOptions = {}) {
        let instance

        if (options.el) {
            this.container.registerInstance(MetaKeys.element, options.el);
            this.__registerRenderer();
        }

        try {
            instance = this.container.get(this.module)
        } catch (e) {
            return Promise.reject(e)
        }

        if (options && options.el) {
            if (this.container.hasHandler(MetaKeys.renderer, true)) {
                let renderer = this.container.get<Renderer>(MetaKeys.renderer);
                renderer.render(instance, this.container, options.options);
                if (typeof instance.didRender === 'function') {
                    instance.didRender();
                }
            }

        }

        return Promise.resolve(instance);
    }


    private __registerRenderer() {
        if (this._renderer) {
            if (this.container.hasHandler(MetaKeys.renderer)) {
                this.container.unregister(MetaKeys.renderer);
            }
            this.container.registerTransient(MetaKeys.renderer, this._renderer);
        }
    }
}