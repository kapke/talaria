define(["require", "exports", './Proxy'], function (require, exports, Proxy) {
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
    return UnitOfWork;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuaXRPZldvcmsudHMiXSwibmFtZXMiOlsiVHJhY2tlZE9iamVjdCIsIlRyYWNrZWRPYmplY3QuY29uc3RydWN0b3IiLCJUcmFja2VkT2JqZWN0LkluZm8iLCJUcmFja2VkT2JqZWN0Lk9iamVjdCIsIlVuaXRPZldvcmsiLCJVbml0T2ZXb3JrLmNvbnN0cnVjdG9yIiwiVW5pdE9mV29yay5yZWdpc3Rlck5ldyIsIlVuaXRPZldvcmsucmVnaXN0ZXJGZXRjaGVkIiwiVW5pdE9mV29yay5yZWdpc3RlckRpcnR5IiwiVW5pdE9mV29yay5yZWdpc3RlckRlbGV0ZWQiLCJVbml0T2ZXb3JrLmNvbW1pdCIsIlVuaXRPZldvcmsucm9sbGJhY2siLCJVbml0T2ZXb3JrLmdldFByb3h5IiwiVW5pdE9mV29yay5nZXRQcm94eS5tb2RpZmljYXRpb25IYW5kbGVyIl0sIm1hcHBpbmdzIjoic0VBRU8sS0FBSztJQUdaLElBQU0sYUFBYTtRQVFmQSxTQVJFQSxhQUFhQSxDQVFGQSxJQUFlQSxFQUFFQSxNQUFVQTtZQUNwQ0MsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1FBQ3pCQSxDQUFDQTtRQVBERCxzQkFBSUEsK0JBQUlBO2lCQUFSQTtnQkFBdUJFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1lBQUFBLENBQUNBOzs7V0FBQUY7UUFFekNBLHNCQUFJQSxpQ0FBTUE7aUJBQVZBO2dCQUFrQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFBQUEsQ0FBQ0E7OztXQUFBSDtRQU0xQ0Esb0JBQUNBO0lBQURBLENBWkEsQUFZQ0EsSUFBQTtJQUVELElBQU0sVUFBVTtRQU9aSSxTQVBFQSxVQUFVQSxDQU9BQSxRQUE0QkE7WUFMaENDLGVBQVVBLEdBQXdCQSxFQUFFQSxDQUFDQTtZQUNyQ0EsaUJBQVlBLEdBQXdCQSxFQUFFQSxDQUFDQTtZQUN2Q0EsbUJBQWNBLEdBQXdCQSxFQUFFQSxDQUFDQTtZQUN6Q0EsbUJBQWNBLEdBQXdCQSxFQUFFQSxDQUFDQTtZQUc3Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDN0JBLENBQUNBO1FBRU1ELGdDQUFXQSxHQUFsQkEsVUFBb0JBLElBQWVBLEVBQUVBLEdBQUdBO1lBQ3BDRSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDZkEsQ0FBQ0E7UUFFTUYsb0NBQWVBLEdBQXRCQSxVQUF3QkEsSUFBZUEsRUFBRUEsR0FBR0E7WUFDeENHLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLGFBQWFBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNwQ0EsQ0FBQ0E7UUFFTUgsa0NBQWFBLEdBQXBCQSxVQUFzQkEsSUFBZUEsRUFBRUEsR0FBR0E7WUFDdENJLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLGFBQWFBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTtRQUVNSixvQ0FBZUEsR0FBdEJBLFVBQXdCQSxJQUFlQSxFQUFFQSxHQUFHQTtZQUN4Q0ssSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsYUFBYUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkRBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBO1FBRUdMLDJCQUFNQSxHQUFiQTtZQUNPTSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUU3QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsR0FBR0E7Z0JBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDQSxDQUFDQTtZQUNIQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQTtnQkFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUNBLENBQUNBO1lBQ0hBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLEdBQUdBO2dCQUNyQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFFTU4sNkJBQVFBLEdBQWZBO1FBQW9CTyxDQUFDQTtRQUViUCw2QkFBUUEsR0FBaEJBLFVBQWtCQSxJQUFlQSxFQUFFQSxHQUFHQTtZQUNsQ1EsSUFBSUEsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFFakJBLFNBQVNBLG1CQUFtQkEsQ0FBRUEsSUFBZUEsRUFBRUEsTUFBTUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0E7Z0JBQzlEQyxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDakNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3pCQSxDQUFDQTtZQUVERCxHQUFHQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbEJBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUNBLEdBQUdBLEVBQUVBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0E7WUFDM0VBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1FBQ25DQSxDQUFDQTtRQUNMUixpQkFBQ0E7SUFBREEsQ0E1REEsQUE0RENBLElBQUE7SUFDRCxBQUFvQixPQUFYLFVBQVUsQ0FBQyIsImZpbGUiOiJVbml0T2ZXb3JrLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2thcGtlL3Byb2plY3RzL3RhbGFyaWEvIiwic291cmNlc0NvbnRlbnQiOltdfQ==