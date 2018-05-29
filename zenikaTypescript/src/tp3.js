"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Music;
(function (Music) {
    Music[Music["JAZZ"] = 0] = "JAZZ";
    Music[Music["ROCK"] = 1] = "ROCK";
})(Music = exports.Music || (exports.Music = {}));
;
var Album = /** @class */ (function () {
    function Album(title) {
        this.title = title;
    }
    Album.prototype.toString = function () {
        return this.title;
    };
    return Album;
}());
exports.Album = Album;
var Musician = /** @class */ (function () {
    function Musician(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._albums = [];
    }
    Object.defineProperty(Musician.prototype, "style", {
        get: function () { return this._style; },
        set: function (value) { this._style = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Musician.prototype, "albums", {
        get: function () { return this._albums; },
        set: function (value) { this._albums = value; },
        enumerable: true,
        configurable: true
    });
    Musician.prototype.toString = function () {
        return this.firstName + " " + this.lastName + " plays " + Music[this.style];
    };
    Musician.prototype.addAlbum = function (album) {
        this._albums.push(album);
    };
    return Musician;
}());
exports.Musician = Musician;
var JazzMusician = /** @class */ (function (_super) {
    __extends(JazzMusician, _super);
    function JazzMusician(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = age;
        _this.style = Music.JAZZ;
        return _this;
    }
    return JazzMusician;
}(Musician));
exports.JazzMusician = JazzMusician;
var RockStar = /** @class */ (function (_super) {
    __extends(RockStar, _super);
    function RockStar(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = age;
        _this.style = Music.ROCK;
        return _this;
    }
    return RockStar;
}(Musician));
exports.RockStar = RockStar;
function display(objects) {
    objects.forEach(function (element) {
        console.log(element.toString());
    });
}
exports.display = display;
