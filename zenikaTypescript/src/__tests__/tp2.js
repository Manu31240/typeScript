"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var sinon = require("sinon");
var tp2_1 = require("../tp2");
var spy = sinon.spy(console, 'log');
ava_1.default('returnPeopleAndLength with table in parameter', function (t) {
    var people = tp2_1.returnPeopleAndLength();
    t.is(people.length, 2);
    t.is(people[0][0], 'Miles');
    t.is(people[0][1], 5);
    t.is(people[1][0], 'Mick');
    t.is(people[1][1], 4);
});
ava_1.default('returnPeopleAndLength with arguments', function (t) {
    var people = tp2_1.returnPeopleAndLength(['Emmanuel']);
    t.is(people.length, 1);
    t.is(people[0][0], 'Emmanuel');
    t.is(people[0][1], 8);
});
ava_1.default('displayPeopleAndLength with table in parameter', function (t) {
    tp2_1.displayPeopleAndLength(['Emmanuel']);
    t.true(spy.alwaysCalledWith('Emmanuel contient 8 caractères'));
});
ava_1.default('displayPeopleAndLength without arguments', function (t) {
    tp2_1.displayPeopleAndLength();
    t.true(spy.calledWith('Miles contient 5 caractères'));
    t.true(spy.calledWith('Mick contient 4 caractères'));
});
ava_1.default('displayPeopleAndLength with table and literal in parameter', function (t) {
    tp2_1.displayPeopleAndLength(['Zenika', 'ZenikaZenika'], true);
    t.true(spy.calledWith('Zenika contient six caractères'));
});
