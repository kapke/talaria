///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
define(["require", "exports", 'es6-promise'], function (require, exports, es6_promise_1) {
    var InMemoryStrategy = (function () {
        function InMemoryStrategy() {
            this.objects = {};
        }
        InMemoryStrategy.prototype.create = function (info, obj) {
            var _this = this;
            return new es6_promise_1.Promise(function (resolve, reject) {
                _this.getCollection(info).push(info.mapper.toObject(obj));
                resolve();
            });
        };
        InMemoryStrategy.prototype.update = function (info, obj) {
            var _this = this;
            return new es6_promise_1.Promise(function (resolve) {
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
            return new es6_promise_1.Promise(function (resolve, reject) {
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
            function allFilter(obj) { return true; }
            function strictFilter(obj) {
                for (var name in criteria) {
                    if (obj[name] != criteria[name]) {
                        return false;
                    }
                }
                return true;
            }
            return new es6_promise_1.Promise(function (resolve, reject) {
                var collection = _this.getCollection(info), filter;
                if (criteria == null) {
                    filter = allFilter;
                }
                else {
                    filter = strictFilter;
                }
                resolve(collection
                    .filter(filter)
                    .map(info.mapper.fromObject));
            });
        };
        InMemoryStrategy.prototype.findByKey = function (info, keyValue) {
            var _this = this;
            var collection = this.getCollection(info);
            return new es6_promise_1.Promise(function (resolve, reject) {
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
