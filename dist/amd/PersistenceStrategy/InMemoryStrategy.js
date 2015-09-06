///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
define(["require", "exports", '../Pointer', '../Error/NotFoundError'], function (require, exports, Pointer_1, NotFoundError_1) {
    var InMemoryStrategy = (function () {
        function InMemoryStrategy() {
            this.objects = {};
        }
        InMemoryStrategy.prototype.create = function (info, obj) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.getCollection(info).push(info.mapper.toObject(obj));
                resolve();
            });
        };
        InMemoryStrategy.prototype.update = function (info, obj) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.findByKey(info, info.mapper.toObject(obj)).then(function (found) {
                    for (var name in found) {
                        found[name] = obj[name];
                    }
                    resolve();
                });
            });
        };
        InMemoryStrategy.prototype.delete = function (info, obj) {
            var _this = this;
            var collection = this.getCollection(info);
            var resolved = false;
            return new Promise(function (resolve, reject) {
                for (var i = 0; i < collection.length; i++) {
                    if (_this.matchesKey(info, obj, collection[i])) {
                        collection.splice(i, 1);
                        resolved = true;
                        resolve();
                    }
                }
                if (!resolved) {
                    reject();
                }
            });
        };
        InMemoryStrategy.prototype.find = function (info, criteria) {
            var _this = this;
            if (criteria === void 0) { criteria = null; }
            function allFilter(obj) { return true; }
            function strictFilter(obj) {
                for (var name in criteria) {
                    if (obj[name] != criteria[name]) {
                        return false;
                    }
                }
                return true;
            }
            var keyFilter = function (obj) {
                return _this.matchesKey(info, criteria, obj);
            }, pointerFilterFactory = function (criteria) {
                function extractKeyFromPointerCriteria(criteria) {
                    var copy = { __entity: undefined, __type: undefined }, converted = criteria.toObject();
                    for (var name_1 in converted) {
                        copy[name_1] = converted[name_1];
                    }
                    delete copy.__entity;
                    delete copy.__type;
                    return copy;
                }
                return _this.matchesKey.bind(_this, info, extractKeyFromPointerCriteria(criteria));
            };
            return new Promise(function (resolve) {
                var items, collection = _this.getCollection(info), filter, returnSingle = false;
                if (criteria == null) {
                    filter = allFilter;
                }
                else if (criteria instanceof info.entity) {
                    filter = keyFilter;
                }
                else if (criteria instanceof Pointer_1.default) {
                    returnSingle = true;
                    filter = pointerFilterFactory(criteria);
                }
                else {
                    filter = strictFilter;
                }
                items = collection.filter(filter).map(info.mapper.fromObject);
                if (returnSingle) {
                    if (items[0]) {
                        resolve(items[0]);
                    }
                    else {
                        resolve(Promise.reject(new NotFoundError_1.default(info, criteria)));
                    }
                }
                else {
                    resolve(items);
                }
            });
        };
        InMemoryStrategy.prototype.findByKey = function (info, keyValue) {
            var _this = this;
            var collection = this.getCollection(info);
            return new Promise(function (resolve, reject) {
                for (var i = 0; i < collection.length; i++) {
                    if (_this.matchesKey(info, keyValue, collection[i])) {
                        resolve(collection[i]);
                    }
                }
                reject();
            });
        };
        InMemoryStrategy.prototype.matchesKey = function (info, ref, current) {
            for (var i = 0; i < info.config.key.length; i++) {
                var name = info.config.key[i];
                if (ref[name] != current[name]) {
                    return false;
                }
            }
            return true;
        };
        InMemoryStrategy.prototype.getCollection = function (info) {
            if (!this.objects[info.config.name]) {
                this.objects[info.config.name] = [];
            }
            return this.objects[info.config.name];
        };
        return InMemoryStrategy;
    })();
    exports.default = InMemoryStrategy;
});
