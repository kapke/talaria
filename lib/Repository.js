var Repository = (function () {
    function Repository(entityInfo) {
        this.entities = [];
        this.entityInfo = entityInfo;
    }
    Repository.prototype.add = function (obj) {
        if (!this.has(obj)) {
            this.entities.push(obj);
        }
    };
    Repository.prototype.remove = function (obj) {
        if (this.has(obj)) {
            this.entities.splice(this.entities.indexOf(obj), 1);
        }
    };
    Repository.prototype.findOne = function () {
        throw new Error('Not implemented yet');
    };
    Repository.prototype.findAll = function () {
        return this.entities;
    };
    Repository.prototype.has = function (obj) {
        return (this.entities.indexOf(obj) > -1);
    };
    return Repository;
})();
module.exports = Repository;
//# sourceMappingURL=Repository.js.map