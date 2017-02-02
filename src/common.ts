import {Container} from './container';

export const MetaKeys = {
    bindable: Symbol.for('bindable'),
    renderer: Symbol.for('renderer'),
    element: Symbol.for('element')
}

export abstract class Droppable {
    abstract drop() 
}

export interface Renderer extends Droppable {
    render(model, container:Container);
}