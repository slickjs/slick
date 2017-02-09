import { ModuleFactory } from './module.factory';
import { Renderer } from './common';
export * from './decorators';
export { Renderer, MetaKeys, Droppable } from './common';
export { Model } from 'slick-model';
export { Container } from './container';
export * from './service/html';
export declare function renderer<T extends Renderer>(render: new (...args) => T): void;
export declare function module<T>(mod: new (...args) => T): ModuleFactory<T>;
