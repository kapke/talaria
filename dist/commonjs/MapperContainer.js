var MapperNotAvailableError_1 = require('./Error/MapperNotAvailableError');
var MapperContainer = (function () {
    function MapperContainer() {
        this.registeredMappers = {};
        this.waiting = {};
        this.unresolvedDependencies = {};
    }
    MapperContainer.prototype.registerMapper = function (name, dependencies, klass) {
        var _this = this;
        if (this.checkDependencies(dependencies)) {
            this.registeredMappers[name] = klass.getInstance.apply(klass, this.resolveDependencies(dependencies));
        }
        else {
            this.registerWaiting(name, dependencies, klass);
        }
        if (this.isUnresolved(name)) {
            var dependants = this.unresolvedDependencies[name];
            this.unresolvedDependencies[name] = undefined;
            dependants.map(function (name) {
                return _this.waiting[name];
            }).forEach(function (item) {
                _this.registerMapper(item.name, item.dependencies, item.klass);
            });
        }
    };
    MapperContainer.prototype.getMapper = function (name) {
        if (this.registeredMappers[name]) {
            return this.registeredMappers[name];
        }
        else {
            throw MapperNotAvailableError_1.default(name);
        }
    };
    MapperContainer.prototype.isRegistered = function (name) {
        return this.registeredMappers[name] ? true : false;
    };
    MapperContainer.prototype.checkDependencies = function (dependencies) {
        for (var i = 0; i < dependencies.length; i++) {
            if (!this.isRegistered(dependencies[i])) {
                return false;
            }
        }
        return true;
    };
    MapperContainer.prototype.resolveDependencies = function (dependencies) {
        var _this = this;
        return dependencies.map(function (dependency) {
            return _this.getMapper(dependency);
        });
    };
    MapperContainer.prototype.registerWaiting = function (name, dependencies, klass) {
        var _this = this;
        this.waiting[name] = { name: name, dependencies: dependencies, klass: klass };
        dependencies.forEach(function (dependency) {
            if (!_this.isRegistered(dependency)) {
                _this.registerUnresolved(dependency, name);
            }
        });
    };
    MapperContainer.prototype.registerUnresolved = function (dependency, dependant) {
        if (!this.unresolvedDependencies[dependency]) {
            this.unresolvedDependencies[dependency] = [];
        }
        this.unresolvedDependencies[dependency].push(dependant);
    };
    MapperContainer.prototype.isUnresolved = function (name) {
        return this.unresolvedDependencies[name] ? true : false;
    };
    return MapperContainer;
})();
exports.default = MapperContainer;
