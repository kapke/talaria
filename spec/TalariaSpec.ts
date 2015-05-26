///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import Talaria from '../lib/Talaria';
import EntityInfo from '../lib/EntityInfo';
import EntityConfig from '../lib/EntityConfig';
import Repository from '../lib/Repository';
import Proxy from '../lib/Proxy';
import UnitOfWork from '../lib/UnitOfWork';
import ps from '../lib/PersistenceStrategy';
import PersistenceStrategy = ps.PersistenceStrategy;
import InMemoryStrategy from '../lib/PersistenceStrategy/InMemoryStrategy';

import Person from './Helper/Person';
import personInfoFactory from './Helper/personInfoFactory';

describe('Talaria\'s facade', () => {
    var entityInfo : EntityInfo,
        talaria : Talaria;

    beforeEach(() => {
        talaria = new Talaria();
        entityInfo = personInfoFactory.getPersonInfo();
    });

    it('should be singleton', () => {
        expect(Talaria.getInstance()).toBe(Talaria.getInstance());
    });

    it('should successfully register entity under given name', () => {
        talaria.registerEntity(entityInfo.entity, entityInfo.config);
        var registeredEntity : EntityInfo = talaria.getEntityInfo(entityInfo.config.name);
        expect(registeredEntity.config).toBe(entityInfo.config);
        expect(registeredEntity.entity).toBe(entityInfo.entity);
    });

    it('should create and return proper repository after registering entity', () => {
        var entityConfig : EntityConfig = entityInfo.config,
            entity = entityInfo.entity;
        talaria.registerEntity(entity, entityConfig);
        var repository : Repository<Person> = talaria.getRepository<Person>(entityConfig.name);
        expect(repository).toBeDefined();
        expect(repository).toEqual(jasmine.any(Repository));
    });

    describe('for handling default persistence strategy', () => {
        var strategy: PersistenceStrategy;

        beforeEach(() => {
            strategy = new InMemoryStrategy();
        });

        it('should create accessible UnitOfWork instance connected with default strategy', () => {
            spyOn(strategy, 'create').and.callThrough();
            talaria.DefaultStrategy = strategy;
            var gotUnitOfWork : UnitOfWork = talaria.DefaultUnitOfWork;
            gotUnitOfWork.registerNew(entityInfo, new Person('Ala', 'Makota'));
            gotUnitOfWork.commit();
            expect(gotUnitOfWork).toEqual(jasmine.any(UnitOfWork));
            expect(strategy.create).toHaveBeenCalled();
        });
    });
});