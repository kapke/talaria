(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Repository = (function () {
    function Repository(entityInfo) {
        this.entities = [];
        this.entityInfo = entityInfo;
    }
    Repository.prototype.add = function (obj) {
        if (!this.has(obj)) {
            this.entities.push(obj);
        }
    };
    Repository.prototype.remove = function (obj) {
        if (this.has(obj)) {
            this.entities.splice(this.entities.indexOf(obj), 1);
        }
    };
    Repository.prototype.findOne = function () {
        throw new Error('Not implemented yet');
    };
    Repository.prototype.findAll = function () {
        return this.entities;
    };
    Repository.prototype.has = function (obj) {
        return (this.entities.indexOf(obj) > -1);
    };
    return Repository;
})();
module.exports = Repository;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnkudHMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeSIsIlJlcG9zaXRvcnkuY29uc3RydWN0b3IiLCJSZXBvc2l0b3J5LmFkZCIsIlJlcG9zaXRvcnkucmVtb3ZlIiwiUmVwb3NpdG9yeS5maW5kT25lIiwiUmVwb3NpdG9yeS5maW5kQWxsIiwiUmVwb3NpdG9yeS5oYXMiXSwibWFwcGluZ3MiOiJBQUVBLElBQU0sVUFBVTtJQUlmQSxTQUpLQSxVQUFVQSxDQUlGQSxVQUFxQkE7UUFGdkJDLGFBQVFBLEdBQU9BLEVBQUVBLENBQUNBO1FBR3RCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFDTUQsd0JBQUdBLEdBQVZBLFVBQVdBLEdBQU1BO1FBQ1ZFLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDR0YsMkJBQU1BLEdBQWJBLFVBQWNBLEdBQU9BO1FBQ2RHLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2ZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3hEQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNHSCw0QkFBT0EsR0FBZEE7UUFDT0ksTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtJQUMzQ0EsQ0FBQ0E7SUFDTUosNEJBQU9BLEdBQWRBO1FBQ0lLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNHTCx3QkFBR0EsR0FBVkEsVUFBV0EsR0FBTUE7UUFDVk0sTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDN0NBLENBQUNBO0lBQ0xOLGlCQUFDQTtBQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtBQUVELEFBQW9CLGlCQUFYLFVBQVUsQ0FBQyIsImZpbGUiOiJSZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcGtlL3Byb2plY3RzL3RhbGFyaWEvIiwic291cmNlc0NvbnRlbnQiOltdfQ==