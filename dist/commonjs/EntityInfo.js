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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntityInfo;
