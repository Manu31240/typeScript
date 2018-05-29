"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var app_1 = require("../app");
var helloWorld;
ava_1.default.before(function (t) {
    helloWorld = new app_1.HelloWorld();
});
ava_1.default('HelloWorld sayHello with argument', function (t) {
    t.is(helloWorld.sayHello('Zenika'), 'Hello Zenika!');
});
ava_1.default('HelloWorld sayHello without arguments', function (t) {
    t.is(helloWorld.sayHello(), 'Hello World!');
});
