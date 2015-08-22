import EntityInfo from '../../lib/EntityInfo';
import EntityConfig from '../../lib/EntityConfig';
import Contact from './Contact';
import ContactMapper from './ContactMapper';
import PersonMapper from './PersonMapper';
import personInfoFactory from './personInfoFactory';

class ContactInfoFactory {
    public getContactInfo ():EntityInfo<Contact> {
        var contactDependencies:{[name:string]:EntityInfo<any>} = {};
        contactDependencies[personInfoFactory.getPersonInfo().config.name] = personInfoFactory.getPersonInfo();
        return new EntityInfo(Contact, this.getContactConfig(), this.getContactMapper(), contactDependencies);
    }

    private getContactConfig ():EntityConfig {
        return new EntityConfig('Contact', ['id', 'name', 'surname'], ['id'], ['Person']);
    }

    public getContactMapper ():ContactMapper {
        return new ContactMapper(this.getContactConfig(), personInfoFactory.getPersonMapper());
    }

    public getContactMapperArgs ():Array<any> {
        return [this.getContactConfig(), personInfoFactory.getPersonMapper()];
    }


}

var factory:ContactInfoFactory = new ContactInfoFactory();

export default factory;