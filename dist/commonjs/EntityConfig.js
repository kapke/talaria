var EntityConfig = (function () {
    function EntityConfig(name, properties, key, dependencies) {
        if (key === void 0) { key = []; }
        if (dependencies === void 0) { dependencies = []; }
        this.name = name;
        this.properties = properties;
        this.key = key;
        this.dependencies = dependencies;
    }
    return EntityConfig;
})();
exports.default = EntityConfig;
