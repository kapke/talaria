import {Mapper} from '../../lib/Mapper';
import {MapperSpecConfig} from '../MapperSpec';
import Person from '../Helper/Person';
import PersonMapper from '../Helper/PersonMapper';
import Pointer from '../../lib/Pointer';
import personInfoFactory from '../Helper/personInfoFactory';

var personMapperSpecConfig:MapperSpecConfig<Person> = {
    name: 'PersonMapper',
    mapperConstructor: () => {
        return PersonMapper;
    },
    getInstanceArgs: ():Array<Mapper<any>> => {
        return personInfoFactory.getPersonMapperArgs();
    },
    mapper: ():PersonMapper => {
        return personInfoFactory.getPersonMapper();
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
    },
    pointer: ():Pointer => {
        return new Pointer('Person', {
            id: 1
        });
    },
    entityWithoutId: function():Person {
        var entity:Person = this.entity();
        entity.id = null;
        return entity;
    }
};

export default personMapperSpecConfig;