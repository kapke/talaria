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
//# sourceMappingURL=UnitOfWork.js.map