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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhbGFyaWEudHMiXSwibmFtZXMiOlsiVGFsYXJpYSIsIlRhbGFyaWEuY29uc3RydWN0b3IiLCJUYWxhcmlhLmdldEluc3RhbmNlIiwiVGFsYXJpYS5EZWZhdWx0U3RyYXRlZ3kiLCJUYWxhcmlhLkRlZmF1bHRVbml0T2ZXb3JrIiwiVGFsYXJpYS5yZWdpc3RlckVudGl0eSIsIlRhbGFyaWEuZ2V0RW50aXR5SW5mbyIsIlRhbGFyaWEuZ2V0UmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6IjtJQXdEb0Isb0JBQVksMEJBeERVO0lBd0RsQyxrQkFBVSx3QkF2RG9CO0lBdURHLGtCQUFVLHdCQXREYjtJQXNESixhQUFLLG1CQXJEWDtJQXFEeUIsa0JBQVUsd0JBcER6QjtJQUl0QztRQUFBQTtZQVVZQyxvQkFBZUEsR0FBeUJBLElBQUlBLDBCQUFnQkEsRUFBRUEsQ0FBQ0E7WUFDL0RBLGVBQVVBLEdBQWdCQSxJQUFJQSxvQkFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7WUFDL0RBLGFBQVFBLEdBQWdDQSxFQUFFQSxDQUFDQTtZQUMzQ0EsaUJBQVlBLEdBQXFDQSxFQUFFQSxDQUFDQTtRQWlDaEVBLENBQUNBO1FBM0NpQkQsbUJBQVdBLEdBQXpCQTtZQUNJRSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkJBLE9BQU9BLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLE9BQU9BLEVBQUVBLENBQUNBO1lBQ3JDQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFPREYsc0JBQUlBLG9DQUFlQTtpQkFBbkJBO2dCQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTtZQUNoQ0EsQ0FBQ0E7WUFFREg7OztlQUdHQTtpQkFDSEEsVUFBb0JBLEtBQXlCQTtnQkFDekNHLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUM3QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsb0JBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQzVDQSxDQUFDQTs7O1dBVEFIO1FBV0RBLHNCQUFJQSxzQ0FBaUJBO2lCQUFyQkE7Z0JBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO1lBQzNCQSxDQUFDQTs7O1dBQUFKO1FBRU1BLGdDQUFjQSxHQUFyQkEsVUFBdUJBLFdBQWVBLEVBQUVBLE1BQW1CQTtZQUN2REssSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsb0JBQVVBLENBQUNBLFdBQVdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3JFQSxDQUFDQTtRQUVNTCwrQkFBYUEsR0FBcEJBLFVBQXNCQSxJQUFXQTtZQUM3Qk0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBRU1OLCtCQUFhQSxHQUFwQkEsVUFBeUJBLElBQVdBO1lBQ2hDTyxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMUJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLG9CQUFVQSxDQUFJQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtZQUNqSEEsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBQ0xQLGNBQUNBO0lBQURBLENBOUNBLEFBOENDQSxJQUFBO0lBOUNELHlCQThDQyxDQUFBO0lBRWdFIiwiZmlsZSI6IlRhbGFyaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW50aXR5Q29uZmlnIGZyb20gJy4vRW50aXR5Q29uZmlnJztcbmltcG9ydCBFbnRpdHlJbmZvIGZyb20gJy4vRW50aXR5SW5mbyc7XG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tICcuL1JlcG9zaXRvcnknO1xuaW1wb3J0IFByb3h5IGZyb20gJy4vUHJveHknO1xuaW1wb3J0IFVuaXRPZldvcmsgZnJvbSAnLi9Vbml0T2ZXb3JrJztcbmltcG9ydCB7UGVyc2lzdGVuY2VTdHJhdGVneX0gZnJvbSAnLi9QZXJzaXN0ZW5jZVN0cmF0ZWd5JztcbmltcG9ydCBJbk1lbW9yeVN0cmF0ZWd5IGZyb20gJy4vUGVyc2lzdGVuY2VTdHJhdGVneS9Jbk1lbW9yeVN0cmF0ZWd5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFsYXJpYSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgOiBUYWxhcmlhO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSA6IFRhbGFyaWEge1xuICAgICAgICBpZighVGFsYXJpYS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVGFsYXJpYS5pbnN0YW5jZSA9IG5ldyBUYWxhcmlhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRhbGFyaWEuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWZhdWx0U3RyYXRlZ3kgOiBQZXJzaXN0ZW5jZVN0cmF0ZWd5ID0gbmV3IEluTWVtb3J5U3RyYXRlZ3koKTtcbiAgICBwcml2YXRlIHVuaXRPZldvcmsgOiBVbml0T2ZXb3JrID0gbmV3IFVuaXRPZldvcmsodGhpcy5kZWZhdWx0U3RyYXRlZ3kpO1xuICAgIHByaXZhdGUgZW50aXRpZXMgOiB7W25hbWU6c3RyaW5nXTpFbnRpdHlJbmZvfSA9IHt9O1xuICAgIHByaXZhdGUgcmVwb3NpdG9yaWVzIDoge1tuYW1lOnN0cmluZ106UmVwb3NpdG9yeTxhbnk+fSA9IHt9O1xuXG4gICAgZ2V0IERlZmF1bHRTdHJhdGVneSgpOlBlcnNpc3RlbmNlU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0U3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUHJvYmFibHkgdGhpcyBzaG91bGQgYmUgcmVtb3ZlZCBhbmQgc2V0dGluZyBkZWZhdWx0IHN0cmF0ZWd5XG4gICAgICAgIHNob3VsZCBiZSBkb25lIGluIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgc2V0IERlZmF1bHRTdHJhdGVneSh2YWx1ZTpQZXJzaXN0ZW5jZVN0cmF0ZWd5KSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0cmF0ZWd5ID0gdmFsdWU7XG4gICAgICAgIHRoaXMudW5pdE9mV29yayA9IG5ldyBVbml0T2ZXb3JrKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgRGVmYXVsdFVuaXRPZldvcmsoKTpVbml0T2ZXb3JrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pdE9mV29yaztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFbnRpdHkgKGNvbnN0cnVjdG9yOmFueSwgY29uZmlnOkVudGl0eUNvbmZpZykge1xuICAgICAgICB0aGlzLmVudGl0aWVzW2NvbmZpZy5uYW1lXSA9IG5ldyBFbnRpdHlJbmZvKGNvbnN0cnVjdG9yLCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbnRpdHlJbmZvIChuYW1lOnN0cmluZykgOiBFbnRpdHlJbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNbbmFtZV07XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlcG9zaXRvcnk8VD4gKG5hbWU6c3RyaW5nKSA6IFJlcG9zaXRvcnk8VD4ge1xuICAgICAgICBpZighdGhpcy5yZXBvc2l0b3JpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yaWVzW25hbWVdID0gbmV3IFJlcG9zaXRvcnk8VD4odGhpcy5nZXRFbnRpdHlJbmZvKG5hbWUpLCB0aGlzLnVuaXRPZldvcmssIHRoaXMuZGVmYXVsdFN0cmF0ZWd5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3JpZXNbbmFtZV07XG4gICAgfVxufVxuXG5leHBvcnQge0VudGl0eUluZm8sIEVudGl0eUNvbmZpZywgUHJveHksIFJlcG9zaXRvcnksIFVuaXRPZldvcmt9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==