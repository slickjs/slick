"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("./container");
var module_factory_1 = require("./module.factory");
var common_1 = require("./common");
var html_renderer_1 = require("./html-renderer");
__export(require("./decorators"));
var common_2 = require("./common");
exports.MetaKeys = common_2.MetaKeys;
exports.Droppable = common_2.Droppable;
exports.isDroppable = common_2.isDroppable;
var slick_model_1 = require("slick-model");
exports.Model = slick_model_1.Model;
var container_2 = require("./container");
exports.Container = container_2.Container;
__export(require("./service/html"));
//const container = new Container();
var repo_1 = require("./repo");
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