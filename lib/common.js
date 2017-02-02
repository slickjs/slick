"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.MetaKeys = {
    bindable: Symbol.for('bindable'),
    renderer: Symbol.for('renderer'),
    element: Symbol.for('element')
};

var Droppable = function Droppable() {
    _classCallCheck(this, Droppable);
};

exports.Droppable = Droppable;