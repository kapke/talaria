///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import Talaria from '../lib/Talaria';
import EntityInfo from '../lib/EntityInfo';
import EntityConfig from '../lib/EntityConfig';
import Repository from '../lib/Repository';
import Proxy from '../lib/Proxy';
import UnitOfWork from '../lib/UnitOfWork';
import {PersistenceStrategy} from '../lib/PersistenceStrategy';
import InMemoryStrategy from '../lib/PersistenceStrategy/InMemoryStrategy';

import Person from './Helper/Person';
import personInfoFactory from './Helper/personInfoFactory';
import PersonMapper from './Helper/PersonMapper';

describe('Talaria\'s facade', () => {
    var entityInfo : EntityInfo<any>,
        talaria : Talaria;

    beforeEach(() => {
        talaria = new Talaria();
        entityInfo = personInfoFactory.getPersonInfo();
    });

    //TODO: Maybe not singleton, but just named instances which give you some context?
    it('should be singleton', () => {
        expect(Talaria.getInstance()).toBe(Talaria.getInstance());
    });

    it('should successfully register entity under given name', () => {
        talaria.registerEntity(entityInfo.entity, entityInfo.config, PersonMapper);
        var registeredEntity : EntityInfo<Person> = talaria.getEntityInfo(entityInfo.config.name);
        expect(registeredEntity.config).toBe(entityInfo.config);
        expect(registeredEntity.entity).toBe(entityInfo.entity);
    });

    it('should create and return proper repository after registering entity', () => {
        var entityConfig : EntityConfig = entityInfo.config,
            entity = entityInfo.entity;
        talaria.registerEntity(entity, entityConfig, PersonMapper);
        var repository : Repository<Person> = talaria.getRepository<Person>(entityConfig.name);
        expect(repository).toBeDefined();
        expect(repository).toEqual(jasmine.any(Repository));
    });

    //TODO: there should be specs which describe process of most common usecases:
    // - persisting entity after creation
    // - persisting changes
    // - deleting entity when needed
    // As these specs will show almost whole functionality for Talaria I think they should be somehow linked in documentation.
    // Maybe custom doc generator would do this in elegant way?

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