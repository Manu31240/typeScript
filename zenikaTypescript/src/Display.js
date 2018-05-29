"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UtilModule_1 = require("./UtilModule");
function default_1(items) {
    items.forEach(function (item) {
        UtilModule_1.Util.log(item.toString());
    });
}
exports.default = default_1;
