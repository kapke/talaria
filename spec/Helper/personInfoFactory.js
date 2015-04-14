var EntityInfo = require('../../lib/EntityInfo');
var EntityConfig = require('../../lib/EntityConfig');
var Person = require('./Person');
var PersonInfoFactory = (function () {
    function PersonInfoFactory() {
    }
    PersonInfoFactory.prototype.getPersonInfo = function () {
        return new EntityInfo(Person, new EntityConfig('Person', ['id', 'name', 'surname'], ['id']));
    };
    return PersonInfoFactory;
})();
var factory = new PersonInfoFactory();
module.exports = factory;
//# sourceMappingURL=personInfoFactory.js.map