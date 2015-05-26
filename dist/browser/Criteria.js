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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNyaXRlcmlhLnRzIl0sIm5hbWVzIjpbIkNyaXRlcmlhIiwiQ3JpdGVyaWEuY29uc3RydWN0b3IiLCJDcml0ZXJpYS5lcXVhbCIsIkNyaXRlcmlhLm5vdEVxdWFsIiwiQ3JpdGVyaWEuZ3JlYXRlciIsIkNyaXRlcmlhLmxlc3MiXSwibWFwcGluZ3MiOiJBQUFBO0lBQUFBO0lBS0FDLENBQUNBO0lBSlVELHdCQUFLQSxHQUFaQSxVQUFhQSxLQUFjQSxFQUFFQSxLQUFXQSxJQUFjRSxNQUFNQSxpQkFBaUJBLENBQUNBLENBQUFBLENBQUNBO0lBQ3hFRiwyQkFBUUEsR0FBZkEsVUFBZ0JBLEtBQWNBLEVBQUVBLEtBQVdBLElBQWNHLE1BQU1BLGlCQUFpQkEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7SUFDM0VILDBCQUFPQSxHQUFkQSxVQUFlQSxLQUFjQSxFQUFFQSxLQUFXQSxJQUFjSSxNQUFNQSxpQkFBaUJBLENBQUNBLENBQUFBLENBQUNBO0lBQzFFSix1QkFBSUEsR0FBWEEsVUFBWUEsS0FBY0EsRUFBRUEsS0FBV0EsSUFBY0ssTUFBTUEsaUJBQWlCQSxDQUFDQSxDQUFBQSxDQUFDQTtJQUNsRkwsZUFBQ0E7QUFBREEsQ0FMQSxBQUtDQSxJQUFBO0FBTEQsMEJBS0MsQ0FBQSIsImZpbGUiOiJDcml0ZXJpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENyaXRlcmlhIHtcbiAgICBwdWJsaWMgZXF1YWwoZmllbGQgOiBTdHJpbmcsIHZhbHVlIDogYW55KSA6IENyaXRlcmlhIHt0aHJvdyBcIk5vdCBpbXBsZW1lbnRlZFwiO31cbiAgICBwdWJsaWMgbm90RXF1YWwoZmllbGQgOiBTdHJpbmcsIHZhbHVlIDogYW55KSA6IENyaXRlcmlhIHt0aHJvdyBcIk5vdCBpbXBsZW1lbnRlZFwiO31cbiAgICBwdWJsaWMgZ3JlYXRlcihmaWVsZCA6IFN0cmluZywgdmFsdWUgOiBhbnkpIDogQ3JpdGVyaWEge3Rocm93IFwiTm90IGltcGxlbWVudGVkXCI7fVxuICAgIHB1YmxpYyBsZXNzKGZpZWxkIDogU3RyaW5nLCB2YWx1ZSA6IGFueSkgOiBDcml0ZXJpYSB7dGhyb3cgXCJOb3QgaW1wbGVtZW50ZWRcIjt9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9