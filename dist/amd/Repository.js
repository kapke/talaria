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
