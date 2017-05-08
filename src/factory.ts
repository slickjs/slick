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
        return this._create(this.container, options);
    }

    protected _create(container: Container, options: CreateOptions = {}) {
        let instance

        if (options.el) {
            if (container.hasHandler(MetaKeys.element, false)) {
                container.unregister(MetaKeys.element);
            }
            container.registerInstance(MetaKeys.element, options.el);
            this.__registerRenderer(container);
        }

        try {
            instance = container.get(this.module)
        } catch (e) {
            return Promise.reject(e)
        }

        if (options && options.el) {
            if (container.hasHandler(MetaKeys.renderer, false)) {
                let renderer = container.get<Renderer>(MetaKeys.renderer);
                renderer.render(instance, this.container, options.options);
                if (typeof instance.didRender === 'function') {
                    instance.didRender();
                }
            }

        }

        return Promise.resolve(instance);
    }


    private __registerRenderer(container: Container) {
        if (container.hasHandler(MetaKeys.renderer, false)) {
            container.unregister(MetaKeys.renderer);
        }
        if (this._renderer) {
            container.registerTransient(MetaKeys.renderer, this._renderer);
        }
    }
}