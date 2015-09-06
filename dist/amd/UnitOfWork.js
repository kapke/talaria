define(["require", "exports", './Proxy'], function (require, exports, Proxy_1) {
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
        UnitOfWork.prototype.rollback = function () {
            throw new Error('Not implemented');
        };
        UnitOfWork.prototype.getProxy = function (info, obj) {
            var _this = this;
            var setters = {};
            var modificationHandler = function (info, target, name, value) {
                _this.registerDirty(info, target);
                target[name] = value;
            };
            for (var name in obj) {
                setters[name] = { set: modificationHandler.bind(this, info, obj, name) };
            }
            return new Proxy_1.default(obj, setters);
        };
        return UnitOfWork;
    })();
    exports.default = UnitOfWork;
});
