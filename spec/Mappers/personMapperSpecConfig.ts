import {Mapper} from '../../lib/Mapper';
import {MapperSpecConfig} from '../MapperSpec';
import Person from '../Helper/Person';
import PersonMapper from '../Helper/PersonMapper';

var personMapperSpecConfig:MapperSpecConfig<Person> = {
    name: 'PersonMapper',
    mapperConstructor: () => {
        return PersonMapper;
    },
    getInstanceArgs: ():Array<Mapper<any>> => {
        return [];
    },
    mapper: ():PersonMapper => {
        return new PersonMapper();
    },
    entity: ():Person => {
        return new Person('Ala', 'Makota', 1);
    },
    data: () => {
        return {
            id: 1, name: 'Ala', surname: 'Makota'
        };
    },
    dataWithPointers: () => {
        return {
            id: 1, name: 'Ala', surname: 'Makota'
        };
    },
    key: () => {
        return {
            id: 1
        };
    },
    entityMatcher: (actual:Person, expected:Person):boolean => {
        return ((expected.id == actual.id) &&
                (expected.name == actual.name) &&
                (expected.surname == actual.surname));
    }
};

export default personMapperSpecConfig;