"use strict";
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHello = function (name) {
        if (name === void 0) { name = 'World'; }
        var myreturn = "Hello " + name + "!";
        console.log(myreturn);
        return myreturn;
    };
    return HelloWorld;
}());
