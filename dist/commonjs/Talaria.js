var EntityConfig_1 = require('./EntityConfig');
exports.EntityConfig = EntityConfig_1.default;
var EntityInfo_1 = require('./EntityInfo');
exports.EntityInfo = EntityInfo_1.default;
var Repository_1 = require('./Repository');
exports.Repository = Repository_1.default;
var Proxy_1 = require('./Proxy');
exports.Proxy = Proxy_1.default;
var UnitOfWork_1 = require('./UnitOfWork');
exports.UnitOfWork = UnitOfWork_1.default;
var InMemoryStrategy_1 = require('./PersistenceStrategy/InMemoryStrategy');
var EntityRegistry_1 = require('./EntityRegistry');
var EntityContainer_1 = require('./EntityContainer');
var Talaria = (function () {
    function Talaria() {
        this.defaultStrategy = new InMemoryStrategy_1.default();
        this.unitOfWork = new UnitOfWork_1.default(this.defaultStrategy);
        this.repositories = {};
        this.registry = new EntityRegistry_1.default(new EntityContainer_1.default());
    }
    Talaria.getInstance = function () {
        if (!Talaria.instance) {
            Talaria.instance = new Talaria();
        }
        return Talaria.instance;
    };
    Object.defineProperty(Talaria.prototype, "DefaultStrategy", {
        get: function () {
            return this.defaultStrategy;
        },
        /*
            Probably this should be removed and setting default strategy
            should be done using constructor
         */
        set: function (value) {
            this.defaultStrategy = value;
            this.unitOfWork = new UnitOfWork_1.default(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Talaria.prototype, "DefaultUnitOfWork", {
        get: function () {
            return this.unitOfWork;
        },
        enumerable: true,
        configurable: true
    });
    Talaria.prototype.registerEntity = function (constructor, config, mapperConstructor) {
        this.registry.registerEntity(constructor, config, mapperConstructor);
    };
    Talaria.prototype.getEntityInfo = function (name) {
        return this.registry.getEntity(name);
    };
    Talaria.prototype.getRepository = function (name) {
        if (!this.repositories[name]) {
            this.repositories[name] = new Repository_1.default(this.getEntityInfo(name), this.unitOfWork, this.defaultStrategy);
        }
        return this.repositories[name];
    };
    return Talaria;
})();
exports.default = Talaria;
