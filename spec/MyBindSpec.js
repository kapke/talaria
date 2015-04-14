///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />
var MyBind = require('../lib/MyBind');
var EntityConfig = require('../lib/EntityConfig');
var Person = (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Person;
})();
describe('MyBind facade', function () {
    var entity = Person, entityConfig = new EntityConfig('Person', ['name', 'surname']), myBind;
    beforeEach(function () {
        myBind = new MyBind();
    });
    it('should be singleton', function () {
        expect(MyBind.getInstance()).toBe(MyBind.getInstance());
    });
    it('should successfully register entity under given name', function () {
        myBind.registerEntity(entity, entityConfig);
        var registeredEntity = myBind.getEntityInfo(entityConfig.name);
        expect(registeredEntity.config).toBe(entityConfig);
        expect(registeredEntity.entity).toBe(entity);
    });
    it('should create and return proper repository after registering entity', function () {
        myBind.registerEntity(entity, entityConfig);
        var repository = myBind.getRepository(entityConfig.name);
        expect(repository).toBeDefined();
    });
});
//# sourceMappingURL=MyBindSpec.js.map