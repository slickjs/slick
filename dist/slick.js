(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["slick"] = factory();
	else
		root["slick"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	var container_1 = __webpack_require__(1);
	var module_factory_1 = __webpack_require__(12);
	var common_1 = __webpack_require__(11);
	var html_renderer_1 = __webpack_require__(15);
	__export(__webpack_require__(16));
	var common_2 = __webpack_require__(11);
	exports.MetaKeys = common_2.MetaKeys;
	exports.Droppable = common_2.Droppable;
	exports.isDroppable = common_2.isDroppable;
	var slick_model_1 = __webpack_require__(17);
	exports.Model = slick_model_1.Model;
	var container_2 = __webpack_require__(1);
	exports.Container = container_2.Container;
	__export(__webpack_require__(24));
	__export(__webpack_require__(14));
	//const container = new Container();
	var repo_1 = __webpack_require__(29);
	function renderer(render) {
	    repo_1.Repository.instance.register(common_1.MetaKeys.renderer, render);
	}
	exports.renderer = renderer;
	function _module(mod) {
	    var child = new container_1.Container();
	    var renderer = repo_1.Repository.instance.get(common_1.MetaKeys.renderer);
	    if (!renderer) renderer = html_renderer_1.HtmlRenderer;
	    child.registerInstance(container_1.Container, child);
	    return new module_factory_1.ModuleFactory(child, mod, renderer);
	}
	exports.module = _module;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	var di = __webpack_require__(2);
	var common_1 = __webpack_require__(11);

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	var container_1 = __webpack_require__(4);
	exports.Container = container_1.Container;
	exports.DIBadKeyError = container_1.DIBadKeyError;
	var errors_1 = __webpack_require__(6);
	exports.DIAggregateError = errors_1.DIAggregateError;
	exports.DIError = errors_1.DIError;
	__export(__webpack_require__(9));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	var common_1 = __webpack_require__(5);
	var errors_1 = __webpack_require__(6);
	var activators_1 = __webpack_require__(7);
	var resolvers_1 = __webpack_require__(8);
	//import * as //Debug from '//debug';
	//const //debug = //Debug("di");
	var counter = 0;
	function genid() {
	    return ++counter + "";
	}

	var DIBadKeyError = function (_errors_1$DIError) {
	    _inherits(DIBadKeyError, _errors_1$DIError);

	    function DIBadKeyError(message) {
	        _classCallCheck(this, DIBadKeyError);

	        var _this = _possibleConstructorReturn(this, (DIBadKeyError.__proto__ || Object.getPrototypeOf(DIBadKeyError)).call(this, message));

	        _this.name = 'BadKeyError';
	        _this.message = "key not registered with container";
	        return _this;
	    }

	    return DIBadKeyError;
	}(errors_1.DIError);

	exports.DIBadKeyError = DIBadKeyError;

	var Container = function () {
	    function Container(info) {
	        _classCallCheck(this, Container);

	        this.entries = new Map();
	        this.constructionInfo = info || new Map();
	        this.id = genid();
	    }

	    _createClass(Container, [{
	        key: "hasHandler",

	        /**
	         * Inspects the container to determine if a particular key has been registred.
	        *
	        * @method hasHandler
	        * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	        * @param {Boolean} [checkParent=false] Indicates whether or not to check the parent container hierarchy.
	        * @return {Boolean} Returns true if the key has been registred; false otherwise.
	        */
	        value: function hasHandler(key) {
	            var checkParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            if (key === null || key === undefined) {
	                throw new DIBadKeyError();
	            }
	            return this.entries.has(key) || checkParent && this.parent && this.parent.hasHandler(key, checkParent);
	        }
	        /**
	        * Registers a type (constructor function) by inspecting its registration annotations. If none are found, then the default singleton registration is used.
	        *
	        * @method autoRegister
	        * @param {Function} fn The constructor function to use when the dependency needs to be instantiated.
	        * @param {Object} [key] The key that identifies the dependency at resolution time; usually a constructor function.
	        */

	    }, {
	        key: "autoRegister",
	        value: function autoRegister(fn, key, targetKey, resolveIn) {
	            var registration;
	            var container = resolveIn || this;
	            if (fn === null || fn === undefined) {
	                throw new DIBadKeyError('no key');
	            }
	            if (typeof fn === 'function') {
	                registration = Reflect.get(fn, common_1.MetaKeys.registration, targetKey); // Metadata.get(Metadata.registration, fn, targetKey);
	                if (registration !== undefined) {
	                    registration.register(container, key || fn, fn);
	                } else {
	                    container.registerSingleton(key || fn, fn, targetKey);
	                }
	            } else {
	                container.registerInstance(fn, fn);
	            }
	        }
	        /**
	        * Unregisters based on key.
	        *
	        * @method unregister
	        * @param {Object} key The key that identifies the dependency at resolution time; usually a constructor function.
	        */

	    }, {
	        key: "unregister",
	        value: function unregister(key) {
	            //debug('%s: Unregister key: %s', this.id, key);
	            this.entries.delete(key);
	        }
	        /**
	        * Resolves a single instance based on the provided key.
	        *
	        * @method get
	        * @param {Object} key The key that identifies the object to resolve.
	        * @return {Object} Returns the resolved instance.
	        */

	    }, {
	        key: "get",
	        value: function get(key, targetKey, resolveIn) {
	            //debug("%s: Get %s, target: %s", this.id, String(key), targetKey);
	            var entry;
	            if (key === null || key === undefined) {
	                throw new DIBadKeyError();
	            }
	            if (key === Container) {
	                return this;
	            }
	            if (key instanceof resolvers_1.Resolver) {
	                return key.get(this);
	            }
	            entry = this.entries.get(key);
	            if (entry !== undefined) {
	                return entry[0](this);
	            }
	            if (this.parent && this.parent.hasHandler(key)) {
	                //debug("%s: found key '%s' on parent", this.id, key);
	                return this.parent.get(key, targetKey, resolveIn);
	            }
	            // No point in registrering a string or symbol or number
	            if (typeof key === 'string' || (typeof key === "undefined" ? "undefined" : _typeof(key)) === 'symbol' || typeof key === 'number') {
	                throw errors_1.createError('DIResolveError', 'no component registered for key: ' + String(key));
	            }
	            this.autoRegister(key, null, targetKey, resolveIn);
	            entry = this.entries.get(key);
	            return entry[0](this);
	        }
	        /**
	        * Resolves all instance registered under the provided key.
	        *
	        * @method getAll
	        * @param {Object} key The key that identifies the objects to resolve.
	        * @return {Object[]} Returns an array of the resolved instances.
	        */

	    }, {
	        key: "getAll",
	        value: function getAll(key) {
	            var _this2 = this;

	            var entry;
	            if (key === null || key === undefined) {
	                throw new DIBadKeyError();
	            }
	            entry = this.entries.get(key);
	            if (entry !== undefined) {
	                return entry.map(function (x) {
	                    return x(_this2);
	                });
	            }
	            if (this.parent) {
	                return this.parent.getAll(key);
	            }
	            return [];
	        }
	        /**
	        * Creates a new dependency injection container whose parent is the current container.
	        *
	        * @method createChild
	        * @return {Container} Returns a new container instance parented to this.
	        */

	    }, {
	        key: "createChild",
	        value: function createChild() {
	            var childContainer = new Container(this.constructionInfo);
	            childContainer.parent = this;
	            //debug("%s: Create child container: %s", this.id, childContainer.id);
	            return childContainer;
	        }
	        /**
	         * Resolve dependencies for the given function
	         * @method resolveDependencies
	         * @param {Function} fn
	         * @return {Array<any>}
	         */

	    }, {
	        key: "resolveDependencies",
	        value: function resolveDependencies(fn, targetKey) {
	            //debug("%s: Resolve dependencies for: %j", this.id, fn.name);
	            var info = this._getOrCreateConstructionSet(fn, targetKey),
	                keys = info.keys,
	                args = new Array(keys.length);
	            var i, ii;
	            try {
	                for (i = 0, ii = keys.length; i < ii; ++i) {
	                    args[i] = this.get(keys[i]);
	                }
	            } catch (e) {
	                var message = "Error";
	                if (i < ii) {
	                    message += " The argument at index " + i + " (key:" + keys[i] + ") could not be satisfied.";
	                }
	                //debug('resolve error %s', e)
	                throw errors_1.createError("DependencyError", message, e);
	            }
	            return args;
	        }
	        /**
	        * Invokes a function, recursively resolving its dependencies.
	        *
	        * @method invoke
	        * @param {Function} fn The function to invoke with the auto-resolved dependencies.
	        * @param {any[]} [deps] Additional function dependencies to use during invocation.
	        * @return {Object} Returns the instance resulting from calling the function.
	        */

	    }, {
	        key: "invoke",
	        value: function invoke(fn, deps, targetKey) {
	            var info = this._getOrCreateConstructionSet(fn, targetKey);
	            try {
	                var keys, args;
	                if (info.dependencyResolver) {
	                    args = info.dependencyResolver.resolveDependencies(fn);
	                } else {
	                    args = this.resolveDependencies(fn, targetKey);
	                }
	                if (deps !== undefined && Array.isArray(deps)) {
	                    args = args.concat(deps);
	                }
	                //debug("%s: invoking '%s', with dependencies:", this.id, fn.name, info.keys);
	                return info.activator.invoke(fn, args, targetKey, keys);
	            } catch (e) {
	                var activatingText = info.activator instanceof activators_1.ClassActivator ? 'instantiating' : 'invoking';
	                var message = "Error " + activatingText + " " + fn.name + ".";
	                //debug('invoke error %s', e)
	                message += ' Check the inner error for details.';
	                throw errors_1.createError("DIInvokeError", message, e);
	            }
	        }
	    }, {
	        key: "registerInstance",
	        value: function registerInstance(key, instance) {
	            //debug("%s: Register instance %s", this.id, key);
	            this.registerHandler(key, function (_) {
	                return instance;
	            });
	        }
	    }, {
	        key: "registerTransient",
	        value: function registerTransient(key, fn, targetKey) {
	            //debug("%s: Register transient %s", this.id, key);
	            this.registerHandler(key, function (x) {
	                return x.invoke(fn, null, targetKey);
	            });
	        }
	    }, {
	        key: "registerSingleton",
	        value: function registerSingleton(key, fn, targetKey) {
	            //debug("%s: Register singleton %s", this.id, key);
	            var singleton;
	            this.registerHandler(key, function (x) {
	                return singleton || (singleton = x.invoke(fn, null, targetKey));
	            });
	        }
	    }, {
	        key: "registerHandler",
	        value: function registerHandler(key, handler) {
	            this._getOrCreateEntry(key).push(handler);
	        }
	    }, {
	        key: "_getOrCreateEntry",
	        value: function _getOrCreateEntry(key) {
	            var entry;
	            if (key === null || key === undefined) {
	                throw new errors_1.DIError('key cannot be null or undefined.  (Are you trying to inject something that doesn\'t exist with DI?)');
	            }
	            entry = this.entries.get(key);
	            if (entry === undefined) {
	                entry = [];
	                this.entries.set(key, entry);
	            }
	            return entry;
	        }
	    }, {
	        key: "_getOrCreateConstructionSet",
	        value: function _getOrCreateConstructionSet(fn, targetKey) {
	            var info = this.constructionInfo.get(fn);
	            if (info === undefined) {
	                info = this._createConstructionSet(fn, targetKey);
	                this.constructionInfo.set(fn, info);
	            }
	            return info;
	        }
	    }, {
	        key: "_createConstructionSet",
	        value: function _createConstructionSet(fn, targetKey) {
	            var info = {
	                activator: Reflect.getOwnMetadata(common_1.MetaKeys.instanceActivator, fn, targetKey) || activators_1.ClassActivator.instance,
	                dependencyResolver: Reflect.getOwnMetadata(common_1.MetaKeys.dependencyResolver, fn, targetKey) || this
	            };
	            if (fn.inject !== undefined) {
	                if (typeof fn.inject === 'function') {
	                    info.keys = fn.inject();
	                } else {
	                    info.keys = fn.inject;
	                }
	                return info;
	            }
	            info.keys = Reflect.getOwnMetadata(common_1.MetaKeys.paramTypes, fn, targetKey) || common_1.getFunctionParameters(fn, true) || common_1.emptyParameters;
	            return info;
	        }
	    }, {
	        key: "root",
	        get: function get() {
	            var root = this,
	                tmp = root;
	            while (tmp) {
	                tmp = root.parent;
	                if (tmp) root = tmp;
	            }
	            return root;
	        }
	    }]);

	    return Container;
	}();

	exports.Container = Container;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MetaKeys = {
	    registration: Symbol.for('di:registration'),
	    instanceActivator: Symbol.for('di:instance-activator'),
	    dependencyResolver: Symbol.for('di:dependency-resolver'),
	    paramTypes: 'design:paramtypes',
	    properties: 'design:properties'
	};
	exports.emptyParameters = Object.freeze([]);
	var paramRegEx = /function[^(]*\(([^)]*)\)/i;
	function getFunctionParameters(fn) {
	    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	    var params = Reflect.getOwnMetadata(exports.MetaKeys.paramTypes, fn);
	    if (!params) {
	        var match = fn.toString().match(paramRegEx);
	        if (match) {
	            params = match[1].replace(/\W+/, ' ').split(' ').map(function (x) {
	                return x.replace(',', '').trim();
	            }).filter(function (m) {
	                return m !== '';
	            });
	            if (cache) Reflect.defineMetadata(exports.MetaKeys.paramTypes, params, fn);
	        }
	    }
	    return params || [];
	}
	exports.getFunctionParameters = getFunctionParameters;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	Object.defineProperty(exports, "__esModule", { value: true });

	var DIError = function (_Error) {
	    _inherits(DIError, _Error);

	    function DIError(message) {
	        _classCallCheck(this, DIError);

	        var _this = _possibleConstructorReturn(this, (DIError.__proto__ || Object.getPrototypeOf(DIError)).call(this, message));

	        _this.message = message;
	        return _this;
	    }

	    _createClass(DIError, [{
	        key: "toString",
	        value: function toString() {
	            return "[" + this.name + ": " + this.message + "]";
	        }
	    }]);

	    return DIError;
	}(Error);

	exports.DIError = DIError;

	var DIAggregateError = function (_DIError) {
	    _inherits(DIAggregateError, _DIError);

	    function DIAggregateError(message, errors) {
	        _classCallCheck(this, DIAggregateError);

	        var _this2 = _possibleConstructorReturn(this, (DIAggregateError.__proto__ || Object.getPrototypeOf(DIAggregateError)).call(this, message));

	        _this2.error = errors;
	        return _this2;
	    }

	    _createClass(DIAggregateError, [{
	        key: "toString",
	        value: function toString() {
	            if (this.error == null) {
	                return "[" + this.name + ": " + this.message + "]";
	            } else {
	                return String.prototype.toString.call(this.error);
	            }
	        }
	    }]);

	    return DIAggregateError;
	}(DIError);

	exports.DIAggregateError = DIAggregateError;
	function createError(name, message, error) {
	    var e = void 0;
	    if (error) {
	        e = new DIAggregateError(message, error);
	    } else {
	        e = new DIError(message);
	    }
	    e.name = name;
	    return e;
	}
	exports.createError = createError;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* Used to instantiate a class.
	*
	* @class ClassActivator
	* @constructor
	*/

	var ClassActivator = function () {
	    function ClassActivator() {
	        _classCallCheck(this, ClassActivator);
	    }

	    _createClass(ClassActivator, [{
	        key: "invoke",
	        value: function invoke(fn, args) {
	            return Reflect.construct(fn, args);
	        }
	    }]);

	    return ClassActivator;
	}();

	ClassActivator.instance = new ClassActivator();
	exports.ClassActivator = ClassActivator;
	/**
	* Used to invoke a factory method.
	*
	* @class FactoryActivator
	* @constructor
	*/

	var FactoryActivator = function () {
	    function FactoryActivator() {
	        _classCallCheck(this, FactoryActivator);
	    }

	    _createClass(FactoryActivator, [{
	        key: "invoke",
	        value: function invoke(fn, args) {
	            return fn.apply(undefined, args);
	        }
	    }]);

	    return FactoryActivator;
	}();

	FactoryActivator.instance = new FactoryActivator();
	exports.FactoryActivator = FactoryActivator;

	var AsyncClassActivator = function () {
	    function AsyncClassActivator() {
	        _classCallCheck(this, AsyncClassActivator);
	    }

	    _createClass(AsyncClassActivator, [{
	        key: "invoke",
	        value: function invoke(fn, args) {
	            return Promise.all(args).then(function (args) {
	                return Reflect.construct(fn, args);
	            });
	        }
	    }]);

	    return AsyncClassActivator;
	}();

	AsyncClassActivator.instance = new AsyncClassActivator();
	exports.AsyncClassActivator = AsyncClassActivator;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* An abstract resolver used to allow functions/classes to specify custom dependency resolution logic.
	*
	* @class Resolver
	* @constructor
	*/

	var Resolver = function Resolver() {
	    _classCallCheck(this, Resolver);
	};

	exports.Resolver = Resolver;
	/**
	* Used to allow functions/classes to specify lazy resolution logic.
	*
	* @class Lazy
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to lazily resolve.
	*/

	var Lazy = function (_Resolver) {
	    _inherits(Lazy, _Resolver);

	    function Lazy(key) {
	        _classCallCheck(this, Lazy);

	        var _this = _possibleConstructorReturn(this, (Lazy.__proto__ || Object.getPrototypeOf(Lazy)).call(this));

	        _this.key = key;
	        return _this;
	    }
	    /**
	    * Called by the container to lazily resolve the dependency into a lazy locator function.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Function} Returns a function which can be invoked at a later time to obtain the actual dependency.
	    */

	    _createClass(Lazy, [{
	        key: "get",
	        value: function get(container) {
	            var _this2 = this;

	            return function () {
	                return container.get(_this2.key);
	            };
	        }
	        /**
	        * Creates a Lazy Resolver for the supplied key.
	        *
	        * @method of
	        * @static
	        * @param {Object} key The key to lazily resolve.
	        * @return {Lazy} Returns an insance of Lazy for the key.
	        */

	    }], [{
	        key: "of",
	        value: function of(key) {
	            return new Lazy(key);
	        }
	    }]);

	    return Lazy;
	}(Resolver);

	exports.Lazy = Lazy;
	/**
	* Used to allow functions/classes to specify resolution of all matches to a key.
	*
	* @class All
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to lazily resolve all matches for.
	*/

	var All = function (_Resolver2) {
	    _inherits(All, _Resolver2);

	    function All(key) {
	        _classCallCheck(this, All);

	        var _this3 = _possibleConstructorReturn(this, (All.__proto__ || Object.getPrototypeOf(All)).call(this));

	        _this3.key = key;
	        return _this3;
	    }
	    /**
	    * Called by the container to resolve all matching dependencies as an array of instances.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object[]} Returns an array of all matching instances.
	    */

	    _createClass(All, [{
	        key: "get",
	        value: function get(container) {
	            return container.getAll(this.key);
	        }
	        /**
	        * Creates an All Resolver for the supplied key.
	        *
	        * @method of
	        * @static
	        * @param {Object} key The key to resolve all instances for.
	        * @return {All} Returns an insance of All for the key.
	        */

	    }], [{
	        key: "of",
	        value: function of(key) {
	            return new All(key);
	        }
	    }]);

	    return All;
	}(Resolver);

	exports.All = All;
	/**
	* Used to allow functions/classes to specify an optional dependency, which will be resolved only if already registred with the container.
	*
	* @class Optional
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to optionally resolve for.
	* @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
	*/

	var Optional = function (_Resolver3) {
	    _inherits(Optional, _Resolver3);

	    function Optional(key) {
	        var checkParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        _classCallCheck(this, Optional);

	        var _this4 = _possibleConstructorReturn(this, (Optional.__proto__ || Object.getPrototypeOf(Optional)).call(this));

	        _this4.key = key;
	        _this4.checkParent = checkParent;
	        return _this4;
	    }
	    /**
	    * Called by the container to provide optional resolution of the key.
	    *
	    * @method get
	    * @param {Container} container The container to resolve from.
	    * @return {Object} Returns the instance if found; otherwise null.
	    */

	    _createClass(Optional, [{
	        key: "get",
	        value: function get(container) {
	            if (container.hasHandler(this.key, this.checkParent)) {
	                return container.get(this.key);
	            }
	            return null;
	        }
	        /**
	        * Creates an Optional Resolver for the supplied key.
	        *
	        * @method of
	        * @static
	        * @param {Object} key The key to optionally resolve for.
	        * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
	        * @return {Optional} Returns an insance of Optional for the key.
	        */

	    }], [{
	        key: "of",
	        value: function of(key) {
	            var checkParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            return new Optional(key, checkParent);
	        }
	    }]);

	    return Optional;
	}(Resolver);

	exports.Optional = Optional;
	/**
	* Used to inject the dependency from the parent container instead of the current one.
	*
	* @class Parent
	* @constructor
	* @extends Resolver
	* @param {Object} key The key to resolve from the parent container.
	*/

	var Parent = function (_Resolver4) {
	    _inherits(Parent, _Resolver4);

	    function Parent(key) {
	        _classCallCheck(this, Parent);

	        var _this5 = _possibleConstructorReturn(this, (Parent.__proto__ || Object.getPrototypeOf(Parent)).call(this));

	        _this5.key = key;
	        return _this5;
	    }
	    /**
	    * Called by the container to load the dependency from the parent container
	    *
	    * @method get
	    * @param {Container} container The container to resolve the parent from.
	    * @return {Function} Returns the matching instance from the parent container
	    */

	    _createClass(Parent, [{
	        key: "get",
	        value: function get(container) {
	            return container.parent ? container.parent.get(this.key) : null;
	        }
	        /**
	        * Creates a Parent Resolver for the supplied key.
	        *
	        * @method of
	        * @static
	        * @param {Object} key The key to resolve.
	        * @return {Parent} Returns an insance of Parent for the key.
	        */

	    }], [{
	        key: "of",
	        value: function of(key) {
	            return new Parent(key);
	        }
	    }]);

	    return Parent;
	}(Resolver);

	exports.Parent = Parent;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	var common_1 = __webpack_require__(5);
	var registers_1 = __webpack_require__(10);
	var activators_1 = __webpack_require__(7);
	/**
	 * Auto inject dependencies.
	 */
	function autoinject(target) {
	    target.inject = Reflect.getOwnMetadata(common_1.MetaKeys.paramTypes, target) || common_1.emptyParameters;
	}
	exports.autoinject = autoinject;
	function inject() {
	    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	        rest[_key] = arguments[_key];
	    }

	    return function (target) {
	        target.inject = rest;
	    };
	}
	exports.inject = inject;
	function registration(value, targetKey) {
	    return function (target) {
	        Reflect.defineMetadata(common_1.MetaKeys.registration, value, target, targetKey);
	    };
	}
	exports.registration = registration;
	function transient(key, targetKey) {
	    return registration(new registers_1.TransientRegistration(key), targetKey);
	}
	exports.transient = transient;
	function singleton(keyOrRegisterInChild) {
	    var registerInChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var targetKey = arguments[2];

	    return registration(new registers_1.SingletonRegistration(keyOrRegisterInChild, registerInChild), targetKey);
	}
	exports.singleton = singleton;
	function instanceActivator(value, targetKey) {
	    return function (target) {
	        Reflect.defineMetadata(common_1.MetaKeys.instanceActivator, value, target, targetKey);
	    };
	}
	exports.instanceActivator = instanceActivator;
	function factory() {
	    return instanceActivator(activators_1.FactoryActivator.instance);
	}
	exports.factory = factory;
	function dependencyResolve(value, targetKey) {
	    return function (target) {
	        Reflect.defineMetadata(common_1.MetaKeys.dependencyResolver, value, target, targetKey);
	    };
	}
	exports.dependencyResolve = dependencyResolve;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	* Used to allow functions/classes to indicate that they should be registered as transients with the container.
	*
	* @class TransientRegistration
	* @constructor
	* @param {Object} [key] The key to register as.
	*/

	var TransientRegistration = function () {
	    function TransientRegistration(key) {
	        _classCallCheck(this, TransientRegistration);

	        this.key = key;
	    }
	    /**
	    * Called by the container to register the annotated function/class as transient.
	    *
	    * @method register
	    * @param {Container} container The container to register with.
	    * @param {Object} key The key to register as.
	    * @param {Object} fn The function to register (target of the annotation).
	    */

	    _createClass(TransientRegistration, [{
	        key: "register",
	        value: function register(container, key, fn) {
	            container.registerTransient(this.key || key, fn);
	        }
	    }]);

	    return TransientRegistration;
	}();

	exports.TransientRegistration = TransientRegistration;
	/**
	* Used to allow functions/classes to indicate that they should be registered as singletons with the container.
	*
	* @class SingletonRegistration
	* @constructor
	* @param {Object} [key] The key to register as.
	*/

	var SingletonRegistration = function () {
	    function SingletonRegistration(keyOrRegisterInChild) {
	        var registerInChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        _classCallCheck(this, SingletonRegistration);

	        if (typeof keyOrRegisterInChild === 'boolean') {
	            this.registerInChild = keyOrRegisterInChild;
	        } else {
	            this.key = keyOrRegisterInChild;
	            this.registerInChild = registerInChild;
	        }
	    }
	    /**
	    * Called by the container to register the annotated function/class as a singleton.
	    *
	    * @method register
	    * @param {Container} container The container to register with.
	    * @param {Object} key The key to register as.
	    * @param {Object} fn The function to register (target of the annotation).
	    */

	    _createClass(SingletonRegistration, [{
	        key: "register",
	        value: function register(container, key, fn) {
	            var destination = this.registerInChild ? container : container.root;
	            destination.registerSingleton(this.key || key, fn);
	        }
	    }]);

	    return SingletonRegistration;
	}();

	exports.SingletonRegistration = SingletonRegistration;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MetaKeys = {
	    bindable: Symbol.for('bindable'),
	    renderer: Symbol.for('renderer'),
	    element: Symbol.for('element')
	};

	var Droppable = function Droppable() {
	    _classCallCheck(this, Droppable);
	};

	exports.Droppable = Droppable;
	function isDroppable(a) {
	    return a && typeof a.drop === 'function';
	}
	exports.isDroppable = isDroppable;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	var container_1 = __webpack_require__(1);
	var controller_factory_1 = __webpack_require__(13);
	var factory_1 = __webpack_require__(14);

	var ModuleFactory = function (_factory_1$Factory) {
	    _inherits(ModuleFactory, _factory_1$Factory);

	    function ModuleFactory() {
	        _classCallCheck(this, ModuleFactory);

	        return _possibleConstructorReturn(this, (ModuleFactory.__proto__ || Object.getPrototypeOf(ModuleFactory)).apply(this, arguments));
	    }

	    _createClass(ModuleFactory, [{
	        key: "configure",

	        /**
	         * Configure a service
	         *
	         * @template T
	         * @param {new (...args) => T} config
	         * @param {(e:T) => void} fn
	         * @returns
	         *
	         * @memberOf ModuleFactory
	         */
	        value: function configure(config, fn) {
	            var m = this.container.get(config);
	            fn(m);
	            return this;
	        }
	        /**
	         * Register a controller
	         *
	         * @template T
	         * @param {(string | T)} name
	         * @param {new() => T} [fn]
	         * @returns
	         *
	         * @memberOf ModuleFactory
	         */

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

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	var slick_di_1 = __webpack_require__(2);
	var factory_1 = __webpack_require__(14);
	var common_1 = __webpack_require__(11);

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
	            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            /*return super.create(options).then( instance => {
	                return new ControllerWrapper(this.container, instance);
	            })*/
	            var container = this.container.createChild(false);
	            return this._create(container, options).then(function (instance) {
	                return new ControllerWrapper(container, instance);
	            });
	        }
	    }]);

	    return ControllerFactory;
	}(factory_1.Factory);

	exports.ControllerFactory = ControllerFactory;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	var common_1 = __webpack_require__(11);

	var Factory = function () {
	    function Factory(container, module, _renderer) {
	        _classCallCheck(this, Factory);

	        this.container = container;
	        this.module = module;
	        this._renderer = _renderer;
	    }
	    /**
	     * Override the renderer for this module or controller
	     *
	     * @param {new (el?: HTMLElement) => Renderer} renderer
	     * @returns
	     *
	     * @memberOf Factory
	     */

	    _createClass(Factory, [{
	        key: "renderer",
	        value: function renderer(_renderer2) {
	            if (_renderer2 == null) return this;
	            this._renderer = _renderer2;
	            return this;
	        }
	        /**
	         * Create an instance of the module or controller
	         *
	         * @param {CreateOptions} [options={}]
	         * @returns
	         *
	         * @memberOf Factory
	         */

	    }, {
	        key: "create",
	        value: function create() {
	            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            return this._create(this.container, options);
	        }
	    }, {
	        key: "_create",
	        value: function _create(container) {
	            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var instance = void 0;
	            if (options.el) {
	                if (container.hasHandler(common_1.MetaKeys.element, false)) {
	                    container.unregister(common_1.MetaKeys.element);
	                }
	                container.registerInstance(common_1.MetaKeys.element, options.el);
	                this.__registerRenderer(container);
	            }
	            try {
	                instance = container.get(this.module);
	            } catch (e) {
	                return Promise.reject(e);
	            }
	            if (options && options.el) {
	                if (container.hasHandler(common_1.MetaKeys.renderer, false)) {
	                    var renderer = container.get(common_1.MetaKeys.renderer);
	                    renderer.render(instance, this.container, options.options);
	                    if (typeof instance.didRender === 'function') {
	                        instance.didRender();
	                    }
	                }
	            }
	            return Promise.resolve(instance);
	        }
	    }, {
	        key: "__registerRenderer",
	        value: function __registerRenderer(container) {
	            if (container.hasHandler(common_1.MetaKeys.renderer, false)) {
	                container.unregister(common_1.MetaKeys.renderer);
	            }
	            if (this._renderer) {
	                container.registerTransient(common_1.MetaKeys.renderer, this._renderer);
	            }
	        }
	    }]);

	    return Factory;
	}();

	exports.Factory = Factory;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

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
	var common_1 = __webpack_require__(11);
	var decorators_1 = __webpack_require__(16);
	var container_1 = __webpack_require__(1);

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

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
	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(9));
	var slick_model_1 = __webpack_require__(17);
	var common_1 = __webpack_require__(11);

	var Bindable = function () {
	    function Bindable(property, model) {
	        _classCallCheck(this, Bindable);

	        this.property = property;
	        this.model = model;
	        this.enumerable = true;
	        this.configurable = true;
	    }

	    _createClass(Bindable, [{
	        key: "set",
	        value: function set(value) {
	            this.model.set(this.property, value);
	        }
	    }, {
	        key: "get",
	        value: function get() {
	            return this.model.get(this.property);
	        }
	    }]);

	    return Bindable;
	}();

	__decorate([bind, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], Bindable.prototype, "set", null);
	__decorate([bind, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Object)], Bindable.prototype, "get", null);
	function bind(target, property, descriptor) {
	    var fn = descriptor.value;
	    if (typeof fn !== 'function') {
	        throw new TypeError("Can only bind functions");
	    }
	    var definingProperty = false;
	    return {
	        configurable: true,
	        get: function get() {
	            if (definingProperty || this === target.prototype || this.hasOwnProperty(property)) {
	                return fn;
	            }
	            var boundFn = fn.bind(this);
	            definingProperty = true;
	            Object.defineProperty(this, property, {
	                value: boundFn,
	                configurable: true,
	                writable: true
	            });
	            definingProperty = false;
	            return boundFn;
	        }
	    };
	}
	exports.bind = bind;
	function bindable(target, property, descriptor) {
	    var store = Reflect.getOwnMetadata(common_1.MetaKeys.bindable, target);
	    if (!store) {
	        store = new slick_model_1.Model();
	        Reflect.defineMetadata(common_1.MetaKeys.bindable, store, target);
	    }
	    if (!descriptor) {
	        descriptor = new Bindable(property, store);
	        Object.defineProperty(target, property, descriptor);
	    }
	}
	exports.bindable = bindable;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(19));
	var decorators_1 = __webpack_require__(23);
	exports.observable = decorators_1.observable;
	exports.validate = decorators_1.validate;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var eventsjs_1 = __webpack_require__(20);
	var equal_1 = __webpack_require__(21);
	var meta_1 = __webpack_require__(22);

	var Model = function (_eventsjs_1$EventEmit) {
	    _inherits(Model, _eventsjs_1$EventEmit);

	    function Model() {
	        _classCallCheck(this, Model);

	        var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

	        _this[meta_1.Attributes] = new Map();
	        return _this;
	    }

	    _createClass(Model, [{
	        key: "set",
	        value: function set(key, value) {
	            var old = this.get(key);
	            if (equal_1.equal(old, value)) {
	                return this;
	            }
	            this[meta_1.Attributes].set(key, value);
	            this.trigger("change:" + key, old, value);
	            this.trigger('change', _defineProperty({}, key, value));
	        }
	    }, {
	        key: "get",
	        value: function get(key) {
	            return this[meta_1.Attributes].get(key);
	        }
	    }, {
	        key: "has",
	        value: function has(key) {
	            return this[meta_1.Attributes].has(key);
	        }
	    }, {
	        key: "unset",
	        value: function unset(key) {
	            if (this.has(key)) {
	                var val = this.get(key);
	                this[meta_1.Attributes].delete(key);
	                this.trigger("remove:" + key, val);
	                this.trigger('remove', key, val);
	                return val;
	            }
	            return null;
	        }
	    }, {
	        key: "toJSON",
	        value: function toJSON() {
	            if (!this[meta_1.Attributes]) return {};
	            return this[meta_1.Attributes];
	        }
	    }]);

	    return Model;
	}(eventsjs_1.EventEmitter);

	exports.Model = Model;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var idCounter = 0;
	function getID() {
	    return "" + ++idCounter;
	}
	/**
	 *
	 *
	 * @export
	 * @class EventEmitterError
	 * @extends {Error}
	 */
	var EventEmitterError = function (_super) {
	    __extends(EventEmitterError, _super);
	    /**
	     * Creates an instance of EventEmitterError.
	     *
	     * @param {string} [message]
	     * @param {string} [method]
	     * @param {*} [klass]
	     * @param {*} [ctx]
	     *
	     * @memberOf EventEmitterError
	     */
	    function EventEmitterError(message, method, klass, ctx) {
	        _super.call(this, message);
	        this.message = message;
	        this.method = method;
	        this.klass = klass;
	        this.ctx = ctx;
	    }
	    /**
	     *
	     *
	     * @returns
	     *
	     * @memberOf EventEmitterError
	     */
	    EventEmitterError.prototype.toString = function () {
	        var prefix = "EventEmitterError";
	        if (this.method && this.method != "") {
	            prefix = "EventEmitter#" + this.method;
	        }
	        return prefix + ": " + this.message;
	    };
	    return EventEmitterError;
	}(Error);
	exports.EventEmitterError = EventEmitterError;
	function removeFromListener(listeners, fn, ctx) {
	    for (var i = 0; i < listeners.length; i++) {
	        var e = listeners[i];
	        if (fn == null && ctx != null && e.ctx === ctx || fn != null && ctx == null && e.handler === fn || fn != null && ctx != null && e.handler === fn && e.ctx === ctx) {
	            listeners.splice(i, 1);
	        }
	    }
	    return listeners;
	}
	/**
	 *
	 *
	 * @export
	 * @param {Events[]} fn
	 * @param {any[]} [args=[]]
	 * @returns
	 */
	function callFunc(fn, args) {
	    if (args === void 0) {
	        args = [];
	    }
	    var l = fn.length,
	        i = -1,
	        a1 = args[0],
	        a2 = args[1],
	        a3 = args[2],
	        a4 = args[3];
	    switch (args.length) {
	        case 0:
	            while (++i < l) {
	                fn[i].handler.call(fn[i].ctx);
	            }return;
	        case 1:
	            while (++i < l) {
	                fn[i].handler.call(fn[i].ctx, a1);
	            }return;
	        case 2:
	            while (++i < l) {
	                fn[i].handler.call(fn[i].ctx, a1, a2);
	            }return;
	        case 3:
	            while (++i < l) {
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3);
	            }return;
	        case 4:
	            while (++i < l) {
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4);
	            }return;
	        default:
	            while (++i < l) {
	                fn[i].handler.apply(fn[i].ctx, args);
	            }return;
	    }
	}
	exports.callFunc = callFunc;
	/**
	 *
	 *
	 * @export
	 * @param {*} a
	 * @returns {a is Function}
	 */
	function isFunction(a) {
	    return typeof a === 'function';
	}
	exports.isFunction = isFunction;
	/**
	 *
	 *
	 * @export
	 * @param {*} a
	 * @returns {a is EventEmitter}
	 */
	function isEventEmitter(a) {
	    return a && (a instanceof EventEmitter || isFunction(a.on) && isFunction(a.once) && isFunction(a.off) && isFunction(a.trigger));
	}
	exports.isEventEmitter = isEventEmitter;
	/**
	 *
	 *
	 * @export
	 * @class EventEmitter
	 * @implements {IEventEmitter}
	 * @implements {Destroyable}
	 */
	var EventEmitter = function () {
	    function EventEmitter() {}
	    Object.defineProperty(EventEmitter.prototype, "listeners", {
	        /**
	         *
	         *
	         * @readonly
	         * @type {{ [key: string]: Events[] }}
	         * @memberOf EventEmitter
	         */
	        get: function get() {
	            return this._listeners;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     *
	     *
	     * @param {string} event
	     * @param {EventHandler} fn
	     * @param {*} [ctx]
	     * @param {boolean} [once=false]
	     * @returns {*}
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.on = function (event, fn, ctx, once) {
	        if (once === void 0) {
	            once = false;
	        }
	        var events = (this._listeners || (this._listeners = {}))[event] || (this._listeners[event] = []);
	        events.push({
	            name: event,
	            once: once,
	            handler: fn,
	            ctx: ctx || this
	        });
	        return this;
	    };
	    /**
	     *
	     *
	     * @param {string} event
	     * @param {EventHandler} fn
	     * @param {*} [ctx]
	     * @returns {*}
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.once = function (event, fn, ctx) {
	        return this.on(event, fn, ctx, true);
	    };
	    /**
	     *
	     *
	     * @param {string} [eventName]
	     * @param {EventHandler} [fn]
	     * @param {*} [ctx]
	     * @returns {*}
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.off = function (eventName, fn, ctx) {
	        this._listeners = this._listeners || {};
	        if (eventName == null && ctx == null) {
	            this._listeners = {};
	        } else if (this._listeners[eventName]) {
	            var events = this._listeners[eventName];
	            if (fn == null && ctx == null) {
	                this._listeners[eventName] = [];
	            } else {
	                /*for (let i = 0; i < events.length; i++) {
	                  let e = events[i];
	                  if ((fn == null && ctx != null && e.ctx === ctx) ||
	                    (fn != null && ctx == null && e.handler === fn) ||
	                    (fn != null && ctx != null && e.handler === fn && e.ctx === ctx)) {
	                    this._listeners[eventName].splice(i, 1);
	                  }
	                }*/
	                removeFromListener(events, fn, ctx);
	            }
	        } else {
	            for (var en in this.listeners) {
	                var l = this.listeners[en];
	                removeFromListener(l, fn, ctx);
	            }
	        }
	        return this;
	    };
	    /**
	     *
	     *
	     * @param {string} eventName
	     * @param {...any[]} args
	     * @returns {*}
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.trigger = function (eventName) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        this._listeners = this._listeners || {};
	        var events = (this._listeners[eventName] || []).concat(this._listeners['all'] || []).concat(this._listeners["*"] || []);
	        if (EventEmitter.debugCallback) EventEmitter.debugCallback(this.constructor.name, this.name, eventName, args, events);
	        var event, a, index;
	        var calls = [];
	        var alls = [];
	        for (var i = 0, ii = events.length; i < ii; i++) {
	            event = events[i];
	            a = args;
	            if (events[i].name == 'all' || events[i].name == '*') {
	                alls.push(events[i]);
	            } else {
	                calls.push(events[i]);
	            }
	            if (events[i].once === true) {
	                index = this._listeners[events[i].name].indexOf(events[i]);
	                this._listeners[events[i].name].splice(index, 1);
	            }
	        }
	        if (alls.length) {
	            var a_1 = [eventName].concat(args);
	            this._executeListener(alls, a_1);
	        }
	        if (calls.length) this._executeListener(calls, args);
	        return this;
	    };
	    /**
	     *
	     *
	     * @param {Events[]} func
	     * @param {any[]} [args]
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype._executeListener = function (func, args) {
	        EventEmitter.executeListenerFunction(func, args);
	    };
	    /**
	     *
	     *
	     * @param {IEventEmitter} obj
	     * @param {string} event
	     * @param {EventHandler} fn
	     * @param {*} [ctx]
	     * @param {boolean} [once=false]
	     * @returns {*}
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.listenTo = function (obj, event, fn, ctx, once) {
	        if (once === void 0) {
	            once = false;
	        }
	        if (!isEventEmitter(obj)) {
	            if (EventEmitter.throwOnError) throw new EventEmitterError("obj is not an EventEmitter", once ? "listenToOnce" : "listenTo", this, obj);
	            return this;
	        }
	        var listeningTo, id, meth;
	        listeningTo = this._listeningTo || (this._listeningTo = {});
	        id = obj.listenId || (obj.listenId = getID());
	        listeningTo[id] = obj;
	        meth = once ? 'once' : 'on';
	        obj[meth](event, fn, this);
	        return this;
	    };
	    /**
	     *
	     *
	     * @param {IEventEmitter} obj
	     * @param {string} event
	     * @param {EventHandler} fn
	     * @param {*} [ctx]
	     * @returns {*}
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.listenToOnce = function (obj, event, fn, ctx) {
	        return this.listenTo(obj, event, fn, ctx, true);
	    };
	    /**
	     *
	     *
	     * @param {IEventEmitter} [obj]
	     * @param {string} [event]
	     * @param {EventHandler} [callback]
	     * @returns
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.stopListening = function (obj, event, callback) {
	        if (obj && !isEventEmitter(obj)) {
	            if (EventEmitter.throwOnError) throw new EventEmitterError("obj is not an EventEmitter", "stopListening", this, obj);
	            return this;
	        }
	        var listeningTo = this._listeningTo;
	        if (!listeningTo) return this;
	        var remove = !event && !callback;
	        if (!callback && (typeof event === "undefined" ? "undefined" : _typeof(event)) === 'object') callback = this;
	        if (obj) (listeningTo = {})[obj.listenId] = obj;
	        for (var id in listeningTo) {
	            obj = listeningTo[id];
	            obj.off(event, callback, this);
	            if (remove || !Object.keys(obj.listeners).length) delete this._listeningTo[id];
	        }
	        return this;
	    };
	    /**
	     *
	     *
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.prototype.destroy = function () {
	        this.stopListening();
	        this.off();
	    };
	    /**
	     *
	     *
	     * @static
	     * @type {boolean}
	     * @memberOf EventEmitter
	     */
	    EventEmitter.throwOnError = true;
	    /**
	     *
	     *
	     * @static
	     *
	     * @memberOf EventEmitter
	     */
	    EventEmitter.executeListenerFunction = function (func, args) {
	        callFunc(func, args);
	    };
	    return EventEmitter;
	}();
	exports.EventEmitter = EventEmitter;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function equal(a, b) {
	    return eq(a, b, [], []);
	}
	exports.equal = equal;
	var _has = Object.prototype.hasOwnProperty;
	function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a == 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    //if (a instanceof _) a = a._wrapped;
	    //if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className != toString.call(b)) return false;
	    switch (className) {
	        // Strings, numbers, dates, and booleans are compared by value.
	        case '[object String]':
	            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	            // equivalent to `new String("5")`.
	            return a == String(b);
	        case '[object Number]':
	            // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
	            // other numeric values.
	            return a !== +a ? b !== +b : a === 0 ? 1 / a === 1 / b : a === +b;
	        case '[object Date]':
	        case '[object Boolean]':
	            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	            // millisecond representations. Note that invalid dates with millisecond representations
	            // of `NaN` are not equivalent.
	            return +a == +b;
	        // RegExps are compared by their source patterns and flags.
	        case '[object RegExp]':
	            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
	    }
	    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	        // Linear search. Performance is inversely proportional to the number of
	        // unique nested structures.
	        if (aStack[length] == a) return bStack[length] == b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor,
	        bCtor = b.constructor;
	    if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor)) {
	        return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0,
	        result = true;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	        // Compare array lengths to determine if a deep comparison is necessary.
	        size = a.length;
	        result = size === b.length;
	        if (result) {
	            // Deep compare the contents, ignoring non-numeric properties.
	            while (size--) {
	                if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	            }
	        }
	    } else {
	        // Deep compare objects.
	        for (var key in a) {
	            if (_has.call(a, key)) {
	                // Count the expected number of properties.
	                size++;
	                // Deep compare each member.
	                if (!(result = _has.call(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	            }
	        }
	        // Ensure that both objects contain the same number of properties.
	        if (result) {
	            for (key in b) {
	                if (_has.call(b, key) && !size--) break;
	            }
	            result = !size;
	        }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	}
	;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.Attributes = Symbol("attributes");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var model_1 = __webpack_require__(19);
	var equal_1 = __webpack_require__(21);
	function setter(target, prop) {
	    if (!(target instanceof model_1.Model)) {
	        throw new TypeError("Target must be a EventEmitter");
	    }
	    return function $observableSetter(value) {
	        if (value === undefined) {
	            //delete this[Attributes][prop];
	            this.delete(prop);
	            return;
	        }
	        if (this instanceof model_1.Model) {
	            return this.set(prop, value);
	        }
	        /*let old = this.get(prop)
	        if (equal(old, value)) {
	            return;
	        }
	        this[Attributes][prop] = value;
	        this.trigger(`change:${prop}`, old, value)
	        this.trigger('change', { [prop]: value })*/
	    };
	}
	function getter(_, prop) {
	    return function () {
	        return this.get(prop);
	    };
	}
	function observable(target, prop, descriptor) {
	    descriptor = descriptor || Object.getOwnPropertyDescriptor(target, prop);
	    if (!descriptor) {
	        descriptor = {
	            get: getter(target, prop),
	            set: setter(target, prop),
	            enumerable: false,
	            configurable: false
	        };
	        Object.defineProperty(target, prop, descriptor);
	    } else if (descriptor.set) {
	        var oSet = descriptor.set;
	        descriptor.set = function $observableSet(value) {
	            var old = this[prop];
	            if (equal_1.equal(old, value)) {
	                return;
	            }
	            oSet(value);
	            this.trigger("change:" + prop, old, value);
	            this.trigger('change', _defineProperty({}, prop, value));
	        };
	    }
	}
	exports.observable = observable;
	function validator(type, value) {
	    switch (type) {
	        case Number:
	            return typeof value === 'number';
	        case String:
	            return typeof value === 'string';
	        case Boolean:
	            return typeof value === 'boolean';
	        case Date:
	            return typeof value === 'date';
	    }
	    return value instanceof value;
	}
	function validate(target, propertyKey, descriptor) {
	    //let set = descriptor.set;
	    descriptor = descriptor || Object.getOwnPropertyDescriptor(target, propertyKey);
	    if (!descriptor) {
	        descriptor = {
	            set: function $validateSet(value) {
	                var type = Reflect.getMetadata("design:type", target, propertyKey);
	                if (!validator(type, value)) {
	                    throw new TypeError("Invalid type.");
	                }
	                this.set(propertyKey, value);
	            },
	            get: function $validateGet() {
	                return this.get(propertyKey);
	            }
	        };
	        Object.defineProperty(target, propertyKey, descriptor);
	    } else if (descriptor.set) {
	        var set = descriptor.set;
	        descriptor.set = function $validateSet(value) {
	            var type = Reflect.getMetadata("design:type", target, propertyKey);
	            if (!validator(type, value)) {
	                throw new TypeError("Invalid type.");
	            }
	            set(value);
	        };
	    }
	}
	exports.validate = validate;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	var slick_di_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(11);
	var dom = __webpack_require__(25);
	var Html = function (_dom$Html) {
	    _inherits(Html, _dom$Html);

	    function Html(el) {
	        _classCallCheck(this, Html);

	        return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).call(this, [el]));
	    }

	    return Html;
	}(dom.Html);
	Html = __decorate([slick_di_1.transient(), slick_di_1.inject(common_1.MetaKeys.element), __metadata("design:paramtypes", [HTMLElement])], Html);
	exports.Html = Html;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(26));
	__export(__webpack_require__(28));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	// TODO: CreateHTML
	var utils_1 = __webpack_require__(27);
	var ElementProto = typeof Element !== 'undefined' && Element.prototype || {};
	var matchesSelector = ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector || ElementProto.oMatchesSelector || function (selector) {
	    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
	    return !!~utils_1.indexOf(nodeList, this);
	};
	var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
	    return this.attachEvent('on' + eventName, listener);
	};
	var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
	    return this.detachEvent('on' + eventName, listener);
	};
	var transitionEndEvent = function transitionEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitTransition': 'webkitTransitionEnd',
	        'MozTransition': 'transitionend',
	        'OTransition': 'oTransitionEnd otransitionend',
	        'transition': 'transitionend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	};
	var animationEndEvent = function animationEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitAnimation': 'webkitAnimationEnd',
	        'MozAnimation': 'animationend',
	        'OAnimation': 'oAnimationEnd oanimationend',
	        'animation': 'animationend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	};
	function matches(elm, selector) {
	    return matchesSelector.call(elm, selector);
	}
	exports.matches = matches;
	function addEventListener(elm, eventName, listener) {
	    var useCap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	    elementAddEventListener.call(elm, eventName, listener, useCap);
	}
	exports.addEventListener = addEventListener;
	function removeEventListener(elm, eventName, listener) {
	    elementRemoveEventListener.call(elm, eventName, listener);
	}
	exports.removeEventListener = removeEventListener;
	var unbubblebles = 'focus blur change load error'.split(' ');
	var domEvents = [];
	function delegate(elm, selector, eventName, callback, ctx) {
	    var root = elm;
	    var handler = function handler(e) {
	        var node = e.target || e.srcElement;
	        // Already handled
	        if (e.delegateTarget) return;
	        for (; node && node != root; node = node.parentNode) {
	            if (matches(node, selector)) {
	                e.delegateTarget = node;
	                callback(e);
	            }
	        }
	    };
	    var useCap = !!~unbubblebles.indexOf(eventName);
	    addEventListener(elm, eventName, handler, useCap);
	    domEvents.push({ eventName: eventName, handler: handler, listener: callback, selector: selector });
	    return handler;
	}
	exports.delegate = delegate;
	function undelegate(elm, selector, eventName, callback) {
	    /*if (typeof selector === 'function') {
	        listener = <Function>selector;
	        selector = null;
	      }*/
	    var handlers = domEvents.slice();
	    for (var i = 0, len = handlers.length; i < len; i++) {
	        var item = handlers[i];
	        var match = item.eventName === eventName && (callback ? item.listener === callback : true) && (selector ? item.selector === selector : true);
	        if (!match) continue;
	        removeEventListener(elm, item.eventName, item.handler);
	        domEvents.splice(utils_1.indexOf(handlers, item), 1);
	    }
	}
	exports.undelegate = undelegate;
	function addClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            if (elm.classList.contains(split[i].trim())) continue;
	            elm.classList.add(split[i].trim());
	        }
	    } else {
	        elm.className = utils_1.unique(elm.className.split(' ').concat(className.split(' '))).join(' ');
	    }
	}
	exports.addClass = addClass;
	function removeClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            elm.classList.remove(split[i].trim());
	        }
	    } else {
	        var _split = elm.className.split(' '),
	            classNames = className.split(' '),
	            tmp = _split,
	            index = void 0;
	        for (var _i = 0, _ii = classNames.length; _i < _ii; _i++) {
	            index = _split.indexOf(classNames[_i]);
	            if (!!~index) _split = _split.splice(index, 1);
	        }
	    }
	}
	exports.removeClass = removeClass;
	function hasClass(elm, className) {
	    if (elm.classList) {
	        return elm.classList.contains(className);
	    }
	    var reg = new RegExp('\b' + className);
	    return reg.test(elm.className);
	}
	exports.hasClass = hasClass;
	function toggler(elm) {
	    if (elm.classList) return function (className) {
	        return elm.classList.toggle(className);
	    };
	    return function (className) {
	        if (hasClass(elm, className)) return removeClass(elm, className);
	        return addClass(elm, className);
	    };
	}
	function toggleClass(elm, classNames) {
	    var classList = classNames.split(' ');
	    var toggle = toggler(elm);
	    for (var i = 0, ii = classList.length; i < ii; i++) {
	        toggle(classList[i]);
	    }
	}
	exports.toggleClass = toggleClass;
	function selectionStart(elm) {
	    if ('selectionStart' in elm) {
	        // Standard-compliant browsers
	        return elm.selectionStart;
	    } else if (document.selection) {
	        // IE
	        elm.focus();
	        var sel = document.selection.createRange();
	        var selLen = document.selection.createRange().text.length;
	        sel.moveStart('character', -elm.value.length);
	        return sel.text.length - selLen;
	    }
	}
	exports.selectionStart = selectionStart;
	var _events = {
	    animationEnd: null,
	    transitionEnd: null
	};
	function transitionEnd(elm, fn, ctx, duration) {
	    var event = _events.transitionEnd || (_events.transitionEnd = transitionEndEvent());
	    var callback = function callback(e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.transitionEnd = transitionEnd;
	function animationEnd(elm, fn, ctx, duration) {
	    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
	    var callback = function callback(e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.animationEnd = animationEnd;
	exports.domReady = function () {
	    var fns = [],
	        _listener,
	        doc = document,
	        hack = doc.documentElement.doScroll,
	        domContentLoaded = 'DOMContentLoaded',
	        loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
	    if (!loaded) {
	        doc.addEventListener(domContentLoaded, _listener = function listener() {
	            doc.removeEventListener(domContentLoaded, _listener);
	            loaded = true;
	            while (_listener = fns.shift()) {
	                _listener();
	            }
	        });
	    }
	    return function (fn) {
	        loaded ? setTimeout(fn, 0) : fns.push(fn);
	    };
	}();
	function createElement(tag, attr) {
	    var elm = document.createElement(tag);
	    if (attr) {
	        for (var key in attr) {
	            elm.setAttribute(key, attr[key]);
	        }
	    }
	    return elm;
	}
	exports.createElement = createElement;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", { value: true });
	function unique(array) {
	    var seen = new Map();
	    return array.filter(function (e, i) {
	        if (seen.has(e)) return false;
	        seen.set(e, true);
	        return true;
	    });
	}
	exports.unique = unique;
	function indexOf(array, item) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (array[i] === item) return i;
	    }return -1;
	}
	exports.indexOf = indexOf;
	function isObject(obj) {
	    return obj === Object(obj);
	}
	exports.isObject = isObject;
	var _slice = Array.prototype.slice;
	function slice(array, begin, end) {
	    return _slice.call(array, begin, end);
	}
	exports.slice = slice;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(27);
	var dom = __webpack_require__(26);
	var singleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function parseHTML(html) {
	    var parsed = singleTag.exec(html);
	    if (parsed) {
	        return document.createElement(parsed[0]);
	    }
	    var div = document.createElement('div');
	    div.innerHTML = html;
	    var element = div.firstChild;
	    return element;
	}
	var domEvents = new Map();

	var Html = function () {
	    _createClass(Html, [{
	        key: "length",
	        get: function get() {
	            return this._elements.length;
	        }
	    }], [{
	        key: "query",
	        value: function query(_query, context) {
	            if (typeof context === 'string') {
	                context = document.querySelectorAll(context);
	            }
	            var html = void 0;
	            var els = void 0;
	            if (typeof _query === 'string') {
	                if (_query.length > 0 && _query[0] === '<' && _query[_query.length - 1] === ">" && _query.length >= 3) {
	                    return new Html([parseHTML(_query)]);
	                }
	                if (context) {
	                    if (context instanceof HTMLElement) {
	                        els = utils_1.slice(context.querySelectorAll(_query));
	                    } else {
	                        html = new Html(utils_1.slice(context));
	                        return html.find(_query);
	                    }
	                } else {
	                    els = utils_1.slice(document.querySelectorAll(_query));
	                }
	            } else if (_query && _query instanceof Element) {
	                els = [_query];
	            } else if (_query && _query instanceof NodeList) {
	                els = utils_1.slice(_query);
	            }
	            return new Html(els);
	        }
	    }, {
	        key: "removeAllEventListeners",
	        value: function removeAllEventListeners() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = domEvents.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var el = _step.value;

	                    var entries = domEvents.get(el);
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = entries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var entry = _step2.value;

	                            dom.removeEventListener(el, entry.event, entry.callback);
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

	                    domEvents.delete(el);
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
	        }
	    }, {
	        key: "_domEvents",
	        value: function _domEvents() {
	            return domEvents;
	        }
	    }]);

	    function Html(el) {
	        _classCallCheck(this, Html);

	        if (!Array.isArray(el)) el = [el];
	        this._elements = el || [];
	    }

	    _createClass(Html, [{
	        key: "get",
	        value: function get(n) {
	            n = n === undefined || n < 0 ? 0 : n;
	            return n >= this.length ? undefined : this._elements[n];
	        }
	    }, {
	        key: "addClass",
	        value: function addClass(str) {
	            return this.forEach(function (e) {
	                dom.addClass(e, str);
	            });
	        }
	    }, {
	        key: "removeClass",
	        value: function removeClass(str) {
	            return this.forEach(function (e) {
	                dom.removeClass(e, str);
	            });
	        }
	    }, {
	        key: "hasClass",
	        value: function hasClass(str) {
	            return this._elements.reduce(function (p, c) {
	                return dom.hasClass(c, str);
	            }, false);
	        }
	    }, {
	        key: "toggleClass",
	        value: function toggleClass(str) {
	            this.forEach(function (m) {
	                dom.toggleClass(m, str);
	            });
	            return this;
	        }
	    }, {
	        key: "attr",
	        value: function attr(key, value) {
	            var attr = void 0;
	            if (typeof key === 'string' && value) {
	                attr = _defineProperty({}, key, value);
	            } else if (typeof key == 'string') {
	                if (this.length) return this.get(0).getAttribute(key);
	            } else if (utils_1.isObject(key)) {
	                attr = key;
	            }
	            return this.forEach(function (e) {
	                for (var k in attr) {
	                    e.setAttribute(k, attr[k]);
	                }
	            });
	        }
	    }, {
	        key: "text",
	        value: function text(str) {
	            if (arguments.length === 0) {
	                return this.length > 0 ? this.get(0).textContent : null;
	            }
	            return this.forEach(function (e) {
	                return e.textContent = str;
	            });
	        }
	    }, {
	        key: "html",
	        value: function html(_html) {
	            if (arguments.length === 0) {
	                return this.length > 0 ? this.get(0).innerHTML : null;
	            }
	            return this.forEach(function (e) {
	                return e.innerHTML = _html;
	            });
	        }
	    }, {
	        key: "css",
	        value: function css(attr, value) {
	            if (arguments.length === 2) {
	                return this.forEach(function (e) {
	                    if (attr in e.style) e.style[attr] = String(value);
	                });
	            } else {
	                return this.forEach(function (e) {
	                    for (var k in attr) {
	                        if (k in e.style) e.style[k] = String(attr[k]);
	                    }
	                });
	            }
	        }
	    }, {
	        key: "parent",
	        value: function parent() {
	            var out = [];
	            this.forEach(function (e) {
	                if (e.parentElement) {
	                    out.push(e.parentElement);
	                }
	            });
	            return new Html(out);
	        }
	    }, {
	        key: "remove",
	        value: function remove() {
	            return this.forEach(function (e) {
	                if (e.parentElement) e.parentElement.removeChild(e);
	            });
	        }
	    }, {
	        key: "clone",
	        value: function clone() {
	            return new Html(this.map(function (m) {
	                return m.cloneNode();
	            }));
	        }
	    }, {
	        key: "find",
	        value: function find(str) {
	            var out = [];
	            this.forEach(function (e) {
	                out = out.concat(utils_1.slice(e.querySelectorAll(str)));
	            });
	            return new Html(out);
	        }
	    }, {
	        key: "map",
	        value: function map(fn) {
	            var out = new Array(this.length);
	            this.forEach(function (e, i) {
	                out[i] = fn(e, i);
	            });
	            return out;
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(fn) {
	            this._elements.forEach(fn);
	            return this;
	        }
	    }, {
	        key: "on",
	        value: function on(name, callback, useCap) {
	            return this.forEach(function (e) {
	                var entries = domEvents.get(e);
	                if (!entries) {
	                    entries = [];
	                    domEvents.set(e, entries);
	                }
	                dom.addEventListener(e, name, callback, useCap);
	                entries.push({
	                    event: name,
	                    callback: callback
	                });
	            });
	        }
	    }, {
	        key: "once",
	        value: function once(name, callback, useCap) {
	            var _this = this;

	            return this.on(name, function (e) {
	                callback(e);
	                setTimeout(function () {
	                    return _this.off(name, callback);
	                });
	            }, useCap);
	        }
	    }, {
	        key: "off",
	        value: function off(name, callback) {
	            if (!name) {
	                return this.forEach(function (el) {
	                    var entries = domEvents.get(el);
	                    if (entries) {
	                        entries.forEach(function (e) {
	                            dom.removeEventListener(el, e.event, e.callback);
	                        });
	                        domEvents.delete(el);
	                    }
	                });
	            }
	            return this.forEach(function (el) {
	                var entries = domEvents.get(el);
	                if (!entries) return;
	                entries.forEach(function (entry, index) {
	                    if (entry.event === name && (callback ? callback === entry.callback : true)) {
	                        domEvents.get(el).splice(index, 1);
	                    }
	                });
	                if (!domEvents.get(el).length) domEvents.delete(el);
	            });
	        }
	    }, {
	        key: "animationEnd",
	        value: function animationEnd(callback, timeout) {
	            return this.forEach(function (el) {
	                dom.animationEnd(el, callback, null, timeout);
	            });
	        }
	    }, {
	        key: "transitionEnd",
	        value: function transitionEnd(callback, timeout) {
	            return this.forEach(function (el) {
	                dom.transitionEnd(el, callback, null, timeout);
	            });
	        }
	        // Iterator

	    }, {
	        key: Symbol.iterator,
	        value: function value() {
	            var pointer = 0;
	            var components = this._elements;
	            var len = components.length;
	            return {
	                next: function next() {
	                    var done = pointer >= len;
	                    return {
	                        done: done,
	                        value: done ? null : components[pointer++]
	                    };
	                }
	            };
	        }
	    }]);

	    return Html;
	}();

	exports.Html = Html;
	function html(query, context) {
	    return Html.query(query, context);
	}
	exports.html = html;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	Object.defineProperty(exports, "__esModule", { value: true });

	var Repository = function () {
	    function Repository() {
	        _classCallCheck(this, Repository);

	        this.entry = new Map();
	    }

	    _createClass(Repository, [{
	        key: "register",
	        value: function register(key, value) {
	            this.entry.set(key, value);
	        }
	    }, {
	        key: "get",
	        value: function get(key) {
	            return this.entry.get(key);
	        }
	    }]);

	    return Repository;
	}();

	Repository.instance = new Repository();
	exports.Repository = Repository;

/***/ }
/******/ ])
});
;