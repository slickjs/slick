import { Container } from './container';
export declare const MetaKeys: {
    bindable: symbol;
    renderer: symbol;
    element: symbol;
};
export declare abstract class Droppable {
    abstract drop(): any;
}
export interface Renderer extends Droppable {
    render(model: any, container: Container): any;
}
