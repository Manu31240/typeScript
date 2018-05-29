"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Musician_1 = require("./Musician");
var Display_1 = require("./Display");
var UtilModule = require("./UtilModule");
var miles = new Musician_1.JazzMusician('Miles', 'Davis', 89);
miles.addAlbum(new Musician_1.Album('Kind Of Blue'));
miles.addAlbum(new Musician_1.Album('Tutu'));
var musicians = [
    miles,
    new Musician_1.RockStar('Mick', 'Jagger', 72)
];
UtilModule.Util.log('Bienvenue dans ma première applications TypeScript');
Display_1.default(musicians);
Display_1.default(miles.albums);
for (var _i = 0, musicians_1 = musicians; _i < musicians_1.length; _i++) {
    var musician = musicians_1[_i];
    if (musician instanceof Musician_1.JazzMusician) {
        musician.swing();
    }
    else if (musician instanceof Musician_1.RockStar) {
        musician.shout();
    }
}
