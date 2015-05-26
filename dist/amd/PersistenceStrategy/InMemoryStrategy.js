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
                _this.objects[info.config.name] = _this.objects[info.config.name] || [];
                _this.objects[info.config.name].push(obj);
                resolve();
            });
        };
        InMemoryStrategy.prototype.update = function (info, obj) {
            var _this = this;
            return new es6_promise_1.Promise(function (resolve) {
                _this.findByKey(info, obj).then(function (found) {
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
                resolve(collection.filter(filter));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneS50cyJdLCJuYW1lcyI6WyJJbk1lbW9yeVN0cmF0ZWd5IiwiSW5NZW1vcnlTdHJhdGVneS5jb25zdHJ1Y3RvciIsIkluTWVtb3J5U3RyYXRlZ3kuY3JlYXRlIiwiSW5NZW1vcnlTdHJhdGVneS51cGRhdGUiLCJJbk1lbW9yeVN0cmF0ZWd5LmRlbGV0ZSIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZCIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZC5hbGxGaWx0ZXIiLCJJbk1lbW9yeVN0cmF0ZWd5LmZpbmQuc3RyaWN0RmlsdGVyIiwiSW5NZW1vcnlTdHJhdGVneS5maW5kQnlLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5Lm1hdGNoZXNLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5LmdldENvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTtBQUNsRSxvREFBb0Q7O0lBTXBEO1FBR0lBO1lBRlFDLFlBQU9BLEdBQThCQSxFQUFFQSxDQUFDQTtRQUV6QkEsQ0FBQ0E7UUFFakJELGlDQUFNQSxHQUFiQSxVQUFlQSxJQUFlQSxFQUFFQSxHQUFHQTtZQUFuQ0UsaUJBTUNBO1lBTEdBLE1BQU1BLENBQUNBLElBQUlBLHFCQUFPQSxDQUFPQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtnQkFDckNBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUN0RUEsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxPQUFPQSxFQUFFQSxDQUFDQTtZQUNkQSxDQUFDQSxD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R0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQ3pDQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDOUJBLEVBQUVBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUM1QkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtZQUNMQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFFT1Qsd0NBQWFBLEdBQXJCQSxVQUF1QkEsSUFBZ0JBO1lBQ25DVSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDakNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO1lBQ3hDQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMxQ0EsQ0FBQ0E7UUFDTFYsdUJBQUNBO0lBQURBLENBNUZBLEFBNEZDQSxJQUFBO0lBNUZELGtDQTRGQyxDQUFBIiwiZmlsZSI6IlBlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZXM2LXByb21pc2UvZXM2LXByb21pc2UuZC50c1wiIC8+XG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL25vZGUvbm9kZS5kLnRzXCIgLz5cblxuaW1wb3J0IHtQZXJzaXN0ZW5jZVN0cmF0ZWd5fSBmcm9tICcuLi9QZXJzaXN0ZW5jZVN0cmF0ZWd5JztcbmltcG9ydCBFbnRpdHlJbmZvIGZyb20gJy4uL0VudGl0eUluZm8nO1xuaW1wb3J0IHtQcm9taXNlfSBmcm9tICdlczYtcHJvbWlzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluTWVtb3J5U3RyYXRlZ3kgaW1wbGVtZW50cyBQZXJzaXN0ZW5jZVN0cmF0ZWd5IHtcbiAgICBwcml2YXRlIG9iamVjdHM6e1tuYW1lOnN0cmluZ106QXJyYXk8YW55Pn0gPSB7fTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgcHVibGljIGNyZWF0ZSAoaW5mbzpFbnRpdHlJbmZvLCBvYmopOlByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RzW2luZm8uY29uZmlnLm5hbWVdID0gdGhpcy5vYmplY3RzW2luZm8uY29uZmlnLm5hbWVdIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5vYmplY3RzW2luZm8uY29uZmlnLm5hbWVdLnB1c2gob2JqKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSAoaW5mbzpFbnRpdHlJbmZvLCBvYmopOlByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluZEJ5S2V5KGluZm8sIG9iaikudGhlbigoZm91bmQpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIG5hbWUgaW4gZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRbbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlIChpbmZvOkVudGl0eUluZm8sIG9iaik6UHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKGluZm8pO1xuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1hdGNoZXNLZXkoaW5mbywgb2JqLCBjb2xsZWN0aW9uW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kIChpbmZvOkVudGl0eUluZm8sIGNyaXRlcmlhOk9iamVjdCkgOiBQcm9taXNlPEFycmF5PGFueT4+IHtcbiAgICAgICAgZnVuY3Rpb24gYWxsRmlsdGVyIChvYmopIDogYm9vbGVhbiB7cmV0dXJuIHRydWU7fVxuICAgICAgICBmdW5jdGlvbiBzdHJpY3RGaWx0ZXIgKG9iaikgOiBib29sZWFuIHtcbiAgICAgICAgICAgIGZvcih2YXIgbmFtZSBpbiBjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGlmKG9ialtuYW1lXSAhPSBjcml0ZXJpYVtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oaW5mbyksXG4gICAgICAgICAgICAgICAgZmlsdGVyIDogKGFueSkgPT4gYm9vbGVhbjtcbiAgICAgICAgICAgIGlmKGNyaXRlcmlhID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSBhbGxGaWx0ZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IHN0cmljdEZpbHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoY29sbGVjdGlvbi5maWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kQnlLZXkgKGluZm86RW50aXR5SW5mbywga2V5VmFsdWU6T2JqZWN0KSA6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uKGluZm8pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5tYXRjaGVzS2V5KGluZm8sIGtleVZhbHVlLCBjb2xsZWN0aW9uW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbGxlY3Rpb25baV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1hdGNoZXNLZXkgKGluZm86RW50aXR5SW5mbywgcmVmLCBjdXJyZW50KSA6IEJvb2xlYW4ge1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxpbmZvLmNvbmZpZy5rZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gaW5mby5jb25maWcua2V5W2ldO1xuICAgICAgICAgICAgaWYocmVmW25hbWVdICE9IGN1cnJlbnRbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb2xsZWN0aW9uIChpbmZvOiBFbnRpdHlJbmZvKSA6IEFycmF5PGFueT4ge1xuICAgICAgICBpZighdGhpcy5vYmplY3RzW2luZm8uY29uZmlnLm5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzW2luZm8uY29uZmlnLm5hbWVdO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=