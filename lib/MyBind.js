var EntityInfo = require('./EntityInfo');
var Repository = require('./Repository');
var MyBind = (function () {
    function MyBind() {
        this.entities = {};
        this.repositories = {};
    }
    MyBind.prototype.registerEntity = function (constructor, config) {
        this.entities[config.name] = new EntityInfo(constructor, config);
    };
    MyBind.prototype.getEntityInfo = function (name) {
        return this.entities[name];
    };
    MyBind.prototype.getRepository = function (name) {
        if (!this.repositories[name]) {
            this.repositories[name] = new Repository(this.getEntityInfo(name));
        }
        return this.repositories[name];
    };
    MyBind.getInstance = function () {
        if (!MyBind.instance) {
            MyBind.instance = new MyBind();
        }
        return MyBind.instance;
    };
    return MyBind;
})();
module.exports = MyBind;
//# sourceMappingURL=MyBind.js.map