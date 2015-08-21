import {Mapper} from '../../lib/Mapper';
import Person from './Person';
import {PersistenceStrategy} from '../../lib/PersistenceStrategy';
import Pointer from '../../lib/Pointer';
import EntityConfig from '../../lib/EntityConfig';
import EntityNotDistinguishableError from '../../lib/Error/EntityNotDistinguishableError';

export default class PersonMapper implements Mapper<Person> {
    private personConfig:EntityConfig;

    public static getInstance (personConfig:EntityConfig):PersonMapper {
        return new PersonMapper(personConfig);
    }

    constructor(personConfig:EntityConfig) {
        this.personConfig = personConfig;
    }

    toObject(person:Person):Object {
        return {
            id: person.id,
            name: person.name,
            surname: person.surname
        }
    }

    toPointer (entity:Person):Pointer {
        return new Pointer(this.personConfig.name, this.extractKey(entity));
    }

    fromObject(data):Person {
        return new Person(data.name, data.surname, data.id);
    }

    toObjectWithPointers (strategy:PersistenceStrategy, entity:Person):Promise<Object> {
         return new Promise((resolve, reject) => {
             resolve(this.toObject(entity));
         });
    }

    fromObjectWithPointers (strategy:PersistenceStrategy, dataWithPointers:Object):Promise<Person> {
        return new Promise((resolve, reject) => {
            resolve(this.fromObject(dataWithPointers));
        });
    }

    extractKey(entity:Person):Object {
        if(!entity.id) {
            throw new EntityNotDistinguishableError(entity);
        }
        return {
            id: entity.id
        };
    }
}