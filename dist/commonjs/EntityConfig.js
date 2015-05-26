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
