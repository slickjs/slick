import { Factory } from './factory';
export declare class ModuleFactory<T> extends Factory<T> {
    configure<T>(config: new (...args) => T, fn: (e: T) => void): this;
    controller<T>(name: string | T, fn?: new () => T): this;
}
