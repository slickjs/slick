"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common_1 = require("./common");

var Factory = function () {
    function Factory(container, module, _renderer) {
        _classCallCheck(this, Factory);

        this.container = container;
        this.module = module;
        this._renderer = _renderer;
    }

    _createClass(Factory, [{
        key: "renderer",
        value: function renderer(_renderer2) {
            if (_renderer2 == null) return this;
            this._renderer = _renderer2;
            return this;
        }
    }, {
        key: "create",
        value: function create() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var instance = void 0;
            /*if (options.el && this._renderer) {
                 if (this.container.hasHandler(MetaKeys.renderer)) {
                    this.container.unregister(MetaKeys.renderer);
                }
                 this.container.registerSingleton(MetaKeys.renderer, this._renderer);
             }*/
            if (options.el) {
                this.__registerRenderer();
            }
            try {
                instance = this.container.get(this.module);
            } catch (e) {
                return Promise.reject(e);
            }
            if (options && options.el) {
                this.container.registerInstance(common_1.MetaKeys.element, options.el);
                var renderer = this.container.get(common_1.MetaKeys.renderer);
                renderer.render(instance, this.container);
            }
            return Promise.resolve(instance);
        }
    }, {
        key: "__registerRenderer",
        value: function __registerRenderer() {
            if (this._renderer) {
                if (this.container.hasHandler(common_1.MetaKeys.renderer)) {
                    this.container.unregister(common_1.MetaKeys.renderer);
                }
                this.container.registerTransient(common_1.MetaKeys.renderer, this._renderer);
            }
        }
    }]);

    return Factory;
}();

exports.Factory = Factory;