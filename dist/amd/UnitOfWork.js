define(["require", "exports", './Proxy'], function (require, exports, Proxy) {
    var TrackedObject = (function () {
        function TrackedObject(info, object, proxy) {
            this.info = info;
            this.object = object;
            this.proxy = proxy;
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
        Object.defineProperty(TrackedObject.prototype, "Proxy", {
            get: function () {
                return this.proxy;
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
    return UnitOfWork;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXRPZldvcmsudHMiXSwibmFtZXMiOlsiVHJhY2tlZE9iamVjdCIsIlRyYWNrZWRPYmplY3QuY29uc3RydWN0b3IiLCJUcmFja2VkT2JqZWN0LkluZm8iLCJUcmFja2VkT2JqZWN0Lk9iamVjdCIsIlRyYWNrZWRPYmplY3QuUHJveHkiLCJVbml0T2ZXb3JrIiwiVW5pdE9mV29yay5jb25zdHJ1Y3RvciIsIlVuaXRPZldvcmsucmVnaXN0ZXJOZXciLCJVbml0T2ZXb3JrLnJlZ2lzdGVyRmV0Y2hlZCIsIlVuaXRPZldvcmsucmVnaXN0ZXJEaXJ0eSIsIlVuaXRPZldvcmsucmVnaXN0ZXJEZWxldGVkIiwiVW5pdE9mV29yay5jb21taXQiLCJVbml0T2ZXb3JrLnJvbGxiYWNrIiwiVW5pdE9mV29yay5nZXRQcm94eSIsIlVuaXRPZldvcmsuZ2V0UHJveHkubW9kaWZpY2F0aW9uSGFuZGxlciJdLCJtYXBwaW5ncyI6InNFQUVPLEtBQUs7SUFHWixJQUFNLGFBQWE7UUFXZkEsU0FYRUEsYUFBYUEsQ0FXRkEsSUFBZUEsRUFBRUEsTUFBVUEsRUFBRUEsS0FBV0E7WUFDakRDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1lBQ2pCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtZQUNyQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBVkRELHNCQUFJQSwrQkFBSUE7aUJBQVJBO2dCQUF1QkUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFBQUEsQ0FBQ0E7OztXQUFBRjtRQUV6Q0Esc0JBQUlBLGlDQUFNQTtpQkFBVkE7Z0JBQWtCRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUFBQSxDQUFDQTs7O1dBQUFIO1FBRXRDQSxzQkFBSUEsZ0NBQUtBO2lCQUFUQTtnQkFBbUJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENB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