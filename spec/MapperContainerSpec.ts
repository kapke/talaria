///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import MapperContainer from '../lib/MapperContainer';
import EntityInfo from '../lib/EntityInfo';
import MapperNotAvailableError from '../lib/Error/MapperNotAvailableError';
import Person from './Helper/Person';
import PersonMapper from './Helper/PersonMapper';
import personInfoFactory from './Helper/personInfoFactory';
import Contact from './Helper/Contact';
import ContactMapper from './Helper/ContactMapper';
import contactInfoFactory from './Helper/contactInfoFactory';

describe('MapperContainer', () => {
    var mapperContainer:MapperContainer,
        contactInfo:EntityInfo<Contact>,
        personInfo:EntityInfo<Person>;

    beforeEach(() => {
        mapperContainer = new MapperContainer();
        personInfo = personInfoFactory.getPersonInfo();
        contactInfo = contactInfoFactory.getContactInfo();
    });

    it('should create instance of given mapper class immediately when entity has no dependencies', () => {
        mapperContainer.registerMapper(personInfo.config.name, personInfo.config.dependencies, PersonMapper);
        expect(mapperContainer.getMapper(personInfo.config.name)).toEqual(jasmine.any(PersonMapper));
    });

    it('should create instance of given mapper class immediately when all entity dependencies are registered already', () => {
        mapperContainer.registerMapper(personInfo.config.name, personInfo.config.dependencies, PersonMapper);
        mapperContainer.registerMapper(contactInfo.config.name, contactInfo.config.dependencies, ContactMapper);
        expect(mapperContainer.getMapper(contactInfo.config.name)).toEqual(jasmine.any(ContactMapper));
    });

    it('should create mappers when all dependencies are resolved injecting dependencies as constructor arguments', () => {
        mapperContainer.registerMapper(contactInfo.config.name, contactInfo.config.dependencies, ContactMapper);
        expect(mapperContainer.getMapper.bind(mapperContainer, contactInfo.config.name)).toThrow(new MapperNotAvailableError(contactInfo.config.name));
        mapperContainer.registerMapper(personInfo.config.name, personInfo.config.dependencies, PersonMapper);
        expect(mapperContainer.getMapper(contactInfo.config.name)).toEqual(jasmine.any(ContactMapper));
    });
});