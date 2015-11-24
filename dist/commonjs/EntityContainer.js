var EntityNotAvailableError_1 = require('./Error/EntityNotAvailableError');
var EntityInfo_1 = require('./EntityInfo');
var EntityContainer = (function () {
    function EntityContainer() {
        this.resolved = {};
        this.waiting = {};
        this.unresolvedDependencies = {};
    }
    EntityContainer.prototype.registerEntity = function (config, entityConstructor, mapperConstructor) {
        var item = this.createItem(config, entityConstructor, mapperConstructor);
        this.registerUsingItem(item);
    };
    EntityContainer.prototype.getEntity = function (name) {
        if (this.resolved[name]) {
            return this.resolved[name].info;
        }
        else {
            throw new EntityNotAvailableError_1.default(name);
        }
    };
    EntityContainer.prototype.isRegistered = function (name) {
        return this.resolved[name] ? true : false;
    };
    EntityContainer.prototype.checkDependencies = function (dependencies) {
        for (var i = 0; i < dependencies.length; i++) {
            if (!this.isRegistered(dependencies[i])) {
                return false;
            }
        }
        return true;
    };
    EntityContainer.prototype.registerResolved = function (item) {
        this.resolved[item.name] = this.resolveItem(item);
    };
    EntityContainer.prototype.registerWaiting = function (item) {
        var _this = this;
        this.waiting[item.name] = item;
        item.dependencies.forEach(function (dependency) {
            if (!_this.isRegistered(dependency)) {
                _this.registerUnresolvedDependency(dependency, item.name);
            }
        });
    };
    EntityContainer.prototype.registerUsingItem = function (item) {
        if (this.checkDependencies(item.dependencies)) {
            this.registerResolved(item);
            this.resolveDependants(item.name);
        }
        else {
            this.registerWaiting(item);
        }
    };
    EntityContainer.prototype.registerUnresolvedDependency = function (dependency, dependant) {
        if (!this.unresolvedDependencies[dependency]) {
            this.unresolvedDependencies[dependency] = [];
        }
        if (this.unresolvedDependencies[dependency].indexOf(dependant) == -1) {
            this.unresolvedDependencies[dependency].push(dependant);
        }
    };
    EntityContainer.prototype.isUnresolvedDependency = function (name) {
        return this.unresolvedDependencies[name] ? true : false;
    };
    EntityContainer.prototype.createItem = function (config, entityConstructor, mapperConstructor) {
        return {
            name: config.name,
            resolved: false,
            config: config,
            dependencies: config.dependencies,
            resolvedDependencies: [],
            info: null,
            mapper: null,
            mapperConstructor: mapperConstructor,
            entityConstructor: entityConstructor
        };
    };
    EntityContainer.prototype.resolveItem = function (item) {
        this.resolveDependencies(item);
        item.info = this.buildInfo(item);
        item.mapper = item.info.mapper;
        item.resolved = true;
        return item;
    };
    EntityContainer.prototype.resolveDependants = function (name) {
        var _this = this;
        if (this.isUnresolvedDependency(name)) {
            var dependants = this.unresolvedDependencies[name];
            this.unresolvedDependencies[name] = undefined;
            dependants.map(function (name) {
                return _this.waiting[name];
            }).forEach(function (item) {
                _this.registerUsingItem(item);
            });
        }
    };
    EntityContainer.prototype.buildInfo = function (item) {
        var dependenciesMap = {}, mapper = this.buildMapper(item);
        item.resolvedDependencies.forEach(function (item) {
            dependenciesMap[item.name] = item.info;
        });
        return new EntityInfo_1.default(item.entityConstructor, item.config, mapper, dependenciesMap);
    };
    EntityContainer.prototype.buildMapper = function (item) {
        var that = item.mapperConstructor, argsArray = [item.config];
        item.resolvedDependencies.forEach(function (dependency) {
            argsArray.push(dependency.mapper);
        });
        return item.mapperConstructor.getInstance.apply(that, argsArray);
    };
    EntityContainer.prototype.resolveDependencies = function (item) {
        var _this = this;
        item.resolvedDependencies = item.dependencies.map(function (name) {
            return _this.resolved[name];
        });
    };
    return EntityContainer;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntityContainer;
