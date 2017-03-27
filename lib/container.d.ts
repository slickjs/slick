import * as di from 'slick-di';
export declare class Container extends di.Container {
    private _singletons;
    createChild(withInfo?: boolean): Container;
    registerSingletonregisterSingleton(key: any, fn: Function, targetKey?: string): void;
    clear(): void;
}
