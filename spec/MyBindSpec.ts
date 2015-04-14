///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import MyBind = require('../lib/MyBind');
import EntityConfig = require('../lib/EntityConfig');
import Repository = require('../lib/Repository');

class Person {
    public name : String;
    public surname : String;

    constructor (name : String, surname : String) {
        this.name = name;
        this.surname = surname;
    }
}

describe('MyBind facade', () => {
    var entity = Person,
        entityConfig : EntityConfig = new EntityConfig('Person', ['name', 'surname']),
        myBind : MyBind;

    beforeEach(() => {
       myBind = new MyBind();
    });

    it('should be singleton', () => {
        expect(MyBind.getInstance()).toBe(MyBind.getInstance());
    });

    it('should successfully register entity under given name', () => {
        myBind.registerEntity(entity, entityConfig);
        var registeredEntity = myBind.getEntityInfo(entityConfig.name);
        expect(registeredEntity.config).toBe(entityConfig);
        expect(registeredEntity.entity).toBe(entity);
    });

    it('should create and return proper repository after registering entity', () => {
        myBind.registerEntity(entity, entityConfig);
        var repository : Repository<Person> = myBind.getRepository<Person>(entityConfig.name);
        expect(repository).toBeDefined();
    });
});