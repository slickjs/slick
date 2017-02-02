import { Droppable, Renderer } from './common';
import { Container } from './container';
export declare class HtmlRenderer extends Droppable implements Renderer {
    el: HTMLElement;
    private container;
    private bindings;
    constructor(el: HTMLElement, container: Container);
    render(model: any): void;
    addEventBinding(event: string, model: any): void;
    getChildren(el: Element): Element[];
    addControllerBindings(): void;
    drop(): void;
}
