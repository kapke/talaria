define(["require", "exports", './EntityConfig', './EntityInfo', './Repository', './Proxy', './UnitOfWork', './PersistenceStrategy/InMemoryStrategy'], function (require, exports, EntityConfig_1, EntityInfo_1, Repository_1, Proxy_1, UnitOfWork_1, InMemoryStrategy_1) {
    exports.EntityConfig = EntityConfig_1.default;
    exports.EntityInfo = EntityInfo_1.default;
    exports.Repository = Repository_1.default;
    exports.Proxy = Proxy_1.default;
    exports.UnitOfWork = UnitOfWork_1.default;
    var Talaria = (function () {
        function Talaria() {
            this.defaultStrategy = new InMemoryStrategy_1.default();
            this.unitOfWork = new UnitOfWork_1.default(this.defaultStrategy);
            this.entities = {};
            this.repositories = {};
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
                should be done in constructor
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
        Talaria.prototype.registerEntity = function (constructor, config) {
            this.entities[config.name] = new EntityInfo_1.default(constructor, config);
        };
        Talaria.prototype.getEntityInfo = function (name) {
            return this.entities[name];
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
});
