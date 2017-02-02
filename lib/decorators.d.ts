export * from 'slick-di/lib/decorators';
export declare function bind(target: any, property: PropertyKey, descriptor: PropertyDescriptor): {
    configurable: boolean;
    get(): any;
};
export declare function bindable<T>(target: any, property: PropertyKey, descriptor?: TypedPropertyDescriptor<T>): void;
