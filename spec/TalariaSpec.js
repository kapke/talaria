///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />
var Talaria = require('../lib/Talaria');
var EntityInfo = require('../lib/EntityInfo');
var EntityConfig = require('../lib/EntityConfig');
var Repository = require('../lib/Repository');
var Proxy = require('../lib/Proxy');
var UnitOfWork = require('../lib/UnitOfWork');
var InMemoryStrategy = require('../lib/PersistenceStrategy/InMemoryStrategy');
var Person = require('./Helper/Person');
var personInfoFactory = require('./Helper/personInfoFactory');
describe('Talaria\'s facade', function () {
    var entityInfo, talaria;
    beforeEach(function () {
        talaria = new Talaria();
        entityInfo = personInfoFactory.getPersonInfo();
    });
    it('should be singleton', function () {
        expect(Talaria.getInstance()).toBe(Talaria.getInstance());
    });
    it('should successfully register entity under given name', function () {
        talaria.registerEntity(entityInfo.entity, entityInfo.config);
        var registeredEntity = talaria.getEntityInfo(entityInfo.config.name);
        expect(registeredEntity.config).toBe(entityInfo.config);
        expect(registeredEntity.entity).toBe(entityInfo.entity);
    });
    it('should create and return proper repository after registering entity', function () {
        var entityConfig = entityInfo.config, entity = entityInfo.entity;
        talaria.registerEntity(entity, entityConfig);
        var repository = talaria.getRepository(entityConfig.name);
        expect(repository).toBeDefined();
        expect(repository).toEqual(jasmine.any(Repository));
    });
    describe('for handling default persistence strategy', function () {
        var strategy;
        beforeEach(function () {
            strategy = new InMemoryStrategy();
        });
        it('should be able to set default persistence strategy', function () {
            expect(talaria.setDefaultStrategy).toEqual(jasmine.any(Function));
        });
        it('should make default strategy public accessible', function () {
            talaria.setDefaultStrategy(strategy);
            expect(talaria.getDefaultStrategy()).toBe(strategy);
        });
        it('should create accessible UnitOfWork instance connected with default strategy', function () {
            spyOn(strategy, 'create').and.callThrough();
            talaria.setDefaultStrategy(strategy);
            var gotUnitOfWork = talaria.getDefaultUnitOfWork();
            gotUnitOfWork.registerNew(entityInfo, new Person('Ala', 'Makota'));
            gotUnitOfWork.commit();
            expect(gotUnitOfWork).toEqual(jasmine.any(UnitOfWork));
            expect(strategy.create).toHaveBeenCalled();
        });
    });
    [
        { name: 'Repository', construct: Repository },
        { name: 'Proxy', construct: Proxy },
        { name: 'UnitOfWork', construct: UnitOfWork },
        { name: 'EntityInfo', construct: EntityInfo },
        { name: 'EntityConfig', construct: EntityConfig }
    ].forEach(function (def) {
        it('should have ' + def.name + ' class available as a property', function () {
            expect(Talaria[def.name]).toBe(def.construct);
        });
    });
});
//# sourceMappingURL=TalariaSpec.js.map