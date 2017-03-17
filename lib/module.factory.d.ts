import { Factory } from './factory';
export declare class ModuleFactory<T> extends Factory<T> {
    /**
     * Configure a service
     *
     * @template T
     * @param {new (...args) => T} config
     * @param {(e:T) => void} fn
     * @returns
     *
     * @memberOf ModuleFactory
     */
    configure<T>(config: new (...args) => T, fn: (e: T) => void): this;
    /**
     * Register a controller
     *
     * @template T
     * @param {(string | T)} name
     * @param {new() => T} [fn]
     * @returns
     *
     * @memberOf ModuleFactory
     */
    controller<T>(name: string | T, fn?: new () => T): this;
}
