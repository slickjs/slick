"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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