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
        function allFilter(obj) {
            return true;
        }
        function strictFilter(obj) {
            for (var name in criteria) {
                if (obj[name] != criteria[name]) {
                    return false;
                }
            }
            return true;
        }
        return new Promise(function (resolve, reject) {
            var collection = _this.getCollection(info), filter;
            if (criteria == null) {
                filter = allFilter;
            }
            else {
                filter = strictFilter;
            }
            resolve(collection.filter(filter));
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
module.exports = InMemoryStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneS50cyJdLCJuYW1lcyI6WyJJbk1lbW9yeVN0cmF0ZWd5IiwiSW5NZW1vcnlTdHJhdGVneS5jb25zdHJ1Y3RvciIsIkluTWVtb3J5U3RyYXRlZ3kuY3JlYXRlIiwiSW5NZW1vcnlTdHJhdGVneS51cGRhdGUiLCJJbk1lbW9yeVN0cmF0ZWd5LmRlbGV0ZSIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZCIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZC5hbGxGaWx0ZXIiLCJJbk1lbW9yeVN0cmF0ZWd5LmZpbmQuc3RyaWN0RmlsdGVyIiwiSW5NZW1vcnlTdHJhdGVneS5maW5kQnlLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5Lm1hdGNoZXNLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5LmdldENvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTtBQUNsRSxvREFBb0Q7QUFLcEQsSUFBTyxJQUFJLFdBQVcsYUFBYSxDQUFDLENBQUM7QUFDckMsSUFBTyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUU5QixJQUFNLGdCQUFnQjtJQUdsQkEsU0FIRUEsZ0JBQWdCQTtRQUNWQyxZQUFPQSxHQUE4QkEsRUFBRUEsQ0FBQ0E7SUFFekJBLENBQUNBO0lBRWpCRCxpQ0FBTUEsR0FBYkEsVUFBZUEsSUFBZUEsRUFBRUEsR0FBR0E7UUFBbkNFLGlCQU1DQTtRQUxHQSxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFPQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUNyQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDdEVBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNB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QUFDQSxDQUFDQSxHQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN6Q0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLEVBQUVBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUM1QkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDakJBLENBQUNBO1FBQ0xBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVPVCx3Q0FBYUEsR0FBckJBLFVBQXVCQSxJQUFnQkE7UUFDbkNVLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUN4Q0EsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDMUNBLENBQUNBO0lBQ0xWLHVCQUFDQTtBQUFEQSxDQXpGQSxBQXlGQ0EsSUFBQTtBQUNELEFBQTBCLGlCQUFqQixnQkFBZ0IsQ0FBQyIsImZpbGUiOiJQZXJzaXN0ZW5jZVN0cmF0ZWd5L0luTWVtb3J5U3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fwa2UvcHJvamVjdHMvdGFsYXJpYS8iLCJzb3VyY2VzQ29udGVudCI6W119