///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
var rsvp = require('es6-promise');
var Promise = rsvp.Promise;
var InMemoryStrategy = (function () {
    function InMemoryStrategy() {
        this.objects = {};
    }
    InMemoryStrategy.prototype.create = function (info, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.objects[info.config.name] = _this.objects[info.config.name] || [];
            _this.objects[info.config.name].push(obj);
            resolve();
        });
    };
    InMemoryStrategy.prototype.update = function (info, obj) {
        return this.findByKey(info, obj).then(function (found) {
            for (var name in found) {
                found[name] = obj[name];
            }
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
        return new Promise(function (resolve, reject) {
            resolve(_this.getCollection(info).filter(function (obj) {
                for (var name in criteria) {
                    if (obj[name] != criteria[name]) {
                        return false;
                    }
                }
                return true;
            }));
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
        return this.objects[info.config.name];
    };
    return InMemoryStrategy;
})();
module.exports = InMemoryStrategy;
//# sourceMappingURL=InMemoryStrategy.js.map