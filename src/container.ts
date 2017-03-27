
import * as di from 'slick-di';
import {isDroppable} from './common';

export class Container extends di.Container {
    private _singletons: Map<any,any> = new Map();

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

    registerSingletonregisterSingleton(key: any, fn: Function, targetKey?: string) {
        this.registerHandler(key, (x:Container) => {
            if (x._singletons.has(key)) return x._singletons.get(key)
            var singleton = x.invoke(fn, null, targetKey);
            x._singletons.set(key, singleton);
            return singleton;
        });
    }

    clear() {
        for (let i of this._singletons) {
            if (isDroppable(i)) i.drop(); 
        }
        this._singletons.clear();
    }

}