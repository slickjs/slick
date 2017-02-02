
import * as di from 'slick-di';

export class Container extends di.Container {

    createChild(withInfo: boolean = true) {
        let child: Container;
        if (withInfo) {
            child = new Container(this.constructionInfo);
        } else {
            child = new Container();
        }

        child.parent = this;

        return child as Container;
    }

}