import {Mapper} from '../../lib/Mapper';
import {MapperSpecConfig} from '../MapperSpec';
import Contact from '../Helper/Contact';
import ContactMapper from '../Helper/ContactMapper';
import PersonMapper from '../Helper/PersonMapper';
import personMapperSpecConfig from './personMapperSpecConfig';
import Pointer from '../../lib/Pointer';
import contactInfoFactory from '../Helper/contactInfoFactory';

var contactMapperSpecConfig:MapperSpecConfig<Contact> = {
    name: 'ContactMapper',
    mapperConstructor: () => {
        return ContactMapper;
    },
    getInstanceArgs: ():Array<Mapper<any>> => {
        return contactInfoFactory.getContactMapperArgs();
    },
    mapper: ():ContactMapper => {
        return contactInfoFactory.getContactMapper();
    },
    entity: ():Contact => {
        return new Contact(personMapperSpecConfig.entity(), {name: 'Alusia'});
    },
    data: () => {
        return {
            person: personMapperSpecConfig.data(),
            data: {
                name: 'Alusia'
            }
        };
    },
    dataWithPointers: () => {
        return {
            person: {
                __type: 'pointer',
                __entity: 'Person',
                id: 1
            },
            data: {
                name: 'Alusia'
            }
        }
    },
    entityMatcher: (actual: Contact, expected: Contact):boolean => {
        expect(actual.data).toEqual(expected.data);
        return personMapperSpecConfig.entityMatcher(actual.person, expected.person);
    },
    key: () => {
        return {
            person: 1
        }
    },
    pointer: ():Pointer => {
        return new Pointer('Contact', {
            person: 1
        });
    },
    entityWithoutId: function():Contact {
        var entity:Contact = this.entity();
        entity.person = null;
        return entity;
    }
};

export default contactMapperSpecConfig;