var EntityConfig = require('./EntityConfig');
var EntityInfo = require('./EntityInfo');
var Repository = require('./Repository');
var Proxy = require('./Proxy');
var UnitOfWork = require('./UnitOfWork');
var InMemoryStrategy = require('./PersistenceStrategy/InMemoryStrategy');
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
module.exports = Talaria;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhbGFyaWEudHMiXSwibmFtZXMiOlsiVGFsYXJpYSIsIlRhbGFyaWEuY29uc3RydWN0b3IiLCJUYWxhcmlhLmdldEluc3RhbmNlIiwiVGFsYXJpYS5EZWZhdWx0U3RyYXRlZ3kiLCJUYWxhcmlhLkRlZmF1bHRVbml0T2ZXb3JrIiwiVGFsYXJpYS5yZWdpc3RlckVudGl0eSIsIlRhbGFyaWEuZ2V0RW50aXR5SW5mbyIsIlRhbGFyaWEuZ2V0UmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxZQUFZLFdBQVcsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRCxJQUFPLFVBQVUsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUM1QyxJQUFPLFVBQVUsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUM1QyxJQUFPLEtBQUssV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNsQyxJQUFPLFVBQVUsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUc1QyxJQUFPLGdCQUFnQixXQUFXLHdDQUF3QyxDQUFDLENBQUM7QUFFNUUsSUFBTSxPQUFPO0lBQWJBLFNBQU1BLE9BQU9BO1FBZ0JEQyxvQkFBZUEsR0FBeUJBLElBQUlBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDL0RBLGVBQVVBLEdBQWdCQSxJQUFJQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUMvREEsYUFBUUEsR0FBZ0NBLEVBQUVBLENBQUNBO1FBQzNDQSxpQkFBWUEsR0FBcUNBLEVBQUVBLENBQUNBO0lBaUNoRUEsQ0FBQ0E7SUEzQ2lCRCxtQkFBV0EsR0FBekJBO1FBQ0lFLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ25CQSxPQUFPQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUNyQ0EsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBT0RGLHNCQUFJQSxvQ0FBZUE7YUFBbkJBO1lBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBO1FBQ2hDQSxDQUFDQTtRQUVESDs7O1dBR0dBO2FBQ0hBLFVBQW9CQSxLQUF5QkE7WUFDekNHLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLEtBQUtBLENBQUNBO1lBQzdCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM1Q0EsQ0FBQ0E7OztPQVRBSDtJQVdEQSxzQkFBSUEsc0NBQWlCQTthQUFyQkE7WUFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDM0JBLENBQUNBOzs7T0FBQUo7SUFFTUEsZ0NBQWNBLEdBQXJCQSxVQUF1QkEsV0FBZUEsRUFBRUEsTUFBbUJBO1FBQ3ZESyxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQSxXQUFXQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUNyRUEsQ0FBQ0E7SUFFTUwsK0JBQWFBLEdBQXBCQSxVQUFzQkEsSUFBV0E7UUFDN0JNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQy9CQSxDQUFDQTtJQUVNTiwrQkFBYUEsR0FBcEJBLFVBQXlCQSxJQUFXQTtRQUNoQ08sRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLFVBQVVBLENBQUlBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ2pIQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFsRGFQLGtCQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtJQUN4QkEsb0JBQVlBLEdBQUdBLFlBQVlBLENBQUNBO0lBQzVCQSxhQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUNkQSxrQkFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7SUFDeEJBLGtCQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtJQStDMUNBLGNBQUNBO0FBQURBLENBcERBLEFBb0RDQSxJQUFBO0FBRUQsQUFBaUIsaUJBQVIsT0FBTyxDQUFDIiwiZmlsZSI6IlRhbGFyaWEuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2Fwa2UvcHJvamVjdHMvdGFsYXJpYS8iLCJzb3VyY2VzQ29udGVudCI6W119