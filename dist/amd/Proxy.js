define(["require", "exports"], function (require, exports) {
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
    return Proxy;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3h5LnRzIl0sIm5hbWVzIjpbIlByb3h5IiwiUHJveHkuY29uc3RydWN0b3IiLCJQcm94eS5jb25zdHJ1Y3Rvci5kZWZpbmVQcm9wZXJ0aWVzIiwiUHJveHkuY29uc3RydWN0b3IuZGVmaW5lUHJvcGVydGllcy5zaW1wbGVHZXR0ZXIiLCJQcm94eS5jb25zdHJ1Y3Rvci5kZWZpbmVQcm9wZXJ0aWVzLnNpbXBsZVNldHRlciJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQU0sS0FBSztRQUNQQSxTQURFQSxLQUFLQSxDQUNNQSxHQUFHQSxFQUFFQSxTQUFTQTtZQUN2QkMsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFFaEJBLFNBQVNBLGdCQUFnQkE7Z0JBQ3JCQyxTQUFTQSxZQUFZQSxDQUFFQSxJQUFJQTtvQkFDdkJDLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBRURELFNBQVNBLFlBQVlBLENBQUVBLElBQUlBLEVBQUVBLEtBQUtBO29CQUM5QkUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFFREYsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxJQUFJQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUNoQ0EsTUFBTUEsR0FBR0EsU0FBU0EsRUFBRUEsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBRTNDQSxNQUFNQSxHQUFHQSxDQUFDQTt3QkFDTkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2RBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBO3dCQUN4QkEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUNKQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDeENBLENBQUNBO29CQUNMQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDTEEsTUFBTUEsR0FBR0EsQ0FBQ0E7d0JBQ05BLEVBQUVBLENBQUFBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUNkQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQTt3QkFDeEJBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDSkEsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3hDQSxDQUFDQTtvQkFDTEEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBRUxBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBO3dCQUM5QkEsWUFBWUEsRUFBRUEsS0FBS0E7d0JBQ25CQSxVQUFVQSxFQUFFQSxJQUFJQTt3QkFDaEJBLEdBQUdBLEVBQUVBLE1BQU1BO3dCQUNYQSxHQUFHQSxFQUFFQSxNQUFNQTtxQkFDZEEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO1lBQ0xBLENBQUNBO1lBQ0RELGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBQ0xELFlBQUNBO0lBQURBLENBMUNBLEFBMENDQSxJQUFBO0lBRUQsQUFBZSxPQUFOLEtBQUssQ0FBQyIsImZpbGUiOiJQcm94eS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9rYXBrZS9wcm9qZWN0cy90YWxhcmlhLyIsInNvdXJjZXNDb250ZW50IjpbXX0=