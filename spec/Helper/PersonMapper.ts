import {Mapper} from '../../lib/Mapper';
import Person from './Person';
import {PersistenceStrategy} from '../../lib/PersistenceStrategy';

export default class PersonMapper implements Mapper<Person> {
    public static getInstance () {
        return new PersonMapper();
    }

    toObject(person:Person):Object {
        return {
            id: person.id,
            name: person.name,
            surname: person.surname
        }
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
        return {
            id: entity.id
        };
    }
}