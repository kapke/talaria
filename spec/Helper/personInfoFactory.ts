import EntityInfo from '../../lib/EntityInfo';
import EntityConfig from '../../lib/EntityConfig';
import Person from './Person';

class PersonInfoFactory {
    public getPersonInfo ():EntityInfo {
        return new EntityInfo(Person, new EntityConfig('Person', ['id', 'name', 'surname'], ['id']));
    }
}

var factory:PersonInfoFactory = new PersonInfoFactory();

export default factory;