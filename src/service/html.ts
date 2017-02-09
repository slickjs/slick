
import {inject, transient} from 'slick-di';
import {MetaKeys} from '../common';
import * as dom from 'orange.dom';

@transient()
@inject(MetaKeys.element)
export class Html extends dom.Html {
    constructor(el:HTMLElement) {
        super([el]);
    }
}