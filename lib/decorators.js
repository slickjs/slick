"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
__export(require("slick-di/lib/decorators"));
var slick_model_1 = require("slick-model");
var common_1 = require("./common");

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