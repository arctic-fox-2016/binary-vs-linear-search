"use strict";

var n = 1000;
var Benchmark = require('benchmark');
var search = require('./binary_linear');
var values = [];
for (var i = 0; i < n; i++) {
    values.push(i+1);
}

var target = Math.floor(Math.random() * n);

console.log("Target: " + target + " from 0 to " + n);

// benchmark code here
var suite = new Benchmark.Suite;

suite.add('the linear search method.', function() {
    search.linearSearch(target, values);
})
.add('the binary search method.', function() {
    search.binarySearch(target, values);
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
