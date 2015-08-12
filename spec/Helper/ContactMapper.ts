import {Mapper} from '../../lib/Mapper';
import Contact from './Contact';
import PersonMapper from './PersonMapper';

class ContactMapper implements Mapper<Contact> {
    private personMapper:PersonMapper;

    public static getInstance(personMapper:PersonMapper) {
        return new ContactMapper(personMapper);
    }

    constructor (personMapper:PersonMapper) {
        this.personMapper = personMapper;
    }

    toObject(entity:Contact):{person: Object, data:{string: any}} {
        return {
            person: this.personMapper.toObject(entity.person),
            data: entity.data
        };
    }

    fromObject(data:{person: Object, data:{string:any}}):Contact {
        return new Contact(this.personMapper.fromObject(data.person), data.data);
    }

    extractKey(entity:Contact):{person: number} {
        return {
            person: entity.person.id
        };
    }
    
}

export default ContactMapper;