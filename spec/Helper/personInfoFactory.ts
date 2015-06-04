import EntityInfo from '../../lib/EntityInfo';
import EntityConfig from '../../lib/EntityConfig';
import Person from './Person';
import PersonMapper from './PersonMapper';

class PersonInfoFactory {
    public getPersonInfo ():EntityInfo<Person> {
        return new EntityInfo(Person, new EntityConfig('Person', ['id', 'name', 'surname'], ['id']), new PersonMapper());
    }
}

var factory:PersonInfoFactory = new PersonInfoFactory();

export default factory;