"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var update = {
    '>': function (xy) { return [xy[0] + 1, xy[1]]; },
    '<': function (xy) { return [xy[0] - 1, xy[1]]; },
    '^': function (xy) { return [xy[0], xy[1] + 1]; },
    'v': function (xy) { return [xy[0], xy[1] - 1]; }
};
var addVisit = function (houses, vect) {
    if (houses[vect]) {
        houses[vect] += 1;
    }
    else {
        houses[vect] = 1;
    }
};
var move = function (houses, entity, movement) {
    var currentStr = entity.toString();
    addVisit(houses, currentStr);
    return update[movement](entity);
};
fs_1.readFile('input.txt', function (err, data) {
    var houses = {};
    var currentSanta = [0, 0];
    var currentRobot = [0, 0];
    var path = data.toString();
    for (var i = 0; i < path.length; i++) {
        if (i % 2 == 0) {
            currentSanta = move(houses, currentSanta, path[i]);
        }
        else {
            currentRobot = move(houses, currentRobot, path[i]);
        }
    }
    console.log(Object.keys(houses).length);
});
