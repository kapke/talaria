(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EntityInfo = (function () {
    function EntityInfo(entity, config) {
        this.entity = entity;
        this.config = config;
    }
    return EntityInfo;
})();
module.exports = EntityInfo;


},{}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
var EntityInfo = require('./EntityInfo');
var Repository = require('./Repository');
var MyBind = (function () {
    function MyBind() {
        this.entities = {};
        this.repositories = {};
    }
    MyBind.prototype.registerEntity = function (constructor, config) {
        this.entities[config.name] = new EntityInfo(constructor, config);
    };
    MyBind.prototype.getEntityInfo = function (name) {
        return this.entities[name];
    };
    MyBind.prototype.getRepository = function (name) {
        if (!this.repositories[name]) {
            this.repositories[name] = new Repository(this.getEntityInfo(name));
        }
        return this.repositories[name];
    };
    MyBind.getInstance = function () {
        if (!MyBind.instance) {
            MyBind.instance = new MyBind();
        }
        return MyBind.instance;
    };
    return MyBind;
})();
module.exports = MyBind;

},{"./EntityInfo":1,"./Repository":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk15QmluZC50cyJdLCJuYW1lcyI6WyJNeUJpbmQiLCJNeUJpbmQuY29uc3RydWN0b3IiLCJNeUJpbmQucmVnaXN0ZXJFbnRpdHkiLCJNeUJpbmQuZ2V0RW50aXR5SW5mbyIsIk15QmluZC5nZXRSZXBvc2l0b3J5IiwiTXlCaW5kLmdldEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiQUFDQSxJQUFPLFVBQVUsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUM1QyxJQUFPLFVBQVUsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUU1QyxJQUFNLE1BQU07SUFNUkEsU0FORUEsTUFBTUE7UUFHQUMsYUFBUUEsR0FBZ0NBLEVBQUVBLENBQUNBO1FBQzNDQSxpQkFBWUEsR0FBcUNBLEVBQUVBLENBQUNBO0lBRXJDQSxDQUFDQTtJQUVqQkQsK0JBQWNBLEdBQXJCQSxVQUF1QkEsV0FBZUEsRUFBRUEsTUFBbUJBO1FBQ3ZERSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQSxXQUFXQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUNyRUEsQ0FBQ0E7SUFFTUYsOEJBQWFBLEdBQXBCQSxVQUFzQkEsSUFBV0E7UUFDN0JHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQy9CQSxDQUFDQTtJQUVNSCw4QkFBYUEsR0FBcEJBLFVBQXlCQSxJQUFXQTtRQUNoQ0ksRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLFVBQVVBLENBQUlBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQzFFQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFFYUosa0JBQVdBLEdBQXpCQTtRQUNJSyxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO0lBQzNCQSxDQUFDQTtJQUNMTCxhQUFDQTtBQUFEQSxDQTdCQSxBQTZCQ0EsSUFBQTtBQUVELEFBQWdCLGlCQUFQLE1BQU0sQ0FBQyIsImZpbGUiOiJNeUJpbmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fwa2UvcHJvamVjdHMvdGFsYXJpYS8iLCJzb3VyY2VzQ29udGVudCI6W119