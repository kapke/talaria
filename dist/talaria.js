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
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EntityConfig = (function () {
    function EntityConfig(name, properties, key) {
        if (key === void 0) { key = []; }
        this.name = name;
        this.properties = properties;
        this.key = key;
    }
    return EntityConfig;
})();
exports.default = EntityConfig;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVudGl0eUNvbmZpZy50cyJdLCJuYW1lcyI6WyJFbnRpdHlDb25maWciLCJFbnRpdHlDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0lBS0lBLHNCQUFvQkEsSUFBV0EsRUFBRUEsVUFBMEJBLEVBQUVBLEdBQXNCQTtRQUF0QkMsbUJBQXNCQSxHQUF0QkEsUUFBc0JBO1FBQy9FQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO0lBQ25CQSxDQUFDQTtJQUNMRCxtQkFBQ0E7QUFBREEsQ0FWQSxBQVVDQSxJQUFBO0FBRUQsa0JBQWUsWUFBWSxDQUFDIiwiZmlsZSI6IkVudGl0eUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVudGl0eUNvbmZpZyB7XG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzIDogQXJyYXk8c3RyaW5nPjtcbiAgICBwdWJsaWMga2V5IDogQXJyYXk8c3RyaW5nPjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAobmFtZTpzdHJpbmcsIHByb3BlcnRpZXMgOiBBcnJheTxzdHJpbmc+LCBrZXk6QXJyYXk8c3RyaW5nPiA9IFtdKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5Q29uZmlnOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EntityInfo = (function () {
    function EntityInfo(entity, config) {
        this.entity = entity;
        this.config = config;
    }
    return EntityInfo;
})();
exports.default = EntityInfo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVudGl0eUluZm8udHMiXSwibmFtZXMiOlsiRW50aXR5SW5mbyIsIkVudGl0eUluZm8uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUVBO0lBSUlBLG9CQUFtQkEsTUFBVUEsRUFBRUEsTUFBbUJBO1FBQzlDQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0xELGlCQUFDQTtBQUFEQSxDQVJBLEFBUUNBLElBQUE7QUFSRCw0QkFRQyxDQUFBIiwiZmlsZSI6IkVudGl0eUluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW50aXR5Q29uZmlnIGZyb20gJy4vRW50aXR5Q29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5SW5mbyB7XG4gICAgcHVibGljIGVudGl0eTphbnk7XG4gICAgcHVibGljIGNvbmZpZzpFbnRpdHlDb25maWc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW50aXR5OmFueSwgY29uZmlnOkVudGl0eUNvbmZpZykge1xuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///<reference path="../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../typings/node/node.d.ts" />

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNpc3RlbmNlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9ELGlEQUFpRDtBQVVoRCIsImZpbGUiOiJQZXJzaXN0ZW5jZVN0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9lczYtcHJvbWlzZS9lczYtcHJvbWlzZS5kLnRzXCIgLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mvbm9kZS9ub2RlLmQudHNcIiAvPlxuXG5pbXBvcnQgRW50aXR5SW5mbyBmcm9tICcuL0VudGl0eUluZm8nO1xuaW1wb3J0IHtQcm9taXNlfSBmcm9tICdlczYtcHJvbWlzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc2lzdGVuY2VTdHJhdGVneSB7XG4gICAgY3JlYXRlIChlbnRpdHlJbmZvOkVudGl0eUluZm8sIG9iajphbnkpOlByb21pc2U8dm9pZD47XG4gICAgdXBkYXRlIChlbnRpdHlJbmZvOkVudGl0eUluZm8sIG9iajphbnkpOlByb21pc2U8dm9pZD47XG4gICAgZGVsZXRlIChlbnRpdHlJbmZvOkVudGl0eUluZm8sIG9iajphbnkpOlByb21pc2U8dm9pZD47XG4gICAgZmluZCAoZW50aXR5SW5mbzpFbnRpdHlJbmZvLCBjcml0ZXJpYTpPYmplY3QpOlByb21pc2U8QXJyYXk8YW55Pj47XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Proxy = (function () {
    function Proxy(obj, accessors) {
        var that = this;
        function defineProperties() {
            function simpleGetter(name) {
                return this[name];
            }
            function simpleSetter(name, value) {
                this[name] = value;
            }
            for (var name in obj) {
                var property = accessors[name] || {}, getter = undefined, setter = undefined;
                getter = (function () {
                    if (property.get) {
                        return property.get;
                    }
                    else {
                        return simpleGetter.bind(obj, name);
                    }
                })();
                setter = (function () {
                    if (property.set) {
                        return property.set;
                    }
                    else {
                        return simpleSetter.bind(obj, name);
                    }
                })();
                Object.defineProperty(that, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter,
                    set: setter
                });
            }
        }
        defineProperties();
    }
    return Proxy;
})();
exports.default = Proxy;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3h5LnRzIl0sIm5hbWVzIjpbIlByb3h5IiwiUHJveHkuY29uc3RydWN0b3IiLCJQcm94eS5jb25zdHJ1Y3Rvci5kZWZpbmVQcm9wZXJ0aWVzIiwiUHJveHkuY29uc3RydWN0b3IuZGVmaW5lUHJvcGVydGllcy5zaW1wbGVHZXR0ZXIiLCJQcm94eS5jb25zdHJ1Y3Rvci5kZWZpbmVQcm9wZXJ0aWVzLnNpbXBsZVNldHRlciJdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSUEsZUFBYUEsR0FBR0EsRUFBRUEsU0FBU0E7UUFDdkJDLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRWhCQTtZQUNJQyxzQkFBdUJBLElBQUlBO2dCQUN2QkMsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLENBQUNBO1lBRURELHNCQUF1QkEsSUFBSUEsRUFBRUEsS0FBS0E7Z0JBQzlCRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUN2QkEsQ0FBQ0E7WUFFREYsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxJQUFJQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUNoQ0EsTUFBTUEsR0FBR0EsU0FBU0EsRUFBRUEsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0E7Z0JBRTNDQSxNQUFNQSxHQUFHQSxDQUFDQTtvQkFDTkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2RBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBO29CQUN4QkEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNKQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDeENBLENBQUNBO2dCQUNMQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsQ0FBQ0E7b0JBQ05BLEVBQUVBLENBQUFBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO3dCQUNkQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQTtvQkFDeEJBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hDQSxDQUFDQTtnQkFDTEEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBRUxBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBO29CQUM5QkEsWUFBWUEsRUFBRUEsS0FBS0E7b0JBQ25CQSxVQUFVQSxFQUFFQSxJQUFJQTtvQkFDaEJBLEdBQUdBLEVBQUVBLE1BQU1BO29CQUNYQSxHQUFHQSxFQUFFQSxNQUFNQTtpQkFDZEEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFDREQsZ0JBQWdCQSxFQUFFQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFDTEQsWUFBQ0E7QUFBREEsQ0ExQ0EsQUEwQ0NBLElBQUE7QUFFRCxrQkFBZSxLQUFLLENBQUMiLCJmaWxlIjoiUHJveHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm94eSB7XG4gICAgY29uc3RydWN0b3IgKG9iaiwgYWNjZXNzb3JzKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNpbXBsZUdldHRlciAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW25hbWVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzaW1wbGVTZXR0ZXIgKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IodmFyIG5hbWUgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gYWNjZXNzb3JzW25hbWVdIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICBnZXR0ZXIgPSB1bmRlZmluZWQsIHNldHRlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIGdldHRlciA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb3BlcnR5LmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5LmdldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzaW1wbGVHZXR0ZXIuYmluZChvYmosIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICBzZXR0ZXIgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9wZXJ0eS5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eS5zZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2ltcGxlU2V0dGVyLmJpbmQob2JqLCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhhdCwgbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBzZXR0ZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm94eTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Proxy = (function () {
    function Proxy(obj, accessors) {
        var that = this;
        function defineProperties() {
            function simpleGetter(name) {
                return this[name];
            }
            function simpleSetter(name, value) {
                this[name] = value;
            }
            for (var name in obj) {
                var property = accessors[name] || {}, getter = undefined, setter = undefined;
                getter = (function () {
                    if (property.get) {
                        return property.get;
                    }
                    else {
                        return simpleGetter.bind(obj, name);
                    }
                })();
                setter = (function () {
                    if (property.set) {
                        return property.set;
                    }
                    else {
                        return simpleSetter.bind(obj, name);
                    }
                })();
                Object.defineProperty(that, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter,
                    set: setter
                });
            }
        }
        defineProperties();
    }
    return Proxy;
})();
exports.default = Proxy;


},{}],2:[function(require,module,exports){
var Proxy_1 = require('./Proxy');
var TrackedObject = (function () {
    function TrackedObject(info, object, proxy) {
        this.info = info;
        this.object = object;
        this.proxy = proxy;
    }
    Object.defineProperty(TrackedObject.prototype, "Info", {
        get: function () { return this.info; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObject.prototype, "Object", {
        get: function () { return this.object; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObject.prototype, "Proxy", {
        get: function () { return this.proxy; },
        enumerable: true,
        configurable: true
    });
    return TrackedObject;
})();
var UnitOfWork = (function () {
    function UnitOfWork(strategy) {
        this.newObjects = [];
        this.dirtyObjects = [];
        this.fetchedObjects = [];
        this.deletedObjects = [];
        this.strategy = strategy;
    }
    UnitOfWork.prototype.registerNew = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.newObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.registerFetched = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.fetchedObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.registerDirty = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.dirtyObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.registerDeleted = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.deletedObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.commit = function () {
        var strategy = this.strategy;
        this.newObjects.forEach(function (obj) {
            strategy.create(obj.Info, obj.Object);
        });
        this.dirtyObjects.forEach(function (obj) {
            strategy.update(obj.Info, obj.Object);
        });
        this.deletedObjects.forEach(function (obj) {
            strategy.delete(obj.Info, obj.Object);
        });
    };
    UnitOfWork.prototype.rollback = function () { };
    UnitOfWork.prototype.getProxy = function (info, obj) {
        var setters = {};
        function modificationHandler(info, target, name, value) {
            this.registerDirty(info, target);
            target[name] = value;
        }
        for (var name in obj) {
            setters[name] = { set: modificationHandler.bind(this, info, obj, name) };
        }
        return new Proxy_1.default(obj, setters);
    };
    return UnitOfWork;
})();
exports.default = UnitOfWork;

},{"./Proxy":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXRPZldvcmsudHMiXSwibmFtZXMiOlsiVHJhY2tlZE9iamVjdCIsIlRyYWNrZWRPYmplY3QuY29uc3RydWN0b3IiLCJUcmFja2VkT2JqZWN0LkluZm8iLCJUcmFja2VkT2JqZWN0Lk9iamVjdCIsIlRyYWNrZWRPYmplY3QuUHJveHkiLCJVbml0T2ZXb3JrIiwiVW5pdE9mV29yay5jb25zdHJ1Y3RvciIsIlVuaXRPZldvcmsucmVnaXN0ZXJOZXciLCJVbml0T2ZXb3JrLnJlZ2lzdGVyRmV0Y2hlZCIsIlVuaXRPZldvcmsucmVnaXN0ZXJEaXJ0eSIsIlVuaXRPZldvcmsucmVnaXN0ZXJEZWxldGVkIiwiVW5pdE9mV29yay5jb21taXQiLCJVbml0T2ZXb3JrLnJvbGxiYWNrIiwiVW5pdE9mV29yay5nZXRQcm94eSIsIlVuaXRPZldvcmsuZ2V0UHJveHkubW9kaWZpY2F0aW9uSGFuZGxlciJdLCJtYXBwaW5ncyI6IkFBQ0Esc0JBQWtCLFNBQVMsQ0FBQyxDQUFBO0FBRzVCO0lBV0lBLHVCQUFhQSxJQUFlQSxFQUFFQSxNQUFVQSxFQUFFQSxLQUFXQTtRQUNqREMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFWREQsc0JBQUlBLCtCQUFJQTthQUFSQSxjQUF1QkUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7OztPQUFBRjtJQUV6Q0Esc0JBQUlBLGlDQUFNQTthQUFWQSxjQUFrQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7OztPQUFBSDtJQUV0Q0Esc0JBQUlBLGdDQUFLQTthQUFUQSxjQUFtQkksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7OztPQUFBSjtJQU8xQ0Esb0JBQUNBO0FBQURBLENBaEJBLEFBZ0JDQSxJQUFBO0FBRUQ7SUFPSUssb0JBQVlBLFFBQTRCQTtRQUxoQ0MsZUFBVUEsR0FBd0JBLEVBQUVBLENBQUNBO1FBQ3JDQSxpQkFBWUEsR0FBd0JBLEVBQUVBLENBQUNBO1FBQ3ZDQSxtQkFBY0EsR0FBd0JBLEVBQUVBLENBQUNBO1FBQ3pDQSxtQkFBY0EsR0FBd0JBLEVBQUVBLENBQUNBO1FBRzdDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFFTUQsZ0NBQVdBLEdBQWxCQSxVQUFvQkEsSUFBZUEsRUFBRUEsR0FBR0E7UUFDcENFLElBQUlBLE9BQU9BLEdBQWlCQSxJQUFJQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuRkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUVNRixvQ0FBZUEsR0FBdEJBLFVBQXdCQSxJQUFlQSxFQUFFQSxHQUFHQTtRQUN4Q0csSUFBSUEsT0FBT0EsR0FBaUJBLElBQUlBLGFBQWFBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBQ25GQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNsQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRU1ILGtDQUFhQSxHQUFwQkEsVUFBc0JBLElBQWVBLEVBQUVBLEdBQUdBO1FBQ3RDSSxJQUFJQSxPQUFPQSxHQUFpQkEsSUFBSUEsYUFBYUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkZBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQ2hDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFTUosb0NBQWVBLEdBQXRCQSxVQUF3QkEsSUFBZUEsRUFBRUEsR0FBR0E7UUFDeENLLElBQUlBLE9BQU9BLEdBQWlCQSxJQUFJQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuRkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUVHTCwyQkFBTUEsR0FBYkE7UUFDT00sSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFFN0JBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLEdBQUdBO1lBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQTtZQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDSEEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsR0FBR0E7WUFDckMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRU1OLDZCQUFRQSxHQUFmQSxjQUFvQk8sQ0FBQ0E7SUFFYlAsNkJBQVFBLEdBQWhCQSxVQUFrQkEsSUFBZUEsRUFBRUEsR0FBR0E7UUFDbENRLElBQUlBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBRWpCQSw2QkFBOEJBLElBQWVBLEVBQUVBLE1BQU1BLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBO1lBQzlEQyxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUNqQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDekJBLENBQUNBO1FBRURELEdBQUdBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFDQSxHQUFHQSxFQUFFQSxtQkFBbUJBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUNBLENBQUNBO1FBQzNFQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxlQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFDTFIsaUJBQUNBO0FBQURBLENBaEVBLEFBZ0VDQSxJQUFBO0FBQ0Qsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6IlVuaXRPZldvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNpc3RlbmNlU3RyYXRlZ3l9IGZyb20gJy4vUGVyc2lzdGVuY2VTdHJhdGVneSc7XG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSc7XG5pbXBvcnQgRW50aXR5SW5mbyBmcm9tICcuL0VudGl0eUluZm8nO1xuXG5jbGFzcyBUcmFja2VkT2JqZWN0IHtcbiAgICBwcml2YXRlIGluZm86RW50aXR5SW5mbztcbiAgICBwcml2YXRlIG9iamVjdDphbnk7XG4gICAgcHJpdmF0ZSBwcm94eTpQcm94eTtcblxuICAgIGdldCBJbmZvKCk6RW50aXR5SW5mbyB7cmV0dXJuIHRoaXMuaW5mbzt9XG5cbiAgICBnZXQgT2JqZWN0KCk6YW55IHtyZXR1cm4gdGhpcy5vYmplY3Q7fVxuXG4gICAgZ2V0IFByb3h5KCk6UHJveHkge3JldHVybiB0aGlzLnByb3h5O31cblxuICAgIGNvbnN0cnVjdG9yIChpbmZvOkVudGl0eUluZm8sIG9iamVjdDphbnksIHByb3h5OlByb3h5KSB7XG4gICAgICAgIHRoaXMuaW5mbyA9IGluZm87XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3h5ID0gcHJveHk7XG4gICAgfVxufVxuXG5jbGFzcyBVbml0T2ZXb3JrIHtcbiAgICBwcml2YXRlIHN0cmF0ZWd5OlBlcnNpc3RlbmNlU3RyYXRlZ3k7XG4gICAgcHJpdmF0ZSBuZXdPYmplY3RzOkFycmF5PFRyYWNrZWRPYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBkaXJ0eU9iamVjdHM6QXJyYXk8VHJhY2tlZE9iamVjdD4gPSBbXTtcbiAgICBwcml2YXRlIGZldGNoZWRPYmplY3RzOkFycmF5PFRyYWNrZWRPYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBkZWxldGVkT2JqZWN0czpBcnJheTxUcmFja2VkT2JqZWN0PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ3k6UGVyc2lzdGVuY2VTdHJhdGVneSkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyTmV3IChpbmZvOkVudGl0eUluZm8sIG9iaikgOiBPYmplY3Qge1xuICAgICAgICB2YXIgdHJhY2tlcjpUcmFja2VkT2JqZWN0ID0gbmV3IFRyYWNrZWRPYmplY3QoaW5mbywgb2JqLCB0aGlzLmdldFByb3h5KGluZm8sIG9iaikpO1xuICAgICAgICB0aGlzLm5ld09iamVjdHMucHVzaCh0cmFja2VyKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrZXIuUHJveHk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRmV0Y2hlZCAoaW5mbzpFbnRpdHlJbmZvLCBvYmopIDogT2JqZWN0IHtcbiAgICAgICAgdmFyIHRyYWNrZXI6VHJhY2tlZE9iamVjdCA9IG5ldyBUcmFja2VkT2JqZWN0KGluZm8sIG9iaiwgdGhpcy5nZXRQcm94eShpbmZvLCBvYmopKTtcbiAgICAgICAgdGhpcy5mZXRjaGVkT2JqZWN0cy5wdXNoKHRyYWNrZXIpO1xuICAgICAgICByZXR1cm4gdHJhY2tlci5Qcm94eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJEaXJ0eSAoaW5mbzpFbnRpdHlJbmZvLCBvYmopIDogT2JqZWN0IHtcbiAgICAgICAgdmFyIHRyYWNrZXI6VHJhY2tlZE9iamVjdCA9IG5ldyBUcmFja2VkT2JqZWN0KGluZm8sIG9iaiwgdGhpcy5nZXRQcm94eShpbmZvLCBvYmopKTtcbiAgICAgICAgdGhpcy5kaXJ0eU9iamVjdHMucHVzaCh0cmFja2VyKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrZXIuUHJveHk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRGVsZXRlZCAoaW5mbzpFbnRpdHlJbmZvLCBvYmopIDogT2JqZWN0IHtcbiAgICAgICAgdmFyIHRyYWNrZXI6VHJhY2tlZE9iamVjdCA9IG5ldyBUcmFja2VkT2JqZWN0KGluZm8sIG9iaiwgdGhpcy5nZXRQcm94eShpbmZvLCBvYmopKTtcbiAgICAgICAgdGhpcy5kZWxldGVkT2JqZWN0cy5wdXNoKHRyYWNrZXIpO1xuICAgICAgICByZXR1cm4gdHJhY2tlci5Qcm94eTtcbiAgICB9XG5cblx0cHVibGljIGNvbW1pdCAoKSB7XG4gICAgICAgIHZhciBzdHJhdGVneSA9IHRoaXMuc3RyYXRlZ3k7XG5cbiAgICAgICAgdGhpcy5uZXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgc3RyYXRlZ3kuY3JlYXRlKG9iai5JbmZvLCBvYmouT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlydHlPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgc3RyYXRlZ3kudXBkYXRlKG9iai5JbmZvLCBvYmouT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVsZXRlZE9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBzdHJhdGVneS5kZWxldGUob2JqLkluZm8sIG9iai5PYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcm9sbGJhY2sgKCkge31cblxuICAgIHByaXZhdGUgZ2V0UHJveHkgKGluZm86RW50aXR5SW5mbywgb2JqKTpQcm94eSB7XG4gICAgICAgIHZhciBzZXR0ZXJzID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gbW9kaWZpY2F0aW9uSGFuZGxlciAoaW5mbzpFbnRpdHlJbmZvLCB0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGlydHkoaW5mbywgdGFyZ2V0KTtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKHZhciBuYW1lIGluIG9iaikge1xuICAgICAgICAgICAgc2V0dGVyc1tuYW1lXSA9IHtzZXQ6IG1vZGlmaWNhdGlvbkhhbmRsZXIuYmluZCh0aGlzLCBpbmZvLCBvYmosIG5hbWUpfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwgc2V0dGVycyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVW5pdE9mV29yazsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var es6_promise_1 = require('es6-promise');
var Repository = (function () {
    function Repository(entityInfo, unitOfWork, persistenceStrategy) {
        this.cache = [];
        this.entityInfo = entityInfo;
        this.unitOfWork = unitOfWork;
        this.persistenceStrategy = persistenceStrategy;
    }
    Repository.prototype.add = function (obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            var registered = _this.unitOfWork.registerNew(_this.entityInfo, obj);
            _this.cache.push(registered);
            resolve(registered);
        });
    };
    Repository.prototype.remove = function (obj) {
        var _this = this;
        return this.has(obj).then(function (result) {
            if (result) {
                _this.cache.splice(_this.cache.indexOf(obj), 1);
                _this.unitOfWork.registerDeleted(_this.entityInfo, obj);
            }
        });
    };
    Repository.prototype.findOne = function () {
        throw new Error('Not implemented yet');
    };
    Repository.prototype.findAll = function () {
        var _this = this;
        return this.persistenceStrategy.find(this.entityInfo, null).then(function (found) {
            found.forEach(function (item) {
                if (_this.cache.indexOf(item) == -1) {
                    _this.cache.push(item);
                }
            });
            return _this.cache.slice();
        });
    };
    Repository.prototype.has = function (obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            if (_this.cache.indexOf(obj) > -1) {
                resolve(true);
            }
            else {
                _this.persistenceStrategy.find(_this.entityInfo, obj).then(function (found) {
                    found.forEach(function (item) {
                        this.cache.push(item);
                    });
                    resolve(found.length > 0);
                });
            }
        });
    };
    return Repository;
})();
exports.default = Repository;

},{"es6-promise":2}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.1.1
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$toString = {}.toString;
    var lib$es6$promise$asap$$vertxNext;
    function lib$es6$promise$asap$$asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        lib$es6$promise$asap$$scheduleFlush();
      }
    }

    var lib$es6$promise$asap$$default = lib$es6$promise$asap$$asap;

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertex() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$default(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$default(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1YiZ5S":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnkudHMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeSIsIlJlcG9zaXRvcnkuY29uc3RydWN0b3IiLCJSZXBvc2l0b3J5LmFkZCIsIlJlcG9zaXRvcnkucmVtb3ZlIiwiUmVwb3NpdG9yeS5maW5kT25lIiwiUmVwb3NpdG9yeS5maW5kQWxsIiwiUmVwb3NpdG9yeS5oYXMiXSwibWFwcGluZ3MiOiJBQUdBLDRCQUFzQixhQUFhLENBQUMsQ0FBQTtBQUVwQztJQVFDQSxvQkFBYUEsVUFBcUJBLEVBQUVBLFVBQXFCQSxFQUFFQSxtQkFBd0NBO1FBRnhGQyxVQUFLQSxHQUFPQSxFQUFFQSxDQUFDQTtRQUduQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1FBQzdCQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLG1CQUFtQkEsQ0FBQ0E7SUFDdERBLENBQUNBO0lBQ01ELHdCQUFHQSxHQUFWQSxVQUFXQSxHQUFNQTtRQUFqQkUsaUJBTUlBO1FBTEdBLE1BQU1BLENBQUNBLElBQUlBLHFCQUFPQSxDQUFJQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUNsQ0EsSUFBSUEsVUFBVUEsR0FBUUEsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDeEVBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQzVCQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDR0YsMkJBQU1BLEdBQWJBLFVBQWNBLEdBQU9BO1FBQXJCRyxpQkFPSUE7UUFOR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsTUFBZ0JBO1lBQ3ZDQSxFQUFFQSxDQUFBQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUkEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxlQUFlQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUMxREEsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDR0gsNEJBQU9BLEdBQWRBO1FBQ09JLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBQ01KLDRCQUFPQSxHQUFkQTtRQUFBSyxpQkFTQ0E7UUFSR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxLQUFVQTtZQUN4RUEsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBSUE7Z0JBQ2ZBLEVBQUVBLENBQUFBLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNoQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtZQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtRQUM5QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDR0wsd0JBQUdBLEdBQVZBLFVBQVdBLEdBQU1BO1FBQWpCTSxpQkFhSUE7UUFaR0EsTUFBTUEsQ0FBQ0EsSUFBSUEscUJBQU9BLENBQVVBLFVBQUNBLE9BQU9BLEVBQUVBLE1BQU1BO1lBQ3hDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0JBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2xCQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsS0FBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxLQUFLQTtvQkFDM0RBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLElBQUlBO3dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDQSxDQUFDQTtvQkFDSEEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNQQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNMTixpQkFBQ0E7QUFBREEsQ0F2REEsQUF1RENBLElBQUE7QUF2REQsNEJBdURDLENBQUEiLCJmaWxlIjoiUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbnRpdHlJbmZvIGZyb20gJy4vRW50aXR5SW5mbyc7XG5pbXBvcnQgVW5pdE9mV29yayBmcm9tICcuL1VuaXRPZldvcmsnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZVN0cmF0ZWd5fSBmcm9tICcuL1BlcnNpc3RlbmNlU3RyYXRlZ3knO1xuaW1wb3J0IHtQcm9taXNlfSBmcm9tICdlczYtcHJvbWlzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnk8VD4ge1xuICAgIHByaXZhdGUgZW50aXR5SW5mbzpFbnRpdHlJbmZvO1xuICAgIC8vc2hvdWxkIGJlIHVzZWQgb25seSBmb3Igd3JpdGluZyBhY3Rpb25zXG4gICAgcHJpdmF0ZSB1bml0T2ZXb3JrOlVuaXRPZldvcms7XG4gICAgLy9zaG91bGQgYmUgdXNlZCBvbmx5IGZvciByZWFkaW5nIGFjdGlvbnNcbiAgICBwcml2YXRlIHBlcnNpc3RlbmNlU3RyYXRlZ3k6UGVyc2lzdGVuY2VTdHJhdGVneTtcbiAgICBwcml2YXRlIGNhY2hlOlRbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yIChlbnRpdHlJbmZvOkVudGl0eUluZm8sIHVuaXRPZldvcms6VW5pdE9mV29yaywgcGVyc2lzdGVuY2VTdHJhdGVneTogUGVyc2lzdGVuY2VTdHJhdGVneSkge1xuICAgICAgICB0aGlzLmVudGl0eUluZm8gPSBlbnRpdHlJbmZvO1xuICAgICAgICB0aGlzLnVuaXRPZldvcmsgPSB1bml0T2ZXb3JrO1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlU3RyYXRlZ3kgPSBwZXJzaXN0ZW5jZVN0cmF0ZWd5O1xuXHR9XG5cdHB1YmxpYyBhZGQob2JqOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWQ6VCA9IDxUPnRoaXMudW5pdE9mV29yay5yZWdpc3Rlck5ldyh0aGlzLmVudGl0eUluZm8sIG9iaik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1c2gocmVnaXN0ZXJlZCk7XG4gICAgICAgICAgICByZXNvbHZlKHJlZ2lzdGVyZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cdHB1YmxpYyByZW1vdmUob2JqIDogVCkgOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKG9iaikudGhlbigocmVzdWx0IDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5zcGxpY2UodGhpcy5jYWNoZS5pbmRleE9mKG9iaiksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5pdE9mV29yay5yZWdpc3RlckRlbGV0ZWQodGhpcy5lbnRpdHlJbmZvLCBvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cdHB1YmxpYyBmaW5kT25lKCkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG4gICAgfVxuICAgIHB1YmxpYyBmaW5kQWxsKCkgOiBQcm9taXNlPEFycmF5PFQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcnNpc3RlbmNlU3RyYXRlZ3kuZmluZCh0aGlzLmVudGl0eUluZm8sIG51bGwpLnRoZW4oKGZvdW5kOiBUW10pID0+IHtcbiAgICAgICAgICAgIGZvdW5kLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNhY2hlLmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuc2xpY2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXHRwdWJsaWMgaGFzKG9iajogVCkgOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlLmluZGV4T2Yob2JqKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZVN0cmF0ZWd5LmZpbmQodGhpcy5lbnRpdHlJbmZvLCBvYmopLnRoZW4oKGZvdW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZm91bmQubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
var es6_promise_1 = require('es6-promise');
var InMemoryStrategy = (function () {
    function InMemoryStrategy() {
        this.objects = {};
    }
    InMemoryStrategy.prototype.create = function (info, obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.objects[info.config.name] = _this.objects[info.config.name] || [];
            _this.objects[info.config.name].push(obj);
            resolve();
        });
    };
    InMemoryStrategy.prototype.update = function (info, obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve) {
            _this.findByKey(info, obj).then(function (found) {
                for (var name in found) {
                    found[name] = obj[name];
                }
                resolve();
            });
        });
    };
    InMemoryStrategy.prototype.delete = function (info, obj) {
        var _this = this;
        var collection = this.getCollection(info);
        var resolved = false;
        return new es6_promise_1.Promise(function (resolve, reject) {
            for (var i = 0; i < collection.length; i++) {
                if (_this.matchesKey(info, obj, collection[i])) {
                    collection.splice(i, 1);
                    resolved = true;
                    resolve();
                }
            }
            if (!resolved) {
                reject();
            }
        });
    };
    InMemoryStrategy.prototype.find = function (info, criteria) {
        var _this = this;
        function allFilter(obj) { return true; }
        function strictFilter(obj) {
            for (var name in criteria) {
                if (obj[name] != criteria[name]) {
                    return false;
                }
            }
            return true;
        }
        return new es6_promise_1.Promise(function (resolve, reject) {
            var collection = _this.getCollection(info), filter;
            if (criteria == null) {
                filter = allFilter;
            }
            else {
                filter = strictFilter;
            }
            resolve(collection.filter(filter));
        });
    };
    InMemoryStrategy.prototype.findByKey = function (info, keyValue) {
        var _this = this;
        var collection = this.getCollection(info);
        return new es6_promise_1.Promise(function (resolve, reject) {
            for (var i = 0; i < collection.length; i++) {
                if (_this.matchesKey(info, keyValue, collection[i])) {
                    resolve(collection[i]);
                }
            }
            reject();
        });
    };
    InMemoryStrategy.prototype.matchesKey = function (info, ref, current) {
        for (var i = 0; i < info.config.key.length; i++) {
            var name = info.config.key[i];
            if (ref[name] != current[name]) {
                return false;
            }
        }
        return true;
    };
    InMemoryStrategy.prototype.getCollection = function (info) {
        if (!this.objects[info.config.name]) {
            this.objects[info.config.name] = [];
        }
        return this.objects[info.config.name];
    };
    return InMemoryStrategy;
})();
exports.default = InMemoryStrategy;

},{"es6-promise":2}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.1.1
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$toString = {}.toString;
    var lib$es6$promise$asap$$vertxNext;
    function lib$es6$promise$asap$$asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        lib$es6$promise$asap$$scheduleFlush();
      }
    }

    var lib$es6$promise$asap$$default = lib$es6$promise$asap$$asap;

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertex() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$default(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$default(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1YiZ5S":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneS50cyJdLCJuYW1lcyI6WyJJbk1lbW9yeVN0cmF0ZWd5IiwiSW5NZW1vcnlTdHJhdGVneS5jb25zdHJ1Y3RvciIsIkluTWVtb3J5U3RyYXRlZ3kuY3JlYXRlIiwiSW5NZW1vcnlTdHJhdGVneS51cGRhdGUiLCJJbk1lbW9yeVN0cmF0ZWd5LmRlbGV0ZSIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZCIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZC5hbGxGaWx0ZXIiLCJJbk1lbW9yeVN0cmF0ZWd5LmZpbmQuc3RyaWN0RmlsdGVyIiwiSW5NZW1vcnlTdHJhdGVneS5maW5kQnlLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5Lm1hdGNoZXNLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5LmdldENvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTtBQUNsRSxvREFBb0Q7QUFJcEQsNEJBQXNCLGFBQWEsQ0FBQyxDQUFBO0FBRXBDO0lBR0lBO1FBRlFDLFlBQU9BLEdBQThCQSxFQUFFQSxDQUFDQTtJQUV6QkEsQ0FBQ0E7SUFFakJELGlDQUFNQSxHQUFiQSxVQUFlQSxJQUFlQSxFQUFFQSxHQUFHQTtRQUFuQ0UsaUJBTUNBO1FBTEdBLE1BQU1BLENBQUNBLElBQUlBLHFCQUFPQSxDQUFPQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUNyQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDdEVBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3pDQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUNkQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVNRixpQ0FBTUEsR0FBYkEsVUFBZUEsSUFBZUEsRUFBRUEsR0FBR0E7UUFBbkNHLGlCQVNDQTtRQVJHQSxNQUFNQSxDQUFDQSxJQUFJQSxxQkFBT0EsQ0FBT0EsVUFBQ0EsT0FBT0E7WUFDN0JBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEtBQUtBO2dCQUNqQ0EsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQUNEQSxPQUFPQSxFQUFFQSxDQUFDQTtZQUNkQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVNSCxpQ0FBTUEsR0FBYkEsVUFBZUEsSUFBZUEsRUFBRUEsR0FBR0E7UUFBbkNJLGlCQWVDQTtRQWRHQSxJQUFJQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMxQ0EsSUFBSUEsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDckJBLE1BQU1BLENBQUNBLElBQUlBLHFCQUFPQSxDQUFPQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUNyQ0EsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQ3BDQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0NBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUN4QkEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ2hCQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDZEEsQ0FBQ0E7WUFDTEEsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1hBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ2JBLENBQUNBO1FBQ0xBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRU1KLCtCQUFJQSxHQUFYQSxVQUFhQSxJQUFlQSxFQUFFQSxRQUFlQTtRQUE3Q0ssaUJBcUJDQTtRQXBCR0EsbUJBQW9CQSxHQUFHQSxJQUFhQyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFBQSxDQUFDQTtRQUNqREQsc0JBQXVCQSxHQUFHQTtZQUN0QkUsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxFQUFFQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDN0JBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7WUFDTEEsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLENBQUNBO1FBRURGLE1BQU1BLENBQUNBLElBQUlBLHFCQUFPQSxDQUFhQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUMzQ0EsSUFBSUEsVUFBVUEsR0FBR0EsS0FBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFDckNBLE1BQXlCQSxDQUFDQTtZQUM5QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsUUFBUUEsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQTtZQUN2QkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLE1BQU1BLEdBQUdBLFlBQVlBLENBQUNBO1lBQzFCQSxDQUFDQTtZQUNEQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFTUwsb0NBQVNBLEdBQWhCQSxVQUFrQkEsSUFBZUEsRUFBRUEsUUFBZUE7UUFBbERRLGlCQVVDQTtRQVRHQSxJQUFJQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMxQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEscUJBQU9BLENBQU1BLFVBQUNBLE9BQU9BLEVBQUVBLE1BQU1BO1lBQ3BDQSxHQUFHQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDcENBLEVBQUVBLENBQUFBLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNoREEsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtZQUNMQSxDQUFDQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNiQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVPUixxQ0FBVUEsR0FBbEJBLFVBQW9CQSxJQUFlQSxFQUFFQSxHQUFHQSxFQUFFQSxPQUFPQTtRQUM3Q1MsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDekNBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzlCQSxFQUFFQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDNUJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1lBQ2pCQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFFT1Qsd0NBQWFBLEdBQXJCQSxVQUF1QkEsSUFBZ0JBO1FBQ25DVSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDeENBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzFDQSxDQUFDQTtJQUNMVix1QkFBQ0E7QUFBREEsQ0E1RkEsQUE0RkNBLElBQUE7QUE1RkQsa0NBNEZDLENBQUEiLCJmaWxlIjoiUGVyc2lzdGVuY2VTdHJhdGVneS9Jbk1lbW9yeVN0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9lczYtcHJvbWlzZS9lczYtcHJvbWlzZS5kLnRzXCIgLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mvbm9kZS9ub2RlLmQudHNcIiAvPlxuXG5pbXBvcnQge1BlcnNpc3RlbmNlU3RyYXRlZ3l9IGZyb20gJy4uL1BlcnNpc3RlbmNlU3RyYXRlZ3knO1xuaW1wb3J0IEVudGl0eUluZm8gZnJvbSAnLi4vRW50aXR5SW5mbyc7XG5pbXBvcnQge1Byb21pc2V9IGZyb20gJ2VzNi1wcm9taXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5NZW1vcnlTdHJhdGVneSBpbXBsZW1lbnRzIFBlcnNpc3RlbmNlU3RyYXRlZ3kge1xuICAgIHByaXZhdGUgb2JqZWN0czp7W25hbWU6c3RyaW5nXTpBcnJheTxhbnk+fSA9IHt9O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgICBwdWJsaWMgY3JlYXRlIChpbmZvOkVudGl0eUluZm8sIG9iaik6UHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0gPSB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0gfHwgW107XG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0ucHVzaChvYmopO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlIChpbmZvOkVudGl0eUluZm8sIG9iaik6UHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5kQnlLZXkoaW5mbywgb2JqKS50aGVuKChmb3VuZCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgbmFtZSBpbiBmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZFtuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUgKGluZm86RW50aXR5SW5mbywgb2JqKTpQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oaW5mbyk7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8Y29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubWF0Y2hlc0tleShpbmZvLCBvYmosIGNvbGxlY3Rpb25baV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQgKGluZm86RW50aXR5SW5mbywgY3JpdGVyaWE6T2JqZWN0KSA6IFByb21pc2U8QXJyYXk8YW55Pj4ge1xuICAgICAgICBmdW5jdGlvbiBhbGxGaWx0ZXIgKG9iaikgOiBib29sZWFuIHtyZXR1cm4gdHJ1ZTt9XG4gICAgICAgIGZ1bmN0aW9uIHN0cmljdEZpbHRlciAob2JqKSA6IGJvb2xlYW4ge1xuICAgICAgICAgICAgZm9yKHZhciBuYW1lIGluIGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqW25hbWVdICE9IGNyaXRlcmlhW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbihpbmZvKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXIgOiAoYW55KSA9PiBib29sZWFuO1xuICAgICAgICAgICAgaWYoY3JpdGVyaWEgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IGFsbEZpbHRlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gc3RyaWN0RmlsdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShjb2xsZWN0aW9uLmZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRCeUtleSAoaW5mbzpFbnRpdHlJbmZvLCBrZXlWYWx1ZTpPYmplY3QpIDogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oaW5mbyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1hdGNoZXNLZXkoaW5mbywga2V5VmFsdWUsIGNvbGxlY3Rpb25baV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29sbGVjdGlvbltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWF0Y2hlc0tleSAoaW5mbzpFbnRpdHlJbmZvLCByZWYsIGN1cnJlbnQpIDogQm9vbGVhbiB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGluZm8uY29uZmlnLmtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBpbmZvLmNvbmZpZy5rZXlbaV07XG4gICAgICAgICAgICBpZihyZWZbbmFtZV0gIT0gY3VycmVudFtuYW1lXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbGxlY3Rpb24gKGluZm86IEVudGl0eUluZm8pIDogQXJyYXk8YW55PiB7XG4gICAgICAgIGlmKCF0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tpbmZvLmNvbmZpZy5uYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EntityConfig = (function () {
    function EntityConfig(name, properties, key) {
        if (key === void 0) { key = []; }
        this.name = name;
        this.properties = properties;
        this.key = key;
    }
    return EntityConfig;
})();
exports.default = EntityConfig;


},{}],2:[function(require,module,exports){
var EntityInfo = (function () {
    function EntityInfo(entity, config) {
        this.entity = entity;
        this.config = config;
    }
    return EntityInfo;
})();
exports.default = EntityInfo;


},{}],3:[function(require,module,exports){
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
var es6_promise_1 = require('es6-promise');
var InMemoryStrategy = (function () {
    function InMemoryStrategy() {
        this.objects = {};
    }
    InMemoryStrategy.prototype.create = function (info, obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.objects[info.config.name] = _this.objects[info.config.name] || [];
            _this.objects[info.config.name].push(obj);
            resolve();
        });
    };
    InMemoryStrategy.prototype.update = function (info, obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve) {
            _this.findByKey(info, obj).then(function (found) {
                for (var name in found) {
                    found[name] = obj[name];
                }
                resolve();
            });
        });
    };
    InMemoryStrategy.prototype.delete = function (info, obj) {
        var _this = this;
        var collection = this.getCollection(info);
        var resolved = false;
        return new es6_promise_1.Promise(function (resolve, reject) {
            for (var i = 0; i < collection.length; i++) {
                if (_this.matchesKey(info, obj, collection[i])) {
                    collection.splice(i, 1);
                    resolved = true;
                    resolve();
                }
            }
            if (!resolved) {
                reject();
            }
        });
    };
    InMemoryStrategy.prototype.find = function (info, criteria) {
        var _this = this;
        function allFilter(obj) { return true; }
        function strictFilter(obj) {
            for (var name in criteria) {
                if (obj[name] != criteria[name]) {
                    return false;
                }
            }
            return true;
        }
        return new es6_promise_1.Promise(function (resolve, reject) {
            var collection = _this.getCollection(info), filter;
            if (criteria == null) {
                filter = allFilter;
            }
            else {
                filter = strictFilter;
            }
            resolve(collection.filter(filter));
        });
    };
    InMemoryStrategy.prototype.findByKey = function (info, keyValue) {
        var _this = this;
        var collection = this.getCollection(info);
        return new es6_promise_1.Promise(function (resolve, reject) {
            for (var i = 0; i < collection.length; i++) {
                if (_this.matchesKey(info, keyValue, collection[i])) {
                    resolve(collection[i]);
                }
            }
            reject();
        });
    };
    InMemoryStrategy.prototype.matchesKey = function (info, ref, current) {
        for (var i = 0; i < info.config.key.length; i++) {
            var name = info.config.key[i];
            if (ref[name] != current[name]) {
                return false;
            }
        }
        return true;
    };
    InMemoryStrategy.prototype.getCollection = function (info) {
        if (!this.objects[info.config.name]) {
            this.objects[info.config.name] = [];
        }
        return this.objects[info.config.name];
    };
    return InMemoryStrategy;
})();
exports.default = InMemoryStrategy;


},{"es6-promise":8}],4:[function(require,module,exports){
var Proxy = (function () {
    function Proxy(obj, accessors) {
        var that = this;
        function defineProperties() {
            function simpleGetter(name) {
                return this[name];
            }
            function simpleSetter(name, value) {
                this[name] = value;
            }
            for (var name in obj) {
                var property = accessors[name] || {}, getter = undefined, setter = undefined;
                getter = (function () {
                    if (property.get) {
                        return property.get;
                    }
                    else {
                        return simpleGetter.bind(obj, name);
                    }
                })();
                setter = (function () {
                    if (property.set) {
                        return property.set;
                    }
                    else {
                        return simpleSetter.bind(obj, name);
                    }
                })();
                Object.defineProperty(that, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter,
                    set: setter
                });
            }
        }
        defineProperties();
    }
    return Proxy;
})();
exports.default = Proxy;


},{}],5:[function(require,module,exports){
var es6_promise_1 = require('es6-promise');
var Repository = (function () {
    function Repository(entityInfo, unitOfWork, persistenceStrategy) {
        this.cache = [];
        this.entityInfo = entityInfo;
        this.unitOfWork = unitOfWork;
        this.persistenceStrategy = persistenceStrategy;
    }
    Repository.prototype.add = function (obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            var registered = _this.unitOfWork.registerNew(_this.entityInfo, obj);
            _this.cache.push(registered);
            resolve(registered);
        });
    };
    Repository.prototype.remove = function (obj) {
        var _this = this;
        return this.has(obj).then(function (result) {
            if (result) {
                _this.cache.splice(_this.cache.indexOf(obj), 1);
                _this.unitOfWork.registerDeleted(_this.entityInfo, obj);
            }
        });
    };
    Repository.prototype.findOne = function () {
        throw new Error('Not implemented yet');
    };
    Repository.prototype.findAll = function () {
        var _this = this;
        return this.persistenceStrategy.find(this.entityInfo, null).then(function (found) {
            found.forEach(function (item) {
                if (_this.cache.indexOf(item) == -1) {
                    _this.cache.push(item);
                }
            });
            return _this.cache.slice();
        });
    };
    Repository.prototype.has = function (obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            if (_this.cache.indexOf(obj) > -1) {
                resolve(true);
            }
            else {
                _this.persistenceStrategy.find(_this.entityInfo, obj).then(function (found) {
                    found.forEach(function (item) {
                        this.cache.push(item);
                    });
                    resolve(found.length > 0);
                });
            }
        });
    };
    return Repository;
})();
exports.default = Repository;


},{"es6-promise":8}],6:[function(require,module,exports){
var Proxy_1 = require('./Proxy');
var TrackedObject = (function () {
    function TrackedObject(info, object, proxy) {
        this.info = info;
        this.object = object;
        this.proxy = proxy;
    }
    Object.defineProperty(TrackedObject.prototype, "Info", {
        get: function () { return this.info; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObject.prototype, "Object", {
        get: function () { return this.object; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObject.prototype, "Proxy", {
        get: function () { return this.proxy; },
        enumerable: true,
        configurable: true
    });
    return TrackedObject;
})();
var UnitOfWork = (function () {
    function UnitOfWork(strategy) {
        this.newObjects = [];
        this.dirtyObjects = [];
        this.fetchedObjects = [];
        this.deletedObjects = [];
        this.strategy = strategy;
    }
    UnitOfWork.prototype.registerNew = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.newObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.registerFetched = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.fetchedObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.registerDirty = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.dirtyObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.registerDeleted = function (info, obj) {
        var tracker = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.deletedObjects.push(tracker);
        return tracker.Proxy;
    };
    UnitOfWork.prototype.commit = function () {
        var strategy = this.strategy;
        this.newObjects.forEach(function (obj) {
            strategy.create(obj.Info, obj.Object);
        });
        this.dirtyObjects.forEach(function (obj) {
            strategy.update(obj.Info, obj.Object);
        });
        this.deletedObjects.forEach(function (obj) {
            strategy.delete(obj.Info, obj.Object);
        });
    };
    UnitOfWork.prototype.rollback = function () { };
    UnitOfWork.prototype.getProxy = function (info, obj) {
        var setters = {};
        function modificationHandler(info, target, name, value) {
            this.registerDirty(info, target);
            target[name] = value;
        }
        for (var name in obj) {
            setters[name] = { set: modificationHandler.bind(this, info, obj, name) };
        }
        return new Proxy_1.default(obj, setters);
    };
    return UnitOfWork;
})();
exports.default = UnitOfWork;


},{"./Proxy":4}],7:[function(require,module,exports){
var EntityConfig_1 = require('./EntityConfig');
exports.EntityConfig = EntityConfig_1.default;
var EntityInfo_1 = require('./EntityInfo');
exports.EntityInfo = EntityInfo_1.default;
var Repository_1 = require('./Repository');
exports.Repository = Repository_1.default;
var Proxy_1 = require('./Proxy');
exports.Proxy = Proxy_1.default;
var UnitOfWork_1 = require('./UnitOfWork');
exports.UnitOfWork = UnitOfWork_1.default;
var InMemoryStrategy_1 = require('./PersistenceStrategy/InMemoryStrategy');
var Talaria = (function () {
    function Talaria() {
        this.defaultStrategy = new InMemoryStrategy_1.default();
        this.unitOfWork = new UnitOfWork_1.default(this.defaultStrategy);
        this.entities = {};
        this.repositories = {};
    }
    Talaria.getInstance = function () {
        if (!Talaria.instance) {
            Talaria.instance = new Talaria();
        }
        return Talaria.instance;
    };
    Object.defineProperty(Talaria.prototype, "DefaultStrategy", {
        get: function () {
            return this.defaultStrategy;
        },
        /*
            Probably this should be removed and setting default strategy
            should be done in constructor
         */
        set: function (value) {
            this.defaultStrategy = value;
            this.unitOfWork = new UnitOfWork_1.default(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Talaria.prototype, "DefaultUnitOfWork", {
        get: function () {
            return this.unitOfWork;
        },
        enumerable: true,
        configurable: true
    });
    Talaria.prototype.registerEntity = function (constructor, config) {
        this.entities[config.name] = new EntityInfo_1.default(constructor, config);
    };
    Talaria.prototype.getEntityInfo = function (name) {
        return this.entities[name];
    };
    Talaria.prototype.getRepository = function (name) {
        if (!this.repositories[name]) {
            this.repositories[name] = new Repository_1.default(this.getEntityInfo(name), this.unitOfWork, this.defaultStrategy);
        }
        return this.repositories[name];
    };
    return Talaria;
})();
exports.default = Talaria;

},{"./EntityConfig":1,"./EntityInfo":2,"./PersistenceStrategy/InMemoryStrategy":3,"./Proxy":4,"./Repository":5,"./UnitOfWork":6}],8:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.1.1
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$toString = {}.toString;
    var lib$es6$promise$asap$$vertxNext;
    function lib$es6$promise$asap$$asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        lib$es6$promise$asap$$scheduleFlush();
      }
    }

    var lib$es6$promise$asap$$default = lib$es6$promise$asap$$asap;

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertex() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$default(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$default(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1YiZ5S":9}],9:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[7])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhbGFyaWEudHMiXSwibmFtZXMiOlsiVGFsYXJpYSIsIlRhbGFyaWEuY29uc3RydWN0b3IiLCJUYWxhcmlhLmdldEluc3RhbmNlIiwiVGFsYXJpYS5EZWZhdWx0U3RyYXRlZ3kiLCJUYWxhcmlhLkRlZmF1bHRVbml0T2ZXb3JrIiwiVGFsYXJpYS5yZWdpc3RlckVudGl0eSIsIlRhbGFyaWEuZ2V0RW50aXR5SW5mbyIsIlRhbGFyaWEuZ2V0UmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQXlCLGdCQUFnQixDQUFDLENBQUE7QUF3RHRCLG9CQUFZLDBCQXhEVTtBQUMxQywyQkFBdUIsY0FBYyxDQUFDLENBQUE7QUF1RDlCLGtCQUFVLHdCQXZEb0I7QUFDdEMsMkJBQXVCLGNBQWMsQ0FBQyxDQUFBO0FBc0RHLGtCQUFVLHdCQXREYjtBQUN0QyxzQkFBa0IsU0FBUyxDQUFDLENBQUE7QUFxRE0sYUFBSyxtQkFyRFg7QUFDNUIsMkJBQXVCLGNBQWMsQ0FBQyxDQUFBO0FBb0RlLGtCQUFVLHdCQXBEekI7QUFFdEMsaUNBQTZCLHdDQUF3QyxDQUFDLENBQUE7QUFFdEU7SUFBQUE7UUFVWUMsb0JBQWVBLEdBQXlCQSxJQUFJQSwwQkFBZ0JBLEVBQUVBLENBQUNBO1FBQy9EQSxlQUFVQSxHQUFnQkEsSUFBSUEsb0JBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQy9EQSxhQUFRQSxHQUFnQ0EsRUFBRUEsQ0FBQ0E7UUFDM0NBLGlCQUFZQSxHQUFxQ0EsRUFBRUEsQ0FBQ0E7SUFpQ2hFQSxDQUFDQTtJQTNDaUJELG1CQUFXQSxHQUF6QkE7UUFDSUUsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLE9BQU9BLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBO1FBQ3JDQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFPREYsc0JBQUlBLG9DQUFlQTthQUFuQkE7WUFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7UUFDaENBLENBQUNBO1FBRURIOzs7V0FHR0E7YUFDSEEsVUFBb0JBLEtBQXlCQTtZQUN6Q0csSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDN0JBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLG9CQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM1Q0EsQ0FBQ0E7OztPQVRBSDtJQVdEQSxzQkFBSUEsc0NBQWlCQTthQUFyQkE7WUFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDM0JBLENBQUNBOzs7T0FBQUo7SUFFTUEsZ0NBQWNBLEdBQXJCQSxVQUF1QkEsV0FBZUEsRUFBRUEsTUFBbUJBO1FBQ3ZESyxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxvQkFBVUEsQ0FBQ0EsV0FBV0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDckVBLENBQUNBO0lBRU1MLCtCQUFhQSxHQUFwQkEsVUFBc0JBLElBQVdBO1FBQzdCTSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUFFTU4sK0JBQWFBLEdBQXBCQSxVQUF5QkEsSUFBV0E7UUFDaENPLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxvQkFBVUEsQ0FBSUEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDakhBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUNMUCxjQUFDQTtBQUFEQSxDQTlDQSxBQThDQ0EsSUFBQTtBQTlDRCx5QkE4Q0MsQ0FBQTtBQUVnRSIsImZpbGUiOiJUYWxhcmlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVudGl0eUNvbmZpZyBmcm9tICcuL0VudGl0eUNvbmZpZyc7XG5pbXBvcnQgRW50aXR5SW5mbyBmcm9tICcuL0VudGl0eUluZm8nO1xuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSAnLi9SZXBvc2l0b3J5JztcbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5JztcbmltcG9ydCBVbml0T2ZXb3JrIGZyb20gJy4vVW5pdE9mV29yayc7XG5pbXBvcnQge1BlcnNpc3RlbmNlU3RyYXRlZ3l9IGZyb20gJy4vUGVyc2lzdGVuY2VTdHJhdGVneSc7XG5pbXBvcnQgSW5NZW1vcnlTdHJhdGVneSBmcm9tICcuL1BlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbGFyaWEge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlIDogVGFsYXJpYTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkgOiBUYWxhcmlhIHtcbiAgICAgICAgaWYoIVRhbGFyaWEuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFRhbGFyaWEuaW5zdGFuY2UgPSBuZXcgVGFsYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUYWxhcmlhLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVmYXVsdFN0cmF0ZWd5IDogUGVyc2lzdGVuY2VTdHJhdGVneSA9IG5ldyBJbk1lbW9yeVN0cmF0ZWd5KCk7XG4gICAgcHJpdmF0ZSB1bml0T2ZXb3JrIDogVW5pdE9mV29yayA9IG5ldyBVbml0T2ZXb3JrKHRoaXMuZGVmYXVsdFN0cmF0ZWd5KTtcbiAgICBwcml2YXRlIGVudGl0aWVzIDoge1tuYW1lOnN0cmluZ106RW50aXR5SW5mb30gPSB7fTtcbiAgICBwcml2YXRlIHJlcG9zaXRvcmllcyA6IHtbbmFtZTpzdHJpbmddOlJlcG9zaXRvcnk8YW55Pn0gPSB7fTtcblxuICAgIGdldCBEZWZhdWx0U3RyYXRlZ3koKTpQZXJzaXN0ZW5jZVN0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFN0cmF0ZWd5O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFByb2JhYmx5IHRoaXMgc2hvdWxkIGJlIHJlbW92ZWQgYW5kIHNldHRpbmcgZGVmYXVsdCBzdHJhdGVneVxuICAgICAgICBzaG91bGQgYmUgZG9uZSBpbiBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHNldCBEZWZhdWx0U3RyYXRlZ3kodmFsdWU6UGVyc2lzdGVuY2VTdHJhdGVneSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRTdHJhdGVneSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVuaXRPZldvcmsgPSBuZXcgVW5pdE9mV29yayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IERlZmF1bHRVbml0T2ZXb3JrKCk6VW5pdE9mV29yayB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXRPZldvcms7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRW50aXR5IChjb25zdHJ1Y3RvcjphbnksIGNvbmZpZzpFbnRpdHlDb25maWcpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllc1tjb25maWcubmFtZV0gPSBuZXcgRW50aXR5SW5mbyhjb25zdHJ1Y3RvciwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RW50aXR5SW5mbyAobmFtZTpzdHJpbmcpIDogRW50aXR5SW5mbyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0aWVzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXBvc2l0b3J5PFQ+IChuYW1lOnN0cmluZykgOiBSZXBvc2l0b3J5PFQ+IHtcbiAgICAgICAgaWYoIXRoaXMucmVwb3NpdG9yaWVzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcmllc1tuYW1lXSA9IG5ldyBSZXBvc2l0b3J5PFQ+KHRoaXMuZ2V0RW50aXR5SW5mbyhuYW1lKSwgdGhpcy51bml0T2ZXb3JrLCB0aGlzLmRlZmF1bHRTdHJhdGVneSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yaWVzW25hbWVdO1xuICAgIH1cbn1cblxuZXhwb3J0IHtFbnRpdHlJbmZvLCBFbnRpdHlDb25maWcsIFByb3h5LCBSZXBvc2l0b3J5LCBVbml0T2ZXb3JrfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=