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
module.exports = Proxy;


},{}],2:[function(require,module,exports){
var Proxy = require('./Proxy');
var TrackedObject = (function () {
    function TrackedObject(info, object) {
        this.info = info;
        this.object = object;
    }
    Object.defineProperty(TrackedObject.prototype, "Info", {
        get: function () {
            return this.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObject.prototype, "Object", {
        get: function () {
            return this.object;
        },
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
        this.newObjects.push(new TrackedObject(info, obj));
        return obj;
    };
    UnitOfWork.prototype.registerFetched = function (info, obj) {
        this.fetchedObjects.push(new TrackedObject(info, obj));
        return this.getProxy(info, obj);
    };
    UnitOfWork.prototype.registerDirty = function (info, obj) {
        this.dirtyObjects.push(new TrackedObject(info, obj));
        return obj;
    };
    UnitOfWork.prototype.registerDeleted = function (info, obj) {
        this.deletedObjects.push(new TrackedObject(info, obj));
        return obj;
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
    UnitOfWork.prototype.rollback = function () {
    };
    UnitOfWork.prototype.getProxy = function (info, obj) {
        var setters = {};
        function modificationHandler(info, target, name, value) {
            this.registerDirty(info, target);
            target[name] = value;
        }
        for (var name in obj) {
            setters[name] = { set: modificationHandler.bind(this, info, obj, name) };
        }
        return new Proxy(obj, setters);
    };
    return UnitOfWork;
})();
module.exports = UnitOfWork;

},{"./Proxy":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXRPZldvcmsudHMiXSwibmFtZXMiOlsiVHJhY2tlZE9iamVjdCIsIlRyYWNrZWRPYmplY3QuY29uc3RydWN0b3IiLCJUcmFja2VkT2JqZWN0LkluZm8iLCJUcmFja2VkT2JqZWN0Lk9iamVjdCIsIlVuaXRPZldvcmsiLCJVbml0T2ZXb3JrLmNvbnN0cnVjdG9yIiwiVW5pdE9mV29yay5yZWdpc3Rlck5ldyIsIlVuaXRPZldvcmsucmVnaXN0ZXJGZXRjaGVkIiwiVW5pdE9mV29yay5yZWdpc3RlckRpcnR5IiwiVW5pdE9mV29yay5yZWdpc3RlckRlbGV0ZWQiLCJVbml0T2ZXb3JrLmNvbW1pdCIsIlVuaXRPZldvcmsucm9sbGJhY2siLCJVbml0T2ZXb3JrLmdldFByb3h5IiwiVW5pdE9mV29yay5nZXRQcm94eS5tb2RpZmljYXRpb25IYW5kbGVyIl0sIm1hcHBpbmdzIjoiQUFFQSxJQUFPLEtBQUssV0FBVyxTQUFTLENBQUMsQ0FBQztBQUdsQyxJQUFNLGFBQWE7SUFRZkEsU0FSRUEsYUFBYUEsQ0FRRkEsSUFBZUEsRUFBRUEsTUFBVUE7UUFDcENDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2pCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFQREQsc0JBQUlBLCtCQUFJQTthQUFSQTtZQUF1QkUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFBQUEsQ0FBQ0E7OztPQUFBRjtJQUV6Q0Esc0JBQUlBLGlDQUFNQTthQUFWQTtZQUFrQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFBQUEsQ0FBQ0E7OztPQUFBSDtJQU0xQ0Esb0JBQUNBO0FBQURBLENBWkEsQUFZQ0EsSUFBQTtBQUVELElBQU0sVUFBVTtJQU9aSSxTQVBFQSxVQUFVQSxDQU9BQSxRQUE0QkE7UUFMaENDLGVBQVVBLEdBQXdCQSxFQUFFQSxDQUFDQTtRQUNyQ0EsaUJBQVlBLEdBQXdCQSxFQUFFQSxDQUFDQTtRQUN2Q0EsbUJBQWNBLEdBQXdCQSxFQUFFQSxDQUFDQTtRQUN6Q0EsbUJBQWNBLEdBQXdCQSxFQUFFQSxDQUFDQTtRQUc3Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBRU1ELGdDQUFXQSxHQUFsQkEsVUFBb0JBLElBQWVBLEVBQUVBLEdBQUdBO1FBQ3BDRSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFFTUYsb0NBQWVBLEdBQXRCQSxVQUF3QkEsSUFBZUEsRUFBRUEsR0FBR0E7UUFDeENHLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLGFBQWFBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBQ3ZEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFFTUgsa0NBQWFBLEdBQXBCQSxVQUFzQkEsSUFBZUEsRUFBRUEsR0FBR0E7UUFDdENJLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLGFBQWFBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtJQUNmQSxDQUFDQTtJQUVNSixvQ0FBZUEsR0FBdEJBLFVBQXdCQSxJQUFlQSxFQUFFQSxHQUFHQTtRQUN4Q0ssSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsYUFBYUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDdkRBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO0lBQ2ZBLENBQUNBO0lBRUdMLDJCQUFNQSxHQUFiQTtRQUNPTSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUU3QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsR0FBR0E7WUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUNBLENBQUNBO1FBQ0hBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLEdBQUdBO1lBQ25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQTtZQUNyQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFTU4sNkJBQVFBLEdBQWZBO0lBQW9CTyxDQUFDQTtJQUViUCw2QkFBUUEsR0FBaEJBLFVBQWtCQSxJQUFlQSxFQUFFQSxHQUFHQTtRQUNsQ1EsSUFBSUEsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFakJBLFNBQVNBLG1CQUFtQkEsQ0FBRUEsSUFBZUEsRUFBRUEsTUFBTUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0E7WUFDOURDLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQ2pDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFFREQsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUNBLEdBQUdBLEVBQUVBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0E7UUFDM0VBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUNMUixpQkFBQ0E7QUFBREEsQ0E1REEsQUE0RENBLElBQUE7QUFDRCxBQUFvQixpQkFBWCxVQUFVLENBQUMiLCJmaWxlIjoiVW5pdE9mV29yay5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9rYXBrZS9wcm9qZWN0cy90YWxhcmlhLyIsInNvdXJjZXNDb250ZW50IjpbXX0=