import {Mapper} from '../../lib/Mapper';
import {MapperSpecConfig} from '../MapperSpec';
import Contact from '../Helper/Contact';
import ContactMapper from '../Helper/ContactMapper';
import PersonMapper from '../Helper/PersonMapper';
import personMapperSpecConfig from './personMapperSpecConfig';

var contactMapperSpecConfig:MapperSpecConfig<Contact> = {
    name: 'ContactMapper',
    mapperConstructor: () => {
        return ContactMapper;
    },
    getInstanceArgs: ():Array<Mapper<any>> => {
        return [new PersonMapper()];
    },
    mapper: ():ContactMapper => {
        return new ContactMapper(new PersonMapper());
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
    }
};

export default contactMapperSpecConfig;