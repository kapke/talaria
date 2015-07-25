///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import EntityRegistry from '../lib/EntityRegistry';
import EntityInfo from '../lib/EntityInfo';
import MapperContainer from '../lib/MapperContainer';
import personInfoFactory from './Helper/personInfoFactory';
import Person from './Helper/Person';
import PersonMapper from './Helper/PersonMapper';


describe('EntityRegistry', () => {
    var personInfo:EntityInfo<Person>,
        registry:EntityRegistry;

    beforeEach(() => {
        personInfo = personInfoFactory.getPersonInfo();
        registry = new EntityRegistry(new MapperContainer());
    });

    it('should register entity under given name', () => {
        registry.registerEntity(personInfo.entity, personInfo.config, PersonMapper);
        var actualPersonInfo:EntityInfo<Person> = registry.getEntity(personInfo.config.name);
        expect(actualPersonInfo.entity).toBe(personInfo.entity);
        expect(actualPersonInfo.config).toBe(personInfo.config);
        expect(actualPersonInfo.mapper).toEqual(jasmine.any(PersonMapper));
    });
});