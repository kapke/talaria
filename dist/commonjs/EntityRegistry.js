var EntityInfo_1 = require('./EntityInfo');
var EntityRegistry = (function () {
    function EntityRegistry(mapperContainer) {
        this.mapperContainer = mapperContainer;
        this.registry = {};
    }
    EntityRegistry.prototype.registerEntity = function (constructor, config, mapperKlass) {
        this.mapperContainer.registerMapper(config.name, config.dependencies, mapperKlass);
        this.registry[config.name] = {
            resolved: false,
            info: null,
            data: {
                constructor: constructor,
                config: config,
                mapperKlass: mapperKlass
            }
        };
    };
    EntityRegistry.prototype.getEntity = function (name) {
        var item = this.registry[name];
        if (!item.resolved) {
            this.tryResolve(name);
        }
        return item.info;
    };
    EntityRegistry.prototype.tryResolve = function (name) {
        var mapper = this.mapperContainer.getMapper(name), item = this.registry[name];
        item.info = new EntityInfo_1.default(item.data.constructor, item.data.config, mapper);
    };
    return EntityRegistry;
})();
exports.default = EntityRegistry;
