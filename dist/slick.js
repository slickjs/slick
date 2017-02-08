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
	var container_1 = __webpack_require__(1);
	var module_factory_1 = __webpack_require__(15);
	var common_1 = __webpack_require__(18);
	var html_renderer_1 = __webpack_require__(19);
	__export(__webpack_require__(20));
	var common_2 = __webpack_require__(18);
	exports.MetaKeys = common_2.MetaKeys;
	exports.Droppable = common_2.Droppable;
	var slick_model_1 = __webpack_require__(21);
	exports.Model = slick_model_1.Model;
	var container_2 = __webpack_require__(1);
	exports.Container = container_2.Container;
	//const container = new Container();
	var repo_1 = __webpack_require__(28);
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

	var di = __webpack_require__(2);

	var Container = function (_di$Container) {
	    _inherits(Container, _di$Container);

	    function Container() {
	        _classCallCheck(this, Container);

	        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
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
	var container_1 = __webpack_require__(4);
	exports.Container = container_1.Container;
	exports.DIBadKeyError = container_1.DIBadKeyError;
	var errors_1 = __webpack_require__(10);
	exports.DIAggregateError = errors_1.DIAggregateError;
	exports.DIError = errors_1.DIError;
	__export(__webpack_require__(13));
	__export(__webpack_require__(11));
	__export(__webpack_require__(12));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _debug = __webpack_require__(5);

	var _debug2 = _interopRequireDefault(_debug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var common_1 = __webpack_require__(9);
	var errors_1 = __webpack_require__(10);
	var activators_1 = __webpack_require__(11);
	var resolvers_1 = __webpack_require__(12);


	var debug = (0, _debug2.default)("di");
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
	            debug('%s: Unregister key: %s', this.id, key);
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
	            debug("%s: Get %s, target: %s", this.id, String(key), targetKey);
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
	                debug("%s: found key '%s' on parent", this.id, key);
	                return this.parent.get(key, targetKey, resolveIn);
	            }
	            // No point in registrering a string
	            if (typeof key === 'string') {
	                throw errors_1.createError('DIResolveError', 'no component registered for key: ' + key);
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
	            debug("%s: Create child container: %s", this.id, childContainer.id);
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
	            debug("%s: Resolve dependencies for: %j", this.id, fn.name);
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
	                debug('resolve error %s', e);
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
	                debug("%s: invoking '%s', with dependencies:", this.id, fn.name, info.keys);
	                return info.activator.invoke(fn, args, targetKey, keys);
	            } catch (e) {
	                var activatingText = info.activator instanceof activators_1.ClassActivator ? 'instantiating' : 'invoking';
	                var message = "Error " + activatingText + " " + fn.name + ".";
	                debug('invoke error %s', e);
	                message += ' Check the inner error for details.';
	                throw errors_1.createError("DIInvokeError", message, e);
	            }
	        }
	    }, {
	        key: "registerInstance",
	        value: function registerInstance(key, instance) {
	            debug("%s: Register instance %s", this.id, key);
	            this.registerHandler(key, function (_) {
	                return instance;
	            });
	        }
	    }, {
	        key: "registerTransient",
	        value: function registerTransient(key, fn, targetKey) {
	            debug("%s: Register transient %s", this.id, key);
	            this.registerHandler(key, function (x) {
	                return x.invoke(fn, null, targetKey);
	            });
	        }
	    }, {
	        key: "registerSingleton",
	        value: function registerSingleton(key, fn, targetKey) {
	            debug("%s: Register singleton %s", this.id, key);
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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(7);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  typeof window !== 'undefined' && window && window.console && (console.firebug || console.exception && console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
	  // double check webkit in userAgent just in case we are in a worker
	  typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function (v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};

	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit');

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  try {
	    return exports.storage.debug;
	  } catch (e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (typeof process !== 'undefined' && 'env' in process) {
	    return process.env.DEBUG;
	  }
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug.default = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(8);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0,
	      i;

	  for (i in namespace) {
	    hash = (hash << 5) - hash + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function (val, options) {
	  options = options || {};
	  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 10000) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

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
/* 10 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/* 11 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Used to instantiate a class.
	*
	* @class ClassActivator
	* @constructor
	*/

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
/* 12 */
/***/ function(module, exports) {

	"use strict";
	/**
	* An abstract resolver used to allow functions/classes to specify custom dependency resolution logic.
	*
	* @class Resolver
	* @constructor
	*/

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var common_1 = __webpack_require__(9);
	var registers_1 = __webpack_require__(14);
	var activators_1 = __webpack_require__(11);
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
/* 14 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Used to allow functions/classes to indicate that they should be registered as transients with the container.
	*
	* @class TransientRegistration
	* @constructor
	* @param {Object} [key] The key to register as.
	*/

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
/* 15 */
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

	var container_1 = __webpack_require__(1);
	var controller_factory_1 = __webpack_require__(16);
	var factory_1 = __webpack_require__(17);

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	var factory_1 = __webpack_require__(17);

	var ControllerFactory = function (_factory_1$Factory) {
	  _inherits(ControllerFactory, _factory_1$Factory);

	  function ControllerFactory() {
	    _classCallCheck(this, ControllerFactory);

	    return _possibleConstructorReturn(this, (ControllerFactory.__proto__ || Object.getPrototypeOf(ControllerFactory)).apply(this, arguments));
	  }

	  return ControllerFactory;
	}(factory_1.Factory);

	exports.ControllerFactory = ControllerFactory;

/***/ },
/* 17 */
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

	var common_1 = __webpack_require__(18);

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

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	exports.MetaKeys = {
	    bindable: Symbol.for('bindable'),
	    renderer: Symbol.for('renderer'),
	    element: Symbol.for('element')
	};

	var Droppable = function Droppable() {
	    _classCallCheck(this, Droppable);
	};

	exports.Droppable = Droppable;

/***/ },
/* 19 */
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
	var common_1 = __webpack_require__(18);
	var decorators_1 = __webpack_require__(20);
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
	        value: function onChange(o, n) {
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
	            } else {}
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
	            var names = Object.getOwnPropertyNames(model);
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
/* 20 */
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
	__export(__webpack_require__(13));
	var slick_model_1 = __webpack_require__(21);
	var common_1 = __webpack_require__(18);

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
	__decorate([bind, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Bindable.prototype, "get", null);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(23));
	var decorators_1 = __webpack_require__(27);
	exports.observable = decorators_1.observable;
	exports.validate = decorators_1.validate;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var eventsjs_1 = __webpack_require__(24);
	var equal_1 = __webpack_require__(25);
	var meta_1 = __webpack_require__(26);

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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports.Attributes = Symbol("attributes");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var model_1 = __webpack_require__(23);
	var equal_1 = __webpack_require__(25);
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
	        (function () {
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
	        })();
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
	        (function () {
	            var set = descriptor.set;
	            descriptor.set = function $validateSet(value) {
	                var type = Reflect.getMetadata("design:type", target, propertyKey);
	                if (!validator(type, value)) {
	                    throw new TypeError("Invalid type.");
	                }
	                set(value);
	            };
	        })();
	    }
	}
	exports.validate = validate;

/***/ },
/* 28 */
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