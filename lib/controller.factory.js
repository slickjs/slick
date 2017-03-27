"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var slick_di_1 = require("slick-di");
var factory_1 = require("./factory");
var common_1 = require("./common");

var ControllerWrapper = function (_common_1$Droppable) {
    _inherits(ControllerWrapper, _common_1$Droppable);

    function ControllerWrapper(container, instance) {
        _classCallCheck(this, ControllerWrapper);

        var _this = _possibleConstructorReturn(this, (ControllerWrapper.__proto__ || Object.getPrototypeOf(ControllerWrapper)).call(this));

        _this.container = container;
        _this.instance = instance;
        return _this;
    }

    _createClass(ControllerWrapper, [{
        key: "drop",
        value: function drop() {
            if (common_1.isDroppable(this.instance)) {
                this.instance.drop();
            }
            if (this.container.hasHandler(common_1.MetaKeys.element, false)) this.container.unregister(common_1.MetaKeys.element);
            if (this.container.hasHandler(common_1.MetaKeys.renderer, false)) this.container.unregister(common_1.MetaKeys.renderer);
            this.container.clear();
        }
    }, {
        key: "didRender",
        value: function didRender() {
            if (typeof this.instance.didRender === 'function') {
                this.instance.didRender();
            }
        }
    }]);

    return ControllerWrapper;
}(common_1.Droppable);

exports.ControllerWrapper = ControllerWrapper;

var ControllerFactory = function (_factory_1$Factory) {
    _inherits(ControllerFactory, _factory_1$Factory);

    function ControllerFactory(container, module, renderer) {
        _classCallCheck(this, ControllerFactory);

        // Register the controller as transient (default is singleton)
        var _this2 = _possibleConstructorReturn(this, (ControllerFactory.__proto__ || Object.getPrototypeOf(ControllerFactory)).call(this, container, module, renderer));

        slick_di_1.transient()(module);
        return _this2;
    }

    _createClass(ControllerFactory, [{
        key: "create",
        value: function create() {
            var _this3 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return _get(ControllerFactory.prototype.__proto__ || Object.getPrototypeOf(ControllerFactory.prototype), "create", this).call(this, options).then(function (instance) {
                return new ControllerWrapper(_this3.container, instance);
            });
        }
    }]);

    return ControllerFactory;
}(factory_1.Factory);

exports.ControllerFactory = ControllerFactory;