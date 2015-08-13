import {Mapper} from '../../lib/Mapper';
import Contact from './Contact';
import PersonMapper from './PersonMapper';
import {PersistenceStrategy} from '../../lib/PersistenceStrategy';

class ContactMapper implements Mapper<Contact> {
    private personMapper:PersonMapper;

    public static getInstance(personMapper:PersonMapper) {
        return new ContactMapper(personMapper);
    }

    constructor (personMapper:PersonMapper) {
        this.personMapper = personMapper;
    }

    toObject(entity:Contact):{person: Object, data:Object} {
        return {
            person: this.personMapper.toObject(entity.person),
            data: entity.data
        };
    }


    toObjectWithPointers (strategy:PersistenceStrategy, entity:Contact):Promise<Object> {
        throw new Error('Not implemented');
    }

    fromObject(data:{person: Object, data:Object}):Contact {
        return new Contact(this.personMapper.fromObject(data.person), data.data);
    }


    fromObjectWithPointers (strategy:PersistenceStrategy, dataWithPointers:Object):Promise<Contact> {
        throw new Error('Not implemented');
    }

    extractKey(entity:Contact):{person: number} {
        return {
            person: entity.person.id
        };
    }
    
}

export default ContactMapper;