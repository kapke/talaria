define(["require", "exports"], function (require, exports) {
    var Pointer = (function () {
        function Pointer(name, key) {
            this.name = name;
            this.key = key;
        }
        Object.defineProperty(Pointer.prototype, "Name", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pointer.prototype, "Key", {
            get: function () {
                return this.key;
            },
            enumerable: true,
            configurable: true
        });
        Pointer.prototype.toObject = function () {
            var data = {
                __type: 'pointer',
                __entity: this.name
            };
            for (var name_1 in this.key) {
                data[name_1] = this.key[name_1];
            }
            return data;
        };
        Pointer.fromObject = function (data) {
            var key = {}, name = data.__entity;
            for (var name_2 in data) {
                if (name_2.substr(0, 2) != '__') {
                    key[name_2] = data[name_2];
                }
            }
            return new Pointer(name, key);
        };
        return Pointer;
    })();
    exports.default = Pointer;
});
