"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayMap = require("test-array-map-ty");
arrayMap([1, 2], function (item) {
    return item + 2;
}).forEach(function (item) {
    item.toFixed();
});
