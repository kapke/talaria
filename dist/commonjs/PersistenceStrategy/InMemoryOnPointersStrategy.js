///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
var Pointer_1 = require('../Pointer');
var NotFoundError_1 = require('../Error/NotFoundError');
var InMemoryOnPointersStrategy = (function () {
    function InMemoryOnPointersStrategy() {
        this.objects = {};
    }
    InMemoryOnPointersStrategy.prototype.create = function (info, obj) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getCollection(info).push(info.mapper.toObjectWithPointers(obj));
            resolve();
        });
    };
    InMemoryOnPointersStrategy.prototype.update = function (info, obj) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.findByKey(info, info.mapper.toObjectWithPointers(obj)).then(function (found) {
                for (var name in found) {
                    found[name] = obj[name];
                }
                resolve();
            });
        });
    };
    InMemoryOnPointersStrategy.prototype.delete = function (info, obj) {
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
    InMemoryOnPointersStrategy.prototype.find = function (info, criteria) {
        var _this = this;
        if (criteria === void 0) { criteria = null; }
        function resolvePointer(pointer) {
            return this.find(info.dependencies[pointer.Name], pointer);
        }
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
            return _this.matchesKey.bind(_this, info, criteria.Key);
        };
        return new Promise(function (resolve) {
            var promises, output, collection = _this.getCollection(info), returnSingle = false, filter;
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
            promises = collection.filter(filter).map(function (item) {
                return info.mapper.fromObjectWithPointers(resolvePointer, item);
            });
            output = Promise.all(promises).then(function (items) {
                if (returnSingle) {
                    if (items[0]) {
                        return items[0];
                    }
                    else {
                        return Promise.reject(new NotFoundError_1.default(info, criteria));
                    }
                }
                else {
                    return items;
                }
            });
            resolve(output);
        });
    };
    InMemoryOnPointersStrategy.prototype.findByKey = function (info, keyValue) {
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
    InMemoryOnPointersStrategy.prototype.matchesKey = function (info, ref, current) {
        for (var i = 0; i < info.config.key.length; i++) {
            var name = info.config.key[i];
            if (ref[name] != current[name]) {
                return false;
            }
        }
        return true;
    };
    InMemoryOnPointersStrategy.prototype.getCollection = function (info) {
        if (!this.objects[info.config.name]) {
            this.objects[info.config.name] = [];
        }
        return this.objects[info.config.name];
    };
    return InMemoryOnPointersStrategy;
})();
exports.default = InMemoryOnPointersStrategy;
