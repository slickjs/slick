import {MetaKeys, Renderer} from './common';
import {Container} from './container';

export interface CreateOptions {
    el?:Element;
}

export abstract class Factory<T> {
    constructor(protected container: Container, protected module: new() => T, protected _renderer: new () => Renderer) {

    }

    renderer(renderer: new (el?: HTMLElement) => Renderer) {
        if (renderer == null) return this;
        this._renderer = renderer;
        return this;
    }


    create(options: CreateOptions = {}) {
        let instance

        /*if (options.el && this._renderer) {

            if (this.container.hasHandler(MetaKeys.renderer)) {
                this.container.unregister(MetaKeys.renderer);
            }

            this.container.registerSingleton(MetaKeys.renderer, this._renderer);

        }*/
        if (options.el) {
            this.__registerRenderer();
        }


        try {
            instance = this.container.get(this.module)
        } catch (e) {
            return Promise.reject(e)
        }

        if (options && options.el) {

            this.container.registerInstance(MetaKeys.element, options.el);

            let renderer = this.container.get<Renderer>(MetaKeys.renderer);
            renderer.render(instance, this.container);
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