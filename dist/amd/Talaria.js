define(["require", "exports", './EntityConfig', './EntityInfo', './Repository', './Proxy', './UnitOfWork', './PersistenceStrategy/InMemoryStrategy', './EntityRegistry', './EntityContainer'], function (require, exports, EntityConfig_1, EntityInfo_1, Repository_1, Proxy_1, UnitOfWork_1, InMemoryStrategy_1, EntityRegistry_1, EntityContainer_1) {
    exports.EntityConfig = EntityConfig_1.default;
    exports.EntityInfo = EntityInfo_1.default;
    exports.Repository = Repository_1.default;
    exports.Proxy = Proxy_1.default;
    exports.UnitOfWork = UnitOfWork_1.default;
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Talaria;
});
