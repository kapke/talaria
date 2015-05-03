define(["require", "exports", './EntityConfig', './EntityInfo', './Repository', './Proxy', './UnitOfWork', './PersistenceStrategy/InMemoryStrategy'], function (require, exports, EntityConfig, EntityInfo, Repository, Proxy, UnitOfWork, InMemoryStrategy) {
    var Talaria = (function () {
        function Talaria() {
            this.defaultStrategy = new InMemoryStrategy();
            this.unitOfWork = new UnitOfWork(this.defaultStrategy);
            this.entities = {};
            this.repositories = {};
        }
        Talaria.getInstance = function () {
            if (!Talaria.instance) {
                Talaria.instance = new Talaria();
            }
            return Talaria.instance;
        };
        Talaria.prototype.registerEntity = function (constructor, config) {
            this.entities[config.name] = new EntityInfo(constructor, config);
        };
        Talaria.prototype.getEntityInfo = function (name) {
            return this.entities[name];
        };
        Talaria.prototype.getRepository = function (name) {
            if (!this.repositories[name]) {
                this.repositories[name] = new Repository(this.getEntityInfo(name), this.unitOfWork, this.defaultStrategy);
            }
            return this.repositories[name];
        };
        Talaria.prototype.setDefaultStrategy = function (strategy) {
            this.defaultStrategy = strategy;
            this.unitOfWork = new UnitOfWork(strategy);
        };
        Talaria.prototype.getDefaultStrategy = function () {
            return this.defaultStrategy;
        };
        Talaria.prototype.getDefaultUnitOfWork = function () {
            return this.unitOfWork;
        };
        Talaria.EntityInfo = EntityInfo;
        Talaria.EntityConfig = EntityConfig;
        Talaria.Proxy = Proxy;
        Talaria.Repository = Repository;
        Talaria.UnitOfWork = UnitOfWork;
        return Talaria;
    })();
    return Talaria;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhbGFyaWEudHMiXSwibmFtZXMiOlsiVGFsYXJpYSIsIlRhbGFyaWEuY29uc3RydWN0b3IiLCJUYWxhcmlhLmdldEluc3RhbmNlIiwiVGFsYXJpYS5yZWdpc3RlckVudGl0eSIsIlRhbGFyaWEuZ2V0RW50aXR5SW5mbyIsIlRhbGFyaWEuZ2V0UmVwb3NpdG9yeSIsIlRhbGFyaWEuc2V0RGVmYXVsdFN0cmF0ZWd5IiwiVGFsYXJpYS5nZXREZWZhdWx0U3RyYXRlZ3kiLCJUYWxhcmlhLmdldERlZmF1bHRVbml0T2ZXb3JrIl0sIm1hcHBpbmdzIjoia0xBQU8sWUFBWSxFQUNaLFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLFVBQVUsRUFHVixnQkFBZ0I7SUFFdkIsSUFBTSxPQUFPO1FBQWJBLFNBQU1BLE9BQU9BO1lBZ0JEQyxvQkFBZUEsR0FBeUJBLElBQUlBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7WUFDL0RBLGVBQVVBLEdBQWdCQSxJQUFJQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtZQUMvREEsYUFBUUEsR0FBZ0NBLEVBQUVBLENBQUNBO1lBQzNDQSxpQkFBWUEsR0FBcUNBLEVBQUVBLENBQUNBO1FBNkJoRUEsQ0FBQ0E7UUF2Q2lCRCxtQkFBV0EsR0FBekJBO1lBQ0lFLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuQkEsT0FBT0EsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsT0FBT0EsRUFBRUEsQ0FBQ0E7WUFDckNBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBO1FBQzVCQSxDQUFDQTtRQU9NRixnQ0FBY0EsR0FBckJBLFVBQXVCQSxXQUFlQSxFQUFFQSxNQUFtQkE7WUFDdkRHLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLFVBQVVBLENBQUNBLFdBQVdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3JFQSxDQUFDQTtRQUVNSCwrQkFBYUEsR0FBcEJBLFVBQXNCQSxJQUFXQTtZQUM3QkksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBRU1KLCtCQUFhQSxHQUFwQkEsVUFBeUJBLElBQVdBO1lBQ2hDSyxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMUJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLFVBQVVBLENBQUlBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1lBQ2pIQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNuQ0EsQ0FBQ0E7UUFFTUwsb0NBQWtCQSxHQUF6QkEsVUFBMkJBLFFBQThCQTtZQUNyRE0sSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDaENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQy9DQSxDQUFDQTtRQUVNTixvQ0FBa0JBLEdBQXpCQTtZQUNJTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTtRQUNoQ0EsQ0FBQ0E7UUFFTVAsc0NBQW9CQSxHQUEzQkE7WUFDSVEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBOUNhUixrQkFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDeEJBLG9CQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtRQUM1QkEsYUFBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDZEEsa0JBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1FBQ3hCQSxrQkFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUEyQzFDQSxjQUFDQTtJQUFEQSxDQWhEQSxBQWdEQ0EsSUFBQTtJQUVELEFBQWlCLE9BQVIsT0FBTyxDQUFDIiwiZmlsZSI6IlRhbGFyaWEuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fwa2UvcHJvamVjdHMvdGFsYXJpYS8iLCJzb3VyY2VzQ29udGVudCI6W119