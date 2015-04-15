///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
define(["require", "exports", 'es6-promise'], function (require, exports, rsvp) {
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
    return InMemoryStrategy;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneS50cyJdLCJuYW1lcyI6WyJJbk1lbW9yeVN0cmF0ZWd5IiwiSW5NZW1vcnlTdHJhdGVneS5jb25zdHJ1Y3RvciIsIkluTWVtb3J5U3RyYXRlZ3kuY3JlYXRlIiwiSW5NZW1vcnlTdHJhdGVneS51cGRhdGUiLCJJbk1lbW9yeVN0cmF0ZWd5LmRlbGV0ZSIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZCIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZEJ5S2V5IiwiSW5NZW1vcnlTdHJhdGVneS5tYXRjaGVzS2V5IiwiSW5NZW1vcnlTdHJhdGVneS5nZXRDb2xsZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxrRUFBa0U7QUFDbEUsb0RBQW9EOzBFQUs3QyxJQUFJO0lBQ1gsSUFBTyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUU5QixJQUFNLGdCQUFnQjtRQUdsQkEsU0FIRUEsZ0JBQWdCQTtZQUNWQyxZQUFPQSxHQUE4QkEsRUFBRUEsQ0FBQ0E7UUFFekJBLENBQUNBO1FBRWpCRCxpQ0FBTUEsR0FBYkEsVUFBZUEsSUFBZUEsRUFBRUEsR0FBR0E7WUFBbkNFLGlCQU1DQTtZQUxHQSxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFPQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtnQkFDckNBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUN0RUEsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxPQUFPQSxFQUFFQSxDQUFDQTtZQUNkQSxD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QSxPQUFPQSxFQUFFQSxNQUFNQTtnQkFDcENBLEdBQUdBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUNBLFVBQVVBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO29CQUNwQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hEQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0JBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFDREEsTUFBTUEsRUFBRUEsQ0FBQ0E7WUFDYkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFFT04scUNBQVVBLEdBQWxCQSxVQUFvQkEsSUFBZUEsRUFBRUEsR0FBR0EsRUFBRUEsT0FBT0E7WUFDN0NPLEdBQUdBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUN6Q0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxFQUFFQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDNUJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7WUFDTEEsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLENBQUNBO1FBRU9QLHdDQUFhQSxHQUFyQkEsVUFBdUJBLElBQWdCQTtZQUNuQ1EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLENBQUNBO1FBQ0xSLHVCQUFDQTtJQUFEQSxDQTVFQSxBQTRFQ0EsSUFBQTtJQUNELEFBQTBCLE9BQWpCLGdCQUFnQixDQUFDIiwiZmlsZSI6IlBlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9rYXBrZS9wcm9qZWN0cy90YWxhcmlhLyIsInNvdXJjZXNDb250ZW50IjpbXX0=