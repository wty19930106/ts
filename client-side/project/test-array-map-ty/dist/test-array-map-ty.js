"use strict";
module.exports = function (array, callback) {
    var i = -1;
    var len = array.length;
    var resArray = [];
    while (++i < len) {
        resArray.push(callback(array[i], i, array));
    }
    return resArray;
};
