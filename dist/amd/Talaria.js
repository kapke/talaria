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
        Object.defineProperty(Talaria.prototype, "DefaultStrategy", {
            get: function () {
                return this.defaultStrategy;
            },
            /*
                Probably this should be removed and moved setting default strategy
                should be done in constructor
             */
            set: function (value) {
                this.defaultStrategy = value;
                this.unitOfWork = new UnitOfWork(value);
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
        Talaria.EntityInfo = EntityInfo;
        Talaria.EntityConfig = EntityConfig;
        Talaria.Proxy = Proxy;
        Talaria.Repository = Repository;
        Talaria.UnitOfWork = UnitOfWork;
        return Talaria;
    })();
    return Talaria;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhbGFyaWEudHMiXSwibmFtZXMiOlsiVGFsYXJpYSIsIlRhbGFyaWEuY29uc3RydWN0b3IiLCJUYWxhcmlhLmdldEluc3RhbmNlIiwiVGFsYXJpYS5EZWZhdWx0U3RyYXRlZ3kiLCJUYWxhcmlhLkRlZmF1bHRVbml0T2ZXb3JrIiwiVGFsYXJpYS5yZWdpc3RlckVudGl0eSIsIlRhbGFyaWEuZ2V0RW50aXR5SW5mbyIsIlRhbGFyaWEuZ2V0UmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6ImtMQUFPLFlBQVksRUFDWixVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLEVBR1YsZ0JBQWdCO0lBRXZCLElBQU0sT0FBTztRQUFiQSxTQUFNQSxPQUFPQTtZQWdCREMsb0JBQWVBLEdBQXlCQSxJQUFJQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1lBQy9EQSxlQUFVQSxHQUFnQkEsSUFBSUEsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLGFBQVFBLEdBQWdDQSxFQUFFQSxDQUFDQTtZQUMzQ0EsaUJBQVlBLEdBQXFDQSxFQUFFQSxDQUFDQTtRQWlDaEVBLENBQUNBO1FBM0NpQkQsbUJBQVdBLEdBQXpCQTtZQUNJRSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkJBLE9BQU9BLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBO1lBQ3JDQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFPREYsc0JBQUlBLG9DQUFlQTtpQkFBbkJBO2dCQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTtZQUNoQ0EsQ0FBQ0E7WUFFREg7OztlQUdHQTtpQkFDSEEsVUFBb0JBLEtBQXlCQTtnQkFDekNHLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUM3QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDNUNBLENBQUNBOzs7V0FUQUg7UUFXREEsc0JBQUlBLHNDQUFpQkE7aUJBQXJCQTtnQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDM0JBLENBQUNBOzs7V0FBQUo7UUFFTUEsZ0NBQWNBLEdBQXJCQSxVQUF1QkEsV0FBZUEsRUFBRUEsTUFBbUJBO1lBQ3ZESyxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQSxXQUFXQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUNyRUEsQ0FBQ0E7UUFFTUwsK0JBQWFBLEdBQXBCQSxVQUFzQkEsSUFBV0E7WUFDN0JNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUVNTiwrQkFBYUEsR0FBcEJBLFVBQXlCQSxJQUFXQTtZQUNoQ08sRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFJQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtZQUNqSEEsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBbERhUCxrQkFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDeEJBLG9CQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtRQUM1QkEsYUFBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDZEEsa0JBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1FBQ3hCQSxrQkFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUErQzFDQSxjQUFDQTtJQUFEQSxDQXBEQSxBQW9EQ0EsSUFBQTtJQUVELEFBQWlCLE9BQVIsT0FBTyxDQUFDIiwiZmlsZSI6IlRhbGFyaWEuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fwa2UvcHJvamVjdHMvdGFsYXJpYS8iLCJzb3VyY2VzQ29udGVudCI6W119