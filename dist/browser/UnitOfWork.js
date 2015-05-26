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