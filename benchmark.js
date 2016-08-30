"use strict";

var Benchmark = require('benchmark');
var microtime = require('microtime');
var search = require('./binary_linear');
var randomAngka = new Array()
var awal = 0
var akhir = 0
var waktuLinear = 0;
var waktuBinary = 0;

//randomAngka
awal = microtime.now();
for (var i = 0; i < 10000000; i++) {
  randomAngka.push(i)
}
akhir = microtime.now();
console.log("finishing waktu randomAngka : "+(akhir-awal)+" ms")

awal = microtime.now();
console.log(search.linearSearch(randomAngka,34));
akhir = microtime.now();
console.log("finishing waktu searchAngka linearSearch : "+(akhir-awal)+" ms")
waktuLinear = akhir-awal


awal = microtime.now();
console.log(search.binarySearch(randomAngka,34));
akhir = microtime.now();
console.log("finishing waktu searchAngka BinarySearch : "+(akhir-awal)+" ms")
waktuBinary = akhir-awal

console.log("Perbedaan waktu linear & binary adalah "+(waktuLinear-waktuBinary)+" ms");

// benchmark code here
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
