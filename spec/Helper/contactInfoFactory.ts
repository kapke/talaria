import EntityInfo from '../../lib/EntityInfo';
import EntityConfig from '../../lib/EntityConfig';
import Contact from './Contact';
import ContactMapper from './ContactMapper';
import PersonMapper from './PersonMapper';

class ContactInfoFactory {
    public getContactInfo ():EntityInfo<Contact> {
        return new EntityInfo(Contact, new EntityConfig('Contact', ['id', 'name', 'surname'], ['id'], ['Person']), new ContactMapper(new PersonMapper()));
    }
}

var factory:ContactInfoFactory = new ContactInfoFactory();

export default factory;