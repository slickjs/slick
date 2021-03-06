"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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