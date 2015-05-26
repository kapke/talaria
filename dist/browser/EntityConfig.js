(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EntityConfig = (function () {
    function EntityConfig(name, properties, key) {
        if (key === void 0) { key = []; }
        this.name = name;
        this.properties = properties;
        this.key = key;
    }
    return EntityConfig;
})();
exports.default = EntityConfig;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVudGl0eUNvbmZpZy50cyJdLCJuYW1lcyI6WyJFbnRpdHlDb25maWciLCJFbnRpdHlDb25maWcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0lBS0lBLHNCQUFvQkEsSUFBV0EsRUFBRUEsVUFBMEJBLEVBQUVBLEdBQXNCQTtRQUF0QkMsbUJBQXNCQSxHQUF0QkEsUUFBc0JBO1FBQy9FQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO0lBQ25CQSxDQUFDQTtJQUNMRCxtQkFBQ0E7QUFBREEsQ0FWQSxBQVVDQSxJQUFBO0FBRUQsa0JBQWUsWUFBWSxDQUFDIiwiZmlsZSI6IkVudGl0eUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVudGl0eUNvbmZpZyB7XG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzIDogQXJyYXk8c3RyaW5nPjtcbiAgICBwdWJsaWMga2V5IDogQXJyYXk8c3RyaW5nPjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAobmFtZTpzdHJpbmcsIHByb3BlcnRpZXMgOiBBcnJheTxzdHJpbmc+LCBrZXk6QXJyYXk8c3RyaW5nPiA9IFtdKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5Q29uZmlnOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==