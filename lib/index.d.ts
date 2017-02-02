import { ModuleFactory } from './module.factory';
import { Renderer } from './common';
export * from './decorators';
export { Renderer, MetaKeys, Droppable } from './common';
export { Model } from 'slick-model';
export { Container } from './container';
export declare function renderer<T extends Renderer>(render: new () => T): void;
export declare function module<T>(mod: new () => T): ModuleFactory<T>;
