"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberToString;
(function (NumberToString) {
    NumberToString[NumberToString["un"] = 0] = "un";
    NumberToString[NumberToString["deux"] = 1] = "deux";
    NumberToString[NumberToString["trois"] = 2] = "trois";
    NumberToString[NumberToString["quatre"] = 3] = "quatre";
    NumberToString[NumberToString["cinq"] = 4] = "cinq";
    NumberToString[NumberToString["six"] = 5] = "six";
    NumberToString[NumberToString["sept"] = 6] = "sept";
    NumberToString[NumberToString["huit"] = 7] = "huit";
    NumberToString[NumberToString["neuf"] = 8] = "neuf";
})(NumberToString || (NumberToString = {}));
;
function returnPeopleAndLength(people) {
    if (people === void 0) { people = ['Miles', 'Mick']; }
    return people.map(function (person) {
        return [person, person.length];
    });
}
exports.returnPeopleAndLength = returnPeopleAndLength;
function displayPeopleAndLength(people, literal) {
    function filterLength(personAndAge) {
        return personAndAge[1] <= 9;
    }
    ;
    var tuples = returnPeopleAndLength(people);
    if (literal)
        tuples = tuples.filter(filterLength);
    tuples.forEach(function (personAndAge) {
        var person = personAndAge[0], length = personAndAge[1];
        if (literal) {
            console.log(person + " contient " + NumberToString[length - 1] + " caract\u00E8res");
        }
        else {
            console.log(person + " contient " + length + " caract\u00E8res");
        }
        // console.log(`${personAndAge[0]} contient ${personAndAge[1]} caractères`);
    });
}
exports.displayPeopleAndLength = displayPeopleAndLength;
