"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var decorators_1 = require("./decorators");
var container_1 = require("./container");

var AttributeBinding = function () {
    function AttributeBinding(el, model, property) {
        _classCallCheck(this, AttributeBinding);

        this.el = el;
        this.model = model;
        this.property = property;
        model.on("change:" + property, this.onChange);
        this.setValue(model.get(property));
    }

    _createClass(AttributeBinding, [{
        key: "onChange",
        value: function onChange(_, n) {
            this.setValue(n);
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            var node = this.el;
            var isCheckbox = /checkbox/.test(node.type);
            var isRadio = /radio/.test(node.type);
            var isRadioOrCheckbox = isCheckbox || isRadio;
            var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
            var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
            var isSelect = /select/i.test(node.nodeName);
            if (!arguments.length) {
                if (isCheckbox) {
                    return Boolean(node.checked);
                } else if (isInput || isSelect) {
                    return node.value || "";
                } else {
                    return node.innerHTML || "";
                }
            }
            if (value == null) {
                value = "";
            } else {
                //clearInterval(this._autocompleteCheckInterval);
            }
            if (isRadioOrCheckbox) {
                if (isRadio) {
                    if (String(value) === String(node.value)) {
                        node.checked = true;
                    }
                } else {
                    node.checked = value;
                }
            } else if (String(value) !== this.setValue()) {
                if (isInput || isSelect) {
                    node.value = value;
                } else {
                    node.innerHTML = value;
                }
            }
        }
    }, {
        key: "drop",
        value: function drop() {
            this.model.off("change:" + this.property, this.onChange);
        }
    }]);

    return AttributeBinding;
}();

__decorate([decorators_1.bind, __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], AttributeBinding.prototype, "onChange", null);

var EventBinding = function () {
    function EventBinding(el, event, fn) {
        _classCallCheck(this, EventBinding);

        this.el = el;
        this.event = event;
        this.fn = fn;
        el.addEventListener(event, fn);
    }

    _createClass(EventBinding, [{
        key: "drop",
        value: function drop() {
            this.el.removeEventListener(this.event, this.fn);
        }
    }]);

    return EventBinding;
}();

var HtmlRenderer = function (_common_1$Droppable) {
    _inherits(HtmlRenderer, _common_1$Droppable);

    function HtmlRenderer(el, container) {
        _classCallCheck(this, HtmlRenderer);

        var _this = _possibleConstructorReturn(this, (HtmlRenderer.__proto__ || Object.getPrototypeOf(HtmlRenderer)).call(this));

        _this.el = el;
        _this.container = container;
        _this.bindings = [];
        return _this;
    }

    _createClass(HtmlRenderer, [{
        key: "render",
        value: function render(model) {
            //let names = Object.getOwnPropertyNames(model)
            var binding = Reflect.getOwnMetadata(common_1.MetaKeys.bindable, model);
            var els = this.el.querySelectorAll("[bind-attr]");
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var el = _step.value;

                    var n = el.getAttribute('bind-attr');
                    this.bindings.push(new AttributeBinding(el, binding, n));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.addEventBinding('click', model);
            this.addControllerBindings();
        }
    }, {
        key: "addEventBinding",
        value: function addEventBinding(event, model) {
            var prop = "bind-" + event;
            var els = this.el.querySelectorAll("[" + prop + "]");
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = els[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var el = _step2.value;

                    var fn = model[el.getAttribute(prop)];
                    if (typeof fn !== 'function') throw TypeError('not function');
                    this.bindings.push(new EventBinding(el, event, fn.bind(model)));
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: "getChildren",
        value: function getChildren(el) {
            var out = [];
            for (var i = 0, ii = el.children.length; i < ii; i++) {
                out.push(el.children[i]);
                out.push.apply(out, _toConsumableArray(this.getChildren(el.children[i])));
            }
            return out;
        }
    }, {
        key: "addControllerBindings",
        value: function addControllerBindings() {
            var _this2 = this;

            var els = this.el.querySelectorAll('[bind-controller]');
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = els[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var el = _step3.value;

                    var controllerName = el.getAttribute('bind-controller');
                    var bindings = this.bindings;
                    var children = this.getChildren(el);
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        var _loop = function _loop() {
                            var b = _step4.value;

                            if (children.find(function (m) {
                                return m === b.el;
                            })) {
                                console.log('found');
                                _this2.bindings.splice(_this2.bindings.indexOf(b), 1);
                                b.drop();
                            }
                        };

                        for (var _iterator4 = bindings[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            _loop();
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    var factory = this.container.get(controllerName);
                    factory.create({
                        el: el
                    }).catch(function (e) {
                        console.error(e.error);
                    });
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: "drop",
        value: function drop() {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.bindings[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var binding = _step5.value;

                    binding.drop();
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            this.bindings = [];
        }
    }]);

    return HtmlRenderer;
}(common_1.Droppable);
HtmlRenderer = __decorate([decorators_1.inject(common_1.MetaKeys.element, container_1.Container), decorators_1.transient(common_1.MetaKeys.renderer), __metadata("design:paramtypes", [HTMLElement, container_1.Container])], HtmlRenderer);
exports.HtmlRenderer = HtmlRenderer;