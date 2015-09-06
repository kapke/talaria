define(["require", "exports"], function (require, exports) {
    var EntityInfo = (function () {
        function EntityInfo(entity, config, mapper, dependencies) {
            if (dependencies === void 0) { dependencies = {}; }
            this.entity = entity;
            this.config = config;
            this.mapper = mapper;
            this.dependencies = dependencies;
        }
        return EntityInfo;
    })();
    exports.default = EntityInfo;
});
