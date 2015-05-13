var rsvp = require('es6-promise');
var Promise = rsvp.Promise;
var Repository = (function () {
    function Repository(entityInfo, unitOfWork, persistenceStrategy) {
        this.cache = [];
        this.entityInfo = entityInfo;
        this.unitOfWork = unitOfWork;
        this.persistenceStrategy = persistenceStrategy;
    }
    Repository.prototype.add = function (obj) {
        var _this = this;
        return this.has(obj).then(function (result) {
            if (!result) {
                _this.cache.push(obj);
                _this.unitOfWork.registerNew(_this.entityInfo, obj);
            }
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
        return new Promise(function (resolve, reject) {
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
module.exports = Repository;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnkudHMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeSIsIlJlcG9zaXRvcnkuY29uc3RydWN0b3IiLCJSZXBvc2l0b3J5LmFkZCIsIlJlcG9zaXRvcnkucmVtb3ZlIiwiUmVwb3NpdG9yeS5maW5kT25lIiwiUmVwb3NpdG9yeS5maW5kQWxsIiwiUmVwb3NpdG9yeS5oYXMiXSwibWFwcGluZ3MiOiJBQUlBLElBQU8sSUFBSSxXQUFXLGFBQWEsQ0FBQyxDQUFDO0FBQ3JDLElBQU8sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFFOUIsSUFBTSxVQUFVO0lBUWZBLFNBUktBLFVBQVVBLENBUUZBLFVBQXFCQSxFQUFFQSxVQUFxQkEsRUFBRUEsbUJBQXdDQTtRQUZ4RkMsVUFBS0EsR0FBT0EsRUFBRUEsQ0FBQ0E7UUFHbkJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1FBQzdCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxtQkFBbUJBLENBQUNBO0lBQ3REQSxDQUFDQTtJQUNNRCx3QkFBR0EsR0FBVkEsVUFBV0EsR0FBTUE7UUFBakJFLGlCQU9JQTtRQU5HQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFnQkE7WUFDdkNBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNUQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDckJBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3REQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxD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