"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var di = require("slick-di");
var common_1 = require("./common");

var Container = function (_di$Container) {
    _inherits(Container, _di$Container);

    function Container() {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));

        _this._singletons = new Map();
        return _this;
    }

    _createClass(Container, [{
        key: "createChild",
        value: function createChild() {
            var withInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            var child = void 0;
            if (withInfo) {
                child = new Container(this.constructionInfo);
            } else {
                child = new Container();
            }
            child.parent = this;
            return child;
        }
    }, {
        key: "registerSingletonregisterSingleton",
        value: function registerSingletonregisterSingleton(key, fn, targetKey) {
            this.registerHandler(key, function (x) {
                if (x._singletons.has(key)) return x._singletons.get(key);
                var singleton = x.invoke(fn, null, targetKey);
                x._singletons.set(key, singleton);
                return singleton;
            });
        }
    }, {
        key: "clear",
        value: function clear() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._singletons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    if (common_1.isDroppable(i)) i.drop();
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

            this._singletons.clear();
        }
    }]);

    return Container;
}(di.Container);

exports.Container = Container;