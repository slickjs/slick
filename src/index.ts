import { Container } from './container';
import { ModuleFactory } from './module.factory';
import { MetaKeys, Renderer } from './common'
import { HtmlRenderer } from './html-renderer';

export * from './decorators';
export { Renderer, MetaKeys, Droppable } from './common';
export { Model } from 'slick-model';
export {Container} from './container'
//const container = new Container();
import {Repository} from './repo';


export function renderer<T extends Renderer>(render: new(...args) => T) {
    Repository.instance.register(MetaKeys.renderer, render);
}


export function module<T >(mod: new (...args) => T) {
    let child = new Container()

    let renderer = Repository.instance.get(MetaKeys.renderer);
    if (!renderer) renderer = HtmlRenderer;
    child.registerInstance(Container, child);

    return new ModuleFactory(child, mod, renderer);
}