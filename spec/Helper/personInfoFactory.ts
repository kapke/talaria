import EntityInfo from '../../lib/EntityInfo';
import EntityConfig from '../../lib/EntityConfig';
import Person from './Person';
import PersonMapper from './PersonMapper';

class PersonInfoFactory {
    public getPersonInfo ():EntityInfo<Person> {
        return new EntityInfo(Person, this.getPersonConfig(), this.getPersonMapper());
    }

    public getPersonMapper ():PersonMapper {
        return new PersonMapper(this.getPersonConfig());
    }

    private getPersonConfig ():EntityConfig {
        return new EntityConfig('Person', ['id', 'name', 'surname'], ['id']);
    }

    public getPersonMapperArgs ():Array<any> {
        return [this.getPersonConfig()];
    }
}

var factory:PersonInfoFactory = new PersonInfoFactory();

export default factory;