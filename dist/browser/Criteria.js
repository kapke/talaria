(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Criteria = (function () {
    function Criteria() {
    }
    Criteria.prototype.equal = function (field, value) { throw "Not implemented"; };
    Criteria.prototype.notEqual = function (field, value) { throw "Not implemented"; };
    Criteria.prototype.greater = function (field, value) { throw "Not implemented"; };
    Criteria.prototype.less = function (field, value) { throw "Not implemented"; };
    return Criteria;
})();
exports.default = Criteria;

},{}]},{},[1])