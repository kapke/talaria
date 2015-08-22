///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import EntityContainer from '../lib/EntityContainer';
import EntityInfo from '../lib/EntityInfo';
import EntityNotAvailableError from '../lib/Error/EntityNotAvailableError';
import Person from './Helper/Person';
import PersonMapper from './Helper/PersonMapper';
import personInfoFactory from './Helper/personInfoFactory';
import Contact from './Helper/Contact';
import ContactMapper from './Helper/ContactMapper';
import contactInfoFactory from './Helper/contactInfoFactory';
import customMatchersFactory from './Helper/customMatchersFactory';

describe('EntityContainer', () => {
    var entityContainer:EntityContainer,
        contactInfo:EntityInfo<Contact>,
        personInfo:EntityInfo<Person>;

    beforeEach(() => {
        jasmine.addMatchers(customMatchersFactory);
        entityContainer = new EntityContainer();
        personInfo = personInfoFactory.getPersonInfo();
        contactInfo = contactInfoFactory.getContactInfo();
    });

    it('should create instance of EntityInfo immediately when entity has no dependencies', () => {
        entityContainer.registerEntity(personInfo.config, Person, PersonMapper);
        expect(entityContainer.getEntity(personInfo.config.name)).toEqual(jasmine.any(EntityInfo));
    });

    it('should create instance of EntityInfo immediately when all entity dependencies are already registered', () => {
        entityContainer.registerEntity(personInfo.config, Person, PersonMapper);
        entityContainer.registerEntity(contactInfo.config, Contact, ContactMapper);
        expect(entityContainer.getEntity(contactInfo.config.name)).toEqual(jasmine.any(EntityInfo));
    });

    it('should create mappers when all dependencies are resolved injecting dependencies as constructor arguments', () => {
        entityContainer.registerEntity(contactInfo.config, Contact, ContactMapper);
        expect(entityContainer.getEntity.bind(entityContainer, contactInfo.config.name)).toThrowTalariaError(EntityNotAvailableError);
        entityContainer.registerEntity(personInfo.config, Person, PersonMapper);
        expect(entityContainer.getEntity(contactInfo.config.name)).toEqual(jasmine.any(EntityInfo));
    });
});