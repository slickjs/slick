import {Container} from './container';

export const MetaKeys = {
    bindable: Symbol.for('bindable'),
    renderer: Symbol.for('renderer'),
    element: Symbol.for('element')
}

export abstract class Droppable {
    abstract drop() 
}

export function isDroppable(a:any): a is Droppable {
    return a && typeof a.drop === 'function';
}

export interface Renderer extends Droppable {
    render(model, container:Container, options?:any);
}