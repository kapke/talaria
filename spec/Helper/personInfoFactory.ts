import EntityInfo = require('../../lib/EntityInfo');
import EntityConfig = require('../../lib/EntityConfig');
import Person = require('./Person');

class PersonInfoFactory {
    public getPersonInfo ():EntityInfo {
        return new EntityInfo(Person, new EntityConfig('Person', ['id', 'name', 'surname'], ['id']));
    }
}

var factory:PersonInfoFactory = new PersonInfoFactory();

export = factory;