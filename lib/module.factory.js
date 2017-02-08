"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var container_1 = require("./container");
var controller_factory_1 = require("./controller.factory");
var factory_1 = require("./factory");

var ModuleFactory = function (_factory_1$Factory) {
    _inherits(ModuleFactory, _factory_1$Factory);

    function ModuleFactory() {
        _classCallCheck(this, ModuleFactory);

        return _possibleConstructorReturn(this, (ModuleFactory.__proto__ || Object.getPrototypeOf(ModuleFactory)).apply(this, arguments));
    }

    _createClass(ModuleFactory, [{
        key: "configure",
        value: function configure(config, fn) {
            var m = this.container.get(config);
            fn(m);
            return this;
        }
    }, {
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