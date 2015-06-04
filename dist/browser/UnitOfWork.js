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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXRPZldvcmsudHMiXSwibmFtZXMiOlsiVHJhY2tlZE9iamVjdCIsIlRyYWNrZWRPYmplY3QuY29uc3RydWN0b3IiLCJUcmFja2VkT2JqZWN0LkluZm8iLCJUcmFja2VkT2JqZWN0Lk9iamVjdCIsIlRyYWNrZWRPYmplY3QuUHJveHkiLCJVbml0T2ZXb3JrIiwiVW5pdE9mV29yay5jb25zdHJ1Y3RvciIsIlVuaXRPZldvcmsucmVnaXN0ZXJOZXciLCJVbml0T2ZXb3JrLnJlZ2lzdGVyRmV0Y2hlZCIsIlVuaXRPZldvcmsucmVnaXN0ZXJEaXJ0eSIsIlVuaXRPZldvcmsucmVnaXN0ZXJEZWxldGVkIiwiVW5pdE9mV29yay5jb21taXQiLCJVbml0T2ZXb3JrLnJvbGxiYWNrIiwiVW5pdE9mV29yay5nZXRQcm94eSIsIlVuaXRPZldvcmsuZ2V0UHJveHkubW9kaWZpY2F0aW9uSGFuZGxlciJdLCJtYXBwaW5ncyI6IkFBQ0Esc0JBQWtCLFNBQVMsQ0FBQyxDQUFBO0FBRzVCO0lBV0lBLHVCQUFhQSxJQUFvQkEsRUFBRUEsTUFBVUEsRUFBRUEsS0FBV0E7UUFDdERDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2pCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBVkRELHNCQUFJQSwrQkFBSUE7YUFBUkEsY0FBNEJFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUFBLENBQUNBOzs7T0FBQUY7SUFFOUNBLHNCQUFJQSxpQ0FBTUE7YUFBVkEsY0FBa0JHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUFBLENBQUNBOzs7T0FBQUg7SUFFdENBLHNCQUFJQSxnQ0FBS0E7YUFBVEEsY0FBbUJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUFB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QUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQTtZQUNyQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFTU4sNkJBQVFBLEdBQWZBLGNBQW9CTyxDQUFDQTtJQUViUCw2QkFBUUEsR0FBaEJBLFVBQWtCQSxJQUFvQkEsRUFBRUEsR0FBR0E7UUFDdkNRLElBQUlBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBRWpCQSw2QkFBOEJBLElBQW9CQSxFQUFFQSxNQUFNQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQTtZQUNuRUMsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3pCQSxDQUFDQTtRQUVERCxHQUFHQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBQ0EsR0FBR0EsRUFBRUEsbUJBQW1CQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFDQSxDQUFDQTtRQUMzRUEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsZUFBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBQ0xSLGlCQUFDQTtBQUFEQSxDQWhFQSxBQWdFQ0EsSUFBQTtBQUNELGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiJVbml0T2ZXb3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJzaXN0ZW5jZVN0cmF0ZWd5fSBmcm9tICcuL1BlcnNpc3RlbmNlU3RyYXRlZ3knO1xuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknO1xuaW1wb3J0IEVudGl0eUluZm8gZnJvbSAnLi9FbnRpdHlJbmZvJztcblxuY2xhc3MgVHJhY2tlZE9iamVjdCB7XG4gICAgcHJpdmF0ZSBpbmZvOkVudGl0eUluZm88YW55PjtcbiAgICBwcml2YXRlIG9iamVjdDphbnk7XG4gICAgcHJpdmF0ZSBwcm94eTpQcm94eTtcblxuICAgIGdldCBJbmZvKCk6RW50aXR5SW5mbzxhbnk+IHtyZXR1cm4gdGhpcy5pbmZvO31cblxuICAgIGdldCBPYmplY3QoKTphbnkge3JldHVybiB0aGlzLm9iamVjdDt9XG5cbiAgICBnZXQgUHJveHkoKTpQcm94eSB7cmV0dXJuIHRoaXMucHJveHk7fVxuXG4gICAgY29uc3RydWN0b3IgKGluZm86RW50aXR5SW5mbzxhbnk+LCBvYmplY3Q6YW55LCBwcm94eTpQcm94eSkge1xuICAgICAgICB0aGlzLmluZm8gPSBpbmZvO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm94eSA9IHByb3h5O1xuICAgIH1cbn1cblxuY2xhc3MgVW5pdE9mV29yayB7XG4gICAgcHJpdmF0ZSBzdHJhdGVneTpQZXJzaXN0ZW5jZVN0cmF0ZWd5O1xuICAgIHByaXZhdGUgbmV3T2JqZWN0czpBcnJheTxUcmFja2VkT2JqZWN0PiA9IFtdO1xuICAgIHByaXZhdGUgZGlydHlPYmplY3RzOkFycmF5PFRyYWNrZWRPYmplY3Q+ID0gW107XG4gICAgcHJpdmF0ZSBmZXRjaGVkT2JqZWN0czpBcnJheTxUcmFja2VkT2JqZWN0PiA9IFtdO1xuICAgIHByaXZhdGUgZGVsZXRlZE9iamVjdHM6QXJyYXk8VHJhY2tlZE9iamVjdD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5OlBlcnNpc3RlbmNlU3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck5ldyAoaW5mbzpFbnRpdHlJbmZvPGFueT4sIG9iaikgOiBPYmplY3Qge1xuICAgICAgICB2YXIgdHJhY2tlcjpUcmFja2VkT2JqZWN0ID0gbmV3IFRyYWNrZWRPYmplY3QoaW5mbywgb2JqLCB0aGlzLmdldFByb3h5KGluZm8sIG9iaikpO1xuICAgICAgICB0aGlzLm5ld09iamVjdHMucHVzaCh0cmFja2VyKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrZXIuUHJveHk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRmV0Y2hlZCAoaW5mbzpFbnRpdHlJbmZvPGFueT4sIG9iaikgOiBPYmplY3Qge1xuICAgICAgICB2YXIgdHJhY2tlcjpUcmFja2VkT2JqZWN0ID0gbmV3IFRyYWNrZWRPYmplY3QoaW5mbywgb2JqLCB0aGlzLmdldFByb3h5KGluZm8sIG9iaikpO1xuICAgICAgICB0aGlzLmZldGNoZWRPYmplY3RzLnB1c2godHJhY2tlcik7XG4gICAgICAgIHJldHVybiB0cmFja2VyLlByb3h5O1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckRpcnR5IChpbmZvOkVudGl0eUluZm88YW55Piwgb2JqKSA6IE9iamVjdCB7XG4gICAgICAgIHZhciB0cmFja2VyOlRyYWNrZWRPYmplY3QgPSBuZXcgVHJhY2tlZE9iamVjdChpbmZvLCBvYmosIHRoaXMuZ2V0UHJveHkoaW5mbywgb2JqKSk7XG4gICAgICAgIHRoaXMuZGlydHlPYmplY3RzLnB1c2godHJhY2tlcik7XG4gICAgICAgIHJldHVybiB0cmFja2VyLlByb3h5O1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckRlbGV0ZWQgKGluZm86RW50aXR5SW5mbzxhbnk+LCBvYmopIDogT2JqZWN0IHtcbiAgICAgICAgdmFyIHRyYWNrZXI6VHJhY2tlZE9iamVjdCA9IG5ldyBUcmFja2VkT2JqZWN0KGluZm8sIG9iaiwgdGhpcy5nZXRQcm94eShpbmZvLCBvYmopKTtcbiAgICAgICAgdGhpcy5kZWxldGVkT2JqZWN0cy5wdXNoKHRyYWNrZXIpO1xuICAgICAgICByZXR1cm4gdHJhY2tlci5Qcm94eTtcbiAgICB9XG5cblx0cHVibGljIGNvbW1pdCAoKSB7XG4gICAgICAgIHZhciBzdHJhdGVneSA9IHRoaXMuc3RyYXRlZ3k7XG5cbiAgICAgICAgdGhpcy5uZXdPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgc3RyYXRlZ3kuY3JlYXRlKG9iai5JbmZvLCBvYmouT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlydHlPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgc3RyYXRlZ3kudXBkYXRlKG9iai5JbmZvLCBvYmouT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVsZXRlZE9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBzdHJhdGVneS5kZWxldGUob2JqLkluZm8sIG9iai5PYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcm9sbGJhY2sgKCkge31cblxuICAgIHByaXZhdGUgZ2V0UHJveHkgKGluZm86RW50aXR5SW5mbzxhbnk+LCBvYmopOlByb3h5IHtcbiAgICAgICAgdmFyIHNldHRlcnMgPSB7fTtcblxuICAgICAgICBmdW5jdGlvbiBtb2RpZmljYXRpb25IYW5kbGVyIChpbmZvOkVudGl0eUluZm88YW55PiwgdGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRpcnR5KGluZm8sIHRhcmdldCk7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcih2YXIgbmFtZSBpbiBvYmopIHtcbiAgICAgICAgICAgIHNldHRlcnNbbmFtZV0gPSB7c2V0OiBtb2RpZmljYXRpb25IYW5kbGVyLmJpbmQodGhpcywgaW5mbywgb2JqLCBuYW1lKX07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHNldHRlcnMpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVuaXRPZldvcms7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9