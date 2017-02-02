import { Factory } from './factory';
export declare class ModuleFactory<T> extends Factory<T> {
    controller<T>(name: string | T, fn?: new () => T): this;
}
