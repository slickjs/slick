
export * from 'slick-di/lib/decorators';
import { Model } from 'slick-model';
import {MetaKeys} from './common'


class Bindable {
    enuma
    constructor(public property:PropertyKey, private model:Model) {
        
    }
    @bind
    set(value) {
        this.model.set(this.property, value);
    }
    @bind
    get() {
        return this.model.get(this.property)
    }

    enumerable = true
    configurable = true
}

export function bind(target:any, property:PropertyKey, descriptor:PropertyDescriptor) {
    let fn = descriptor.value;
    if (typeof fn !== 'function') {
        throw new TypeError("Can only bind functions");
    }

    let definingProperty = false;

  return {
    configurable: true,
    get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(property)) {
        return fn;
      }

      let boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, property, {
        value: boundFn,
        configurable: true,
        writable: true,
      });
      definingProperty = false;
      return boundFn;
    }
  };
}

export function bindable<T>(target: any, property: PropertyKey, descriptor?: TypedPropertyDescriptor<T>) {

    let store = Reflect.getOwnMetadata(MetaKeys.bindable, target)
    if (!store) {
        store = new Model();
        
        Reflect.defineMetadata(MetaKeys.bindable, store, target);
    }
    if (!descriptor) {
        descriptor = new Bindable(property, store);
        Object.defineProperty(target, property, descriptor);
    }
}