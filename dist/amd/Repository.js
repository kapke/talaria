define(["require", "exports", 'es6-promise'], function (require, exports, es6_promise_1) {
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnkudHMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeSIsIlJlcG9zaXRvcnkuY29uc3RydWN0b3IiLCJSZXBvc2l0b3J5LmFkZCIsIlJlcG9zaXRvcnkucmVtb3ZlIiwiUmVwb3NpdG9yeS5maW5kT25lIiwiUmVwb3NpdG9yeS5maW5kQWxsIiwiUmVwb3NpdG9yeS5oYXMiXSwibWFwcGluZ3MiOiI7SUFLQTtRQVFDQSxvQkFBYUEsVUFBcUJBLEVBQUVBLFVBQXFCQSxFQUFFQSxtQkFBd0NBO1lBRnhGQyxVQUFLQSxHQUFPQSxFQUFFQSxDQUFDQTtZQUduQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7WUFDN0JBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1lBQzdCQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLG1CQUFtQkEsQ0FBQ0E7UUFDdERBLENBQUNBO1FBQ01ELHdCQUFHQSxHQUFWQSxVQUFXQSxHQUFNQTtZQUFqQkUsaUJBTUlBO1lBTEdBLE1BQU1BLENBQUNBLElBQUlBLHFCQUFPQSxDQUFJQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtnQkFDbENBLElBQUlBLFVBQVVBLEdBQVFBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO2dCQUN4RUEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtZQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFDR0YsMkJBQU1BLEdBQWJBLFVBQWNBLEdBQU9BO1lBQXJCRyxpQkFPSUE7WUFOR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsTUFBZ0JBO2dCQUN2Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1JBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUM5Q0EsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFEQSxDQUFDQTtZQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtRQUNHSCw0QkFBT0EsR0FBZEE7WUFDT0ksTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtRQUMzQ0EsQ0FBQ0E7UUFDTUosNEJBQU9BLEdBQWRBO1lBQUFLLGlCQVNDQTtZQVJHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxtQkFBbUJBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEtBQVVBO2dCQUN4RUEsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBSUE7b0JBQ2ZBLEVBQUVBLENBQUFBLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNoQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxDQUFDQTtnQkFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQzlCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtRQUNHTCx3QkFBR0EsR0FBVkEsVUFBV0EsR0FBTUE7WUFBakJNLGlCQWFJQTtZQVpHQSxNQUFNQSxDQUFDQSxJQUFJQSxxQkFBT0EsQ0FBVUEsVUFBQ0EsT0FBT0EsRUFBRUEsTUFBTUE7Z0JBQ3hDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDL0JBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUNKQSxLQUFJQSxDQUFDQSxtQkFBbUJBLENBQUNBLElBQUlBLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEtBQUtBO3dCQUMzREEsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsSUFBSUE7NEJBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQixDQUFDLENBQUNBLENBQUNBO3dCQUNIQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDOUJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtZQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtRQUNMTixpQkFBQ0E7SUFBREEsQ0F2REEsQUF1RENBLElBQUE7SUF2REQsNEJBdURDLENBQUEiLCJmaWxlIjoiUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbnRpdHlJbmZvIGZyb20gJy4vRW50aXR5SW5mbyc7XG5pbXBvcnQgVW5pdE9mV29yayBmcm9tICcuL1VuaXRPZldvcmsnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZVN0cmF0ZWd5fSBmcm9tICcuL1BlcnNpc3RlbmNlU3RyYXRlZ3knO1xuaW1wb3J0IHtQcm9taXNlfSBmcm9tICdlczYtcHJvbWlzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnk8VD4ge1xuICAgIHByaXZhdGUgZW50aXR5SW5mbzpFbnRpdHlJbmZvO1xuICAgIC8vc2hvdWxkIGJlIHVzZWQgb25seSBmb3Igd3JpdGluZyBhY3Rpb25zXG4gICAgcHJpdmF0ZSB1bml0T2ZXb3JrOlVuaXRPZldvcms7XG4gICAgLy9zaG91bGQgYmUgdXNlZCBvbmx5IGZvciByZWFkaW5nIGFjdGlvbnNcbiAgICBwcml2YXRlIHBlcnNpc3RlbmNlU3RyYXRlZ3k6UGVyc2lzdGVuY2VTdHJhdGVneTtcbiAgICBwcml2YXRlIGNhY2hlOlRbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yIChlbnRpdHlJbmZvOkVudGl0eUluZm8sIHVuaXRPZldvcms6VW5pdE9mV29yaywgcGVyc2lzdGVuY2VTdHJhdGVneTogUGVyc2lzdGVuY2VTdHJhdGVneSkge1xuICAgICAgICB0aGlzLmVudGl0eUluZm8gPSBlbnRpdHlJbmZvO1xuICAgICAgICB0aGlzLnVuaXRPZldvcmsgPSB1bml0T2ZXb3JrO1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlU3RyYXRlZ3kgPSBwZXJzaXN0ZW5jZVN0cmF0ZWd5O1xuXHR9XG5cdHB1YmxpYyBhZGQob2JqOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWQ6VCA9IDxUPnRoaXMudW5pdE9mV29yay5yZWdpc3Rlck5ldyh0aGlzLmVudGl0eUluZm8sIG9iaik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1c2gocmVnaXN0ZXJlZCk7XG4gICAgICAgICAgICByZXNvbHZlKHJlZ2lzdGVyZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cdHB1YmxpYyByZW1vdmUob2JqIDogVCkgOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKG9iaikudGhlbigocmVzdWx0IDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5zcGxpY2UodGhpcy5jYWNoZS5pbmRleE9mKG9iaiksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5pdE9mV29yay5yZWdpc3RlckRlbGV0ZWQodGhpcy5lbnRpdHlJbmZvLCBvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cdHB1YmxpYyBmaW5kT25lKCkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG4gICAgfVxuICAgIHB1YmxpYyBmaW5kQWxsKCkgOiBQcm9taXNlPEFycmF5PFQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcnNpc3RlbmNlU3RyYXRlZ3kuZmluZCh0aGlzLmVudGl0eUluZm8sIG51bGwpLnRoZW4oKGZvdW5kOiBUW10pID0+IHtcbiAgICAgICAgICAgIGZvdW5kLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNhY2hlLmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUuc2xpY2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXHRwdWJsaWMgaGFzKG9iajogVCkgOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlLmluZGV4T2Yob2JqKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZVN0cmF0ZWd5LmZpbmQodGhpcy5lbnRpdHlJbmZvLCBvYmopLnRoZW4oKGZvdW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZm91bmQubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=