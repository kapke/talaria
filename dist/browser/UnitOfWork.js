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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXRPZldvcmsudHMiXSwibmFtZXMiOlsiVHJhY2tlZE9iamVjdCIsIlRyYWNrZWRPYmplY3QuY29uc3RydWN0b3IiLCJUcmFja2VkT2JqZWN0LkluZm8iLCJUcmFja2VkT2JqZWN0Lk9iamVjdCIsIlRyYWNrZWRPYmplY3QuUHJveHkiLCJVbml0T2ZXb3JrIiwiVW5pdE9mV29yay5jb25zdHJ1Y3RvciIsIlVuaXRPZldvcmsucmVnaXN0ZXJOZXciLCJVbml0T2ZXb3JrLnJlZ2lzdGVyRmV0Y2hlZCIsIlVuaXRPZldvcmsucmVnaXN0ZXJEaXJ0eSIsIlVuaXRPZldvcmsucmVnaXN0ZXJEZWxldGVkIiwiVW5pdE9mV29yay5jb21taXQiLCJVbml0T2ZXb3JrLnJvbGxiYWNrIiwiVW5pdE9mV29yay5nZXRQcm94eSIsIlVuaXRPZldvcmsuZ2V0UHJveHkubW9kaWZpY2F0aW9uSGFuZGxlciJdLCJtYXBwaW5ncyI6IkFBQ0Esc0JBQWtCLFNBQVMsQ0FBQyxDQUFBO0FBRzVCO0lBV0lBLHVCQUFhQSxJQUFlQSxFQUFFQSxNQUFVQSxFQUFFQSxLQUFXQTtRQUNqREMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFWREQsc0JBQUlBLCtCQUFJQTthQUFSQSxjQUF1QkUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7OztPQUFBRjtJQUV6Q0Esc0JBQUlBLGlDQUFNQTthQUFWQSxjQUFrQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7OztPQUFBSDtJQUV0Q0Esc0JBQUlBLGdDQUFLQTthQUFUQSxjQUFtQkksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEs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Q0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsR0FBR0E7WUFDckMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRU1OLDZCQUFRQSxHQUFmQSxjQUFvQk8sQ0FBQ0E7SUFFYlAsNkJBQVFBLEdBQWhCQSxVQUFrQkEsSUFBZUEsRUFBRUEsR0FBR0E7UUFDbENRLElBQUlBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBRWpCQSw2QkFBOEJBLElBQWVBLEVBQUVBLE1BQU1BLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBO1lBQzlEQyxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUNqQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDekJBLENBQUNBO1FBRURELEdBQUdBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFDQSxHQUFHQSxFQUFFQSxtQkFBbUJBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUNBLENBQUNBO1FBQzNFQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxlQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFDTFIsaUJBQUNBO0FBQURBLENBaEVBLEFBZ0VDQSxJQUFBO0FBQ0Qsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6IlVuaXRPZldvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNpc3RlbmNlU3RyYXRlZ3l9IGZyb20gJy4vUGVyc2lzdGVuY2VTdHJhdGVneSc7XG5pbXBvcnQgUHJveHkgZnJvbSAnLi9Qcm94eSc7XG5pbXBvcnQgRW50aXR5SW5mbyBmcm9tICcuL0VudGl0eUluZm8nO1xuXG5jbGFzcyBUcmFja2VkT2JqZWN0IHtcbiAgICBwcml2YXRlIGluZm86RW50aXR5SW5mbztcbiAgICBwcml2YXRlIG9iamVjdDphbnk7XG4gICAgcHJpdmF0ZSBwcm94eTpQcm94eTtcblxuICAgIGdldCBJbmZvKCk6RW50aXR5SW5mbyB7cmV0dXJuIHRoaXMuaW5mbzt9XG5cbiAgICBnZXQgT2JqZWN0KCk6YW55IHtyZXR1cm4gdGhpcy5vYmplY3Q7fVxuXG4gICAgZ2V0IFByb3h5KCk6UHJveHkge3JldHVybiB0aGlzLnByb3h5O31cblxuICAgIGNvbnN0cnVjdG9yIChpbmZvOkVudGl0eUluZm8sIG9iamVjdDphbnksIHByb3h5OlByb3h5KSB7XG4gICAgICAgIHRoaXMuaW5mbyA9IGluZm87XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3h5ID0gcHJveHk7XG4gICAgfVxufVxuXG5jbGFzcyBVbml0T2ZXb3JrIHtcbiAgICBwcml2YXRlIHN0cmF0ZWd5OlBlcnNpc3RlbmNlU3RyYXRlZ3k7XG4gICAgcHJpdmF0ZSBuZXdPYmplY3RzOkFycmF5PFRyYWNrZWRPYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBkaXJ0eU9iamVjdHM6QXJyYXk8VHJhY2tlZE9iamVjdD4gPSBbXTtcbiAgICBwcml2YXRlIGZldGNoZWRPYmplY3RzOkFycmF5PFRyYWNrZWRPYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBkZWxldGVkT2JqZWN0czpBcnJheTxUcmFja2VkT2JqZWN0PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ3k6UGVyc2lzdGVuY2VTdHJhdGVneSkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyTmV3IChpbmZvOkVudGl0eUluZm8sIG9iaikgOiBPYmplY3Qge1xuICAgICAgICB2YXIgdHJhY2tlcjpUcmFja2VkT2JqZWN0ID0gbmV3IFRyYWNrZWRPYmplY3QoaW5mbywgb2JqLCB0aGlzLmdldFByb3h5KGluZm8sIG9iaikpO1xuICAgICAgICB0aGlzLm5ld09iamVjdHMucHVzaCh0cmFja2VyKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrZXIuUHJveHk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRmV0Y2hlZCAoaW5mbzpFbnRpdHlJbmZvLCBvYmopIDogT2JqZWN0IHtcbiAgICAgICAgdmFyIHRyYWNrZXI6VHJhY2tlZE9iamVjdCA9IG5ldyBUcmFja2VkT2JqZWN0KGluZm8sIG9iaiwgdGhpcy5nZXRQcm94eShpbmZvLCBvYmopKTtcbiAgICAgICAgdGhpcy5mZXRjaGVkT2JqZWN0cy5wdXNoKHRyYWNrZXIpO1xuICAgICAgICByZXR1cm4gdHJhY2tlci5Qcm94eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJEaXJ0eSAoaW5mbzpFbnRpdHlJbmZvLCBvYmopIDogT2JqZWN0IHtcbiAgICAgICAgdmFyIHRyYWNrZXI6VHJhY2tlZE9iamVjdCA9IG5ldyBUcmFja2VkT2JqZWN0KGluZm8sIG9iaiwgdGhpcy5nZXRQcm94eShpbmZvLCBvYmopKTtcbiAgICAgICAgdGhpcy5kaXJ0eU9iamVjdHMucHVzaCh0cmFja2VyKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrZXIuUHJveHk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRGVsZXRlZCAoaW5mbzpFbnRpdHlJbmZvLCBvYmopIDogT2JqZWN0IHtcbiAgICAgICAgdmFyIHRyYWNrZXI6VHJhY2tlZE9iamVjdCA9IG5ldyBUcmFja2VkT2JqZWN0KGluZm8sIG9iaiwgdGhpcy5nZXRQcm94eShpbmZvLCBvYmopKTtcbiAgICAgICAgdGhpcy5kZWxldGVkT2JqZWN0cy5wdXNoKHRyYWNrZXIpO1xuICAgICAgICByZXR1cm4gdHJhY2tlci5Qcm94eTtcbiAgICB9XG5cblx0cHVibGljIGNvbW1pdCAoKSB7XG4gICAgICAgIHZhciBzdHJhdGVneSA9IHRoaXMuc3RyYXRlZ3k7XG5cbiAgICAgICAgdGhpcy5uZXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgc3RyYXRlZ3kuY3JlYXRlKG9iai5JbmZvLCBvYmouT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlydHlPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgc3RyYXRlZ3kudXBkYXRlKG9iai5JbmZvLCBvYmouT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVsZXRlZE9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBzdHJhdGVneS5kZWxldGUob2JqLkluZm8sIG9iai5PYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcm9sbGJhY2sgKCkge31cblxuICAgIHByaXZhdGUgZ2V0UHJveHkgKGluZm86RW50aXR5SW5mbywgb2JqKTpQcm94eSB7XG4gICAgICAgIHZhciBzZXR0ZXJzID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gbW9kaWZpY2F0aW9uSGFuZGxlciAoaW5mbzpFbnRpdHlJbmZvLCB0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGlydHkoaW5mbywgdGFyZ2V0KTtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKHZhciBuYW1lIGluIG9iaikge1xuICAgICAgICAgICAgc2V0dGVyc1tuYW1lXSA9IHtzZXQ6IG1vZGlmaWNhdGlvbkhhbmRsZXIuYmluZCh0aGlzLCBpbmZvLCBvYmosIG5hbWUpfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwgc2V0dGVycyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVW5pdE9mV29yazsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=