"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var container_1 = require("./container");
var controller_factory_1 = require("./controller.factory");
/*
export class ModuleFactory<T> {

    constructor(private container: Container, public module: T, private _renderer: new () => Renderer) {
        
    }

    renderer(renderer: new (el?: HTMLElement) => Renderer) {
        if (renderer == null) return this;
        this._renderer = renderer;
        return this;
    }


    controller<T extends FunctionConstructor>(name: string | T, fn?: T) {
        if (arguments.length === 1 && typeof name !== 'function') {
            throw new TypeError("");
        }
        if (typeof name === 'function') {
            fn = name;
            name = fn.name;
        }

        if (!name) throw new Error('the controller name cannot be empty. Either use a named function, a function contructor or use the name parameter');

        let child = this.container.createChild(false);
        child.registerInstance(Container, child);
        
        let factory = new ControllerFactory(child, fn, this._renderer);
        this.container.registerInstance(name, factory);
        
        return this;
    }

    create(options: CreateOptions = {}): Promise<T> {
        let mod
        if (this._renderer) {
            if (this.container.hasHandler(MetaKeys.renderer)) {
                this.container.unregister(MetaKeys.renderer);
            }
            this.container.registerTransient(MetaKeys.renderer, this._renderer);
        }

        if (options.el) {
            this.container.registerInstance(MetaKeys.element, options.el);
        }
        
        try {
            mod = this.container.get(this.module)
        } catch (e) {
            return Promise.reject(e)
        }

        if (options.el) {
            let renderer = this.container.get<Renderer>(MetaKeys.renderer);
            renderer.render(mod, this.container);
        }

        return Promise.resolve(mod);

    }

}*/
var factory_1 = require("./factory");

var ModuleFactory = function (_factory_1$Factory) {
    _inherits(ModuleFactory, _factory_1$Factory);

    function ModuleFactory() {
        _classCallCheck(this, ModuleFactory);

        return _possibleConstructorReturn(this, (ModuleFactory.__proto__ || Object.getPrototypeOf(ModuleFactory)).apply(this, arguments));
    }

    _createClass(ModuleFactory, [{
        key: "controller",
        value: function controller(name, fn) {
            if (arguments.length === 1 && typeof name !== 'function') {
                throw new TypeError("");
            }
            if (typeof name === 'function') {
                fn = name;
                name = fn.name;
            }
            if (!name) throw new Error('the controller name cannot be empty. Either use a named function, a function contructor or use the name parameter');
            var child = this.container.createChild(false);
            child.registerInstance(container_1.Container, child);
            var factory = new controller_factory_1.ControllerFactory(child, fn, this._renderer);
            this.container.registerInstance(name, factory);
            return this;
        }
    }]);

    return ModuleFactory;
}(factory_1.Factory);

exports.ModuleFactory = ModuleFactory;