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
        Talaria.prototype.registerEntity = function (constructor, config, mapper) {
            this.entities[config.name] = new EntityInfo_1.default(constructor, config, mapper);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhbGFyaWEudHMiXSwibmFtZXMiOlsiVGFsYXJpYSIsIlRhbGFyaWEuY29uc3RydWN0b3IiLCJUYWxhcmlhLmdldEluc3RhbmNlIiwiVGFsYXJpYS5EZWZhdWx0U3RyYXRlZ3kiLCJUYWxhcmlhLkRlZmF1bHRVbml0T2ZXb3JrIiwiVGFsYXJpYS5yZWdpc3RlckVudGl0eSIsIlRhbGFyaWEuZ2V0RW50aXR5SW5mbyIsIlRhbGFyaWEuZ2V0UmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6IjtJQXlEb0Isb0JBQVksMEJBekRVO0lBeURsQyxrQkFBVSx3QkF4RG9CO0lBd0RHLGtCQUFVLHdCQXZEYjtJQXVESixhQUFLLG1CQXREWDtJQXNEeUIsa0JBQVUsd0JBckR6QjtJQUt0QztRQUFBQTtZQVVZQyxvQkFBZUEsR0FBeUJBLElBQUlBLDBCQUFnQkEsRUFBRUEsQ0FBQ0E7WUFDL0RBLGVBQVVBLEdBQWdCQSxJQUFJQSxvQkFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLGFBQVFBLEdBQXFDQSxFQUFFQSxDQUFDQTtZQUNoREEsaUJBQVlBLEdBQXFDQSxFQUFFQSxDQUFDQTtRQWlDaEVBLENBQUNBO1FBM0NpQkQsbUJBQVdBLEdBQXpCQTtZQUNJRSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkJBLE9BQU9BLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBO1lBQ3JDQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFPREYsc0JBQUlBLG9DQUFlQTtpQkFBbkJBO2dCQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTtZQUNoQ0EsQ0FBQ0E7WUFFREg7OztlQUdHQTtpQkFDSEEsVUFBb0JBLEtBQXlCQTtnQkFDekNHLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUM3QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsb0JBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQzVDQSxDQUFDQTs7O1dBVEFIO1FBV0RBLHNCQUFJQSxzQ0FBaUJBO2lCQUFyQkE7Z0JBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1lBQzNCQSxDQUFDQTs7O1dBQUFKO1FBRU1BLGdDQUFjQSxHQUFyQkEsVUFBMEJBLFdBQWVBLEVBQUVBLE1BQW1CQSxFQUFFQSxNQUFnQkE7WUFDNUVLLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLG9CQUFVQSxDQUFJQSxXQUFXQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUNoRkEsQ0FBQ0E7UUFFTUwsK0JBQWFBLEdBQXBCQSxVQUFzQkEsSUFBV0E7WUFDN0JNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUVNTiwrQkFBYUEsR0FBcEJBLFVBQXlCQSxJQUFXQTtZQUNoQ08sRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxvQkFBVUEsQ0FBSUEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7WUFDakhBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ25DQSxDQUFDQTtRQUNMUCxjQUFDQTtJQUFEQSxDQTlDQSxBQThDQ0EsSUFBQTtJQTlDRCx5QkE4Q0MsQ0FBQTtJQUU2RiIsImZpbGUiOiJUYWxhcmlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVudGl0eUNvbmZpZyBmcm9tICcuL0VudGl0eUNvbmZpZyc7XG5pbXBvcnQgRW50aXR5SW5mbyBmcm9tICcuL0VudGl0eUluZm8nO1xuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSAnLi9SZXBvc2l0b3J5JztcbmltcG9ydCBQcm94eSBmcm9tICcuL1Byb3h5JztcbmltcG9ydCBVbml0T2ZXb3JrIGZyb20gJy4vVW5pdE9mV29yayc7XG5pbXBvcnQge1BlcnNpc3RlbmNlU3RyYXRlZ3l9IGZyb20gJy4vUGVyc2lzdGVuY2VTdHJhdGVneSc7XG5pbXBvcnQgSW5NZW1vcnlTdHJhdGVneSBmcm9tICcuL1BlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneSc7XG5pbXBvcnQge01hcHBlcn0gZnJvbSAnLi9NYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWxhcmlhIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZSA6IFRhbGFyaWE7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlICgpIDogVGFsYXJpYSB7XG4gICAgICAgIGlmKCFUYWxhcmlhLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBUYWxhcmlhLmluc3RhbmNlID0gbmV3IFRhbGFyaWEoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVGFsYXJpYS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmF1bHRTdHJhdGVneSA6IFBlcnNpc3RlbmNlU3RyYXRlZ3kgPSBuZXcgSW5NZW1vcnlTdHJhdGVneSgpO1xuICAgIHByaXZhdGUgdW5pdE9mV29yayA6IFVuaXRPZldvcmsgPSBuZXcgVW5pdE9mV29yayh0aGlzLmRlZmF1bHRTdHJhdGVneSk7XG4gICAgcHJpdmF0ZSBlbnRpdGllcyA6IHtbbmFtZTpzdHJpbmddOkVudGl0eUluZm88YW55Pn0gPSB7fTtcbiAgICBwcml2YXRlIHJlcG9zaXRvcmllcyA6IHtbbmFtZTpzdHJpbmddOlJlcG9zaXRvcnk8YW55Pn0gPSB7fTtcblxuICAgIGdldCBEZWZhdWx0U3RyYXRlZ3koKTpQZXJzaXN0ZW5jZVN0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFN0cmF0ZWd5O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFByb2JhYmx5IHRoaXMgc2hvdWxkIGJlIHJlbW92ZWQgYW5kIHNldHRpbmcgZGVmYXVsdCBzdHJhdGVneVxuICAgICAgICBzaG91bGQgYmUgZG9uZSBpbiBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHNldCBEZWZhdWx0U3RyYXRlZ3kodmFsdWU6UGVyc2lzdGVuY2VTdHJhdGVneSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRTdHJhdGVneSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVuaXRPZldvcmsgPSBuZXcgVW5pdE9mV29yayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IERlZmF1bHRVbml0T2ZXb3JrKCk6VW5pdE9mV29yayB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXRPZldvcms7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRW50aXR5PFQ+IChjb25zdHJ1Y3RvcjphbnksIGNvbmZpZzpFbnRpdHlDb25maWcsIG1hcHBlcjpNYXBwZXI8VD4pIHtcbiAgICAgICAgdGhpcy5lbnRpdGllc1tjb25maWcubmFtZV0gPSBuZXcgRW50aXR5SW5mbzxUPihjb25zdHJ1Y3RvciwgY29uZmlnLCBtYXBwZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbnRpdHlJbmZvIChuYW1lOnN0cmluZykgOiBFbnRpdHlJbmZvPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllc1tuYW1lXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVwb3NpdG9yeTxUPiAobmFtZTpzdHJpbmcpIDogUmVwb3NpdG9yeTxUPiB7XG4gICAgICAgIGlmKCF0aGlzLnJlcG9zaXRvcmllc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3JpZXNbbmFtZV0gPSBuZXcgUmVwb3NpdG9yeTxUPih0aGlzLmdldEVudGl0eUluZm8obmFtZSksIHRoaXMudW5pdE9mV29yaywgdGhpcy5kZWZhdWx0U3RyYXRlZ3kpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcmllc1tuYW1lXTtcbiAgICB9XG59XG5cbmV4cG9ydCB7RW50aXR5SW5mbywgRW50aXR5Q29uZmlnLCBQcm94eSwgUmVwb3NpdG9yeSwgVW5pdE9mV29yaywgUGVyc2lzdGVuY2VTdHJhdGVneSwgTWFwcGVyfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=