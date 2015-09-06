var EntityRegistry = (function () {
    function EntityRegistry(entityContainer) {
        this.entityContainer = entityContainer;
    }
    EntityRegistry.prototype.registerEntity = function (entityConstructor, config, mapperConstructor) {
        this.entityContainer.registerEntity(config, entityConstructor, mapperConstructor);
    };
    EntityRegistry.prototype.getEntity = function (name) {
        return this.entityContainer.getEntity(name);
    };
    return EntityRegistry;
})();
exports.default = EntityRegistry;
