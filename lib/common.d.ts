import { Container } from './container';
export declare const MetaKeys: {
    bindable: symbol;
    renderer: symbol;
    element: symbol;
};
export declare abstract class Droppable {
    abstract drop(): any;
}
export declare function isDroppable(a: any): a is Droppable;
export interface Renderer extends Droppable {
    render(model: any, container: Container, options?: any): any;
}
