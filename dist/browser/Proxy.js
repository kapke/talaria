(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Proxy = (function () {
    function Proxy(obj, accessors) {
        var that = this;
        function defineProperties() {
            function simpleGetter(name) {
                return this[name];
            }
            function simpleSetter(name, value) {
                this[name] = value;
            }
            for (var name in obj) {
                var property = accessors[name] || {}, getter = undefined, setter = undefined;
                getter = (function () {
                    if (property.get) {
                        return property.get;
                    }
                    else {
                        return simpleGetter.bind(obj, name);
                    }
                })();
                setter = (function () {
                    if (property.set) {
                        return property.set;
                    }
                    else {
                        return simpleSetter.bind(obj, name);
                    }
                })();
                Object.defineProperty(that, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter,
                    set: setter
                });
            }
        }
        defineProperties();
    }
    return Proxy;
})();
module.exports = Proxy;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3h5LnRzIl0sIm5hbWVzIjpbIlByb3h5IiwiUHJveHkuY29uc3RydWN0b3IiLCJQcm94eS5jb25zdHJ1Y3Rvci5kZWZpbmVQcm9wZXJ0aWVzIiwiUHJveHkuY29uc3RydWN0b3IuZGVmaW5lUHJvcGVydGllcy5zaW1wbGVHZXR0ZXIiLCJQcm94eS5jb25zdHJ1Y3Rvci5kZWZpbmVQcm9wZXJ0aWVzLnNpbXBsZVNldHRlciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLO0lBQ1BBLFNBREVBLEtBQUtBLENBQ01BLEdBQUdBLEVBQUVBLFNBQVNBO1FBQ3ZCQyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVoQkEsU0FBU0EsZ0JBQWdCQTtZQUNyQkMsU0FBU0EsWUFBWUEsQ0FBRUEsSUFBSUE7Z0JBQ3ZCQyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN0QkEsQ0FBQ0E7WUFFREQsU0FBU0EsWUFBWUEsQ0FBRUEsSUFBSUEsRUFBRUEsS0FBS0E7Z0JBQzlCRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUN2QkEsQ0FBQ0E7WUFFREYsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxJQUFJQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUNoQ0EsTUFBTUEsR0FBR0EsU0FBU0EsRUFBRUEsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0E7Z0JBRTNDQSxNQUFNQSxHQUFHQSxDQUFDQTtvQkFDTkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2RBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBO29CQUN4QkEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNKQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDeENBLENBQUNBO2dCQUNMQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsQ0FBQ0E7b0JBQ05BLEVBQUVBLENBQUFBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO3dCQUNkQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQTtvQkFDeEJBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hDQSxDQUFDQTtnQkFDTEEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBRUxBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBO29CQUM5QkEsWUFBWUEsRUFBRUEsS0FBS0E7b0JBQ25CQSxVQUFVQSxFQUFFQSxJQUFJQTtvQkFDaEJBLEdBQUdBLEVBQUVBLE1BQU1BO29CQUNYQSxHQUFHQSxFQUFFQSxNQUFNQTtpQkFDZEEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFDREQsZ0JBQWdCQSxFQUFFQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFDTEQsWUFBQ0E7QUFBREEsQ0ExQ0EsQUEwQ0NBLElBQUE7QUFFRCxBQUFlLGlCQUFOLEtBQUssQ0FBQyIsImZpbGUiOiJQcm94eS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9rYXBrZS9wcm9qZWN0cy90YWxhcmlhLyIsInNvdXJjZXNDb250ZW50IjpbXX0=