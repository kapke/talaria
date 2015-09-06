import {Mapper} from '../../lib/Mapper';
import Contact from './Contact';
import PersonMapper from './PersonMapper';
import {PersistenceStrategy} from '../../lib/PersistenceStrategy';
import Pointer from '../../lib/Pointer';
import EntityConfig from '../../lib/EntityConfig';
import EntityNotDistinguishableError from '../../lib/Error/EntityNotDistinguishableError';

class ContactMapper implements Mapper<Contact> {
    private contactConfig:EntityConfig;
    private personMapper:PersonMapper;

    public static getInstance(contactConfig:EntityConfig, ...mappers:Array<PersonMapper>) {
        var personMapper:PersonMapper;
        [personMapper] = mappers;
        return new ContactMapper(contactConfig, personMapper);
    }

    constructor (contactConfig:EntityConfig, personMapper:PersonMapper) {
        this.contactConfig = contactConfig;
        this.personMapper = personMapper;
    }

    toObject(entity:Contact):{person: Object, data:Object} {
        return {
            person: this.personMapper.toObject(entity.person),
            data: entity.data
        };
    }

    toPointer (entity:Contact):Pointer {
        return new Pointer(this.contactConfig.name, this.extractKey(entity));
    }

    toObjectWithPointers (entity:Contact):Object {
        return {
            data: entity.data,
            person: this.personMapper.toPointer(entity.person).toObject()
        };
    }

    fromObject(data:{person: Object, data:Object}):Contact {
        return new Contact(this.personMapper.fromObject(data.person), data.data);
    }

    fromObjectWithPointers (pointerResolver:(pointer:Pointer)=>Promise<Object>, dataWithPointers:{person:Object, data:Object}):Promise<Contact> {
        return <Promise<Contact>>pointerResolver(Pointer.fromObject(dataWithPointers.person)).
            then((personData) => {
                return new Contact(this.personMapper.fromObject(personData), dataWithPointers.data);
            });
    }

    extractKey(entity:Contact):{person: number} {
        if(!entity.person) {
            throw new EntityNotDistinguishableError(entity);
        }
        return {
            person: entity.person.id
        };
    }
    
}

export default ContactMapper;