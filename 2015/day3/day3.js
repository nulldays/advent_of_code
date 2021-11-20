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
fs_1.readFile('input.txt', function (err, data) {
    var houses = {};
    var current = [0, 0];
    var path = data.toString();
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var h = path_1[_i];
        var currentStr = current.toString();
        addVisit(houses, currentStr);
        current = update[h](current);
    }
    console.log(Object.keys(houses).length);
});
