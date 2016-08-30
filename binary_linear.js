"use strict";

var search = {};

search.linearSearch = function(target, values){
    //linear search code here
    for(var i = 0; i < values.length; i++) {
        if (target == values[i]) {
            return i;
        }
    }
    return -1;
}

search.binarySearch = function(target, values){
    //binary search code here
    var arrMin = 0;
    var arrMax = values.length - 1;

    while (1) {
        if (target == values[Math.floor(((arrMax - arrMin) / 2)) + arrMin]) {
            return Math.floor(((arrMax - arrMin) / 2)) + arrMin;
        } else if (target == values[Math.ceil(((arrMax - arrMin) / 2)) + arrMin]) {
            return Math.ceil(((arrMax - arrMin) / 2)) + arrMin;
        } else if (arrMax == arrMin) {
            return -1;
        } else if (target <= values[Math.ceil((arrMax - arrMin) / 2) + arrMin]) {
            arrMax = Math.floor((arrMax - arrMin) / 2) + arrMin;

            // Test to see arrMin arrMax changes
            // console.log("arrMin: " + arrMin + ", arrMax: " + arrMax);
        } else if (target > values[Math.floor((arrMax - arrMin) / 2) + arrMin]) {
            arrMin = Math.ceil((arrMax - arrMin) / 2) + arrMin;

            // Test to see arrMin arrMax changes
            // console.log("arrMin: " + arrMin + ", arrMax: " + arrMax);
        }
    }
}

// Test case
// var values = [];
// for (var i = 0; i < 11; i++) {
//     values.push(i+1);
// }
// var target = 7;
// console.log(search.binarySearch(target, values));

module.exports = search;
