import {Mapper} from '../../lib/Mapper';
import Person from './Person';

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

    extractKey(entity:Person):Object {
        return {
            id: entity.id
        };
    }
}