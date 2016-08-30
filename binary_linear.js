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
  var awal = 0;
  var akhir = values.length - 1;
  var indeksSkrg;
  var elementSkrg;

  while (awal <= akhir) {
      indeksSkrg = (awal + akhir) / 2 | 0;
      elementSkrg = values[indeksSkrg];

      if (elementSkrg < target) {
          awal = indeksSkrg + 1;
      }
      else if (elementSkrg > target) {
          akhir = indeksSkrg - 1;
      }
      else {
          return indeksSkrg;
          //return true;
      }
  }

  return -1;
}

module.exports = search;
