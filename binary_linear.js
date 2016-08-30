"use strict";

var search = {};

search.linearSearch = function(values, target){
  //linear search code here
  for (var i = 0; i < values.length; i++) {
    if (target == values[i]) {
      return i;
    }
  }
  return -1;
}


search.binarySearch = function(values, target){
  //binary search code here
}

module.exports = search;
