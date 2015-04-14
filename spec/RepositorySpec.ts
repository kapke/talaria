///<reference path="../typings/jasmine/jasmine.d.ts" />

import Repository = require('../lib/Repository');
import Person = require('./Helper/Person');
import personInfoFactory = require('./Helper/personInfoFactory');

describe('Repository', () => {
    var repository : Repository<Object>,
        somePerson:Person;

	beforeEach(() => {
		repository = new Repository<Person>(personInfoFactory.getPersonInfo());
        somePerson = new Person('Ala', 'Makota', 1);
	});

    it('should make object available after adding to repository', () => {
        repository.add(somePerson);
        expect(repository.has(somePerson)).toEqual(true);
    });
    it('should make object present on find results after adding to repository', () => {
        repository.add(somePerson);
        expect(repository.findAll()).toContain(somePerson);
    });
    it('should make object unavailable after removing from repository', () => {
        repository.add(somePerson);
        repository.remove(somePerson);
        expect(repository.has(somePerson)).toEqual(false);
    });
    it('should make object not present on find results after removing from repository', () => {
        repository.add(somePerson);
        repository.remove(somePerson);
        expect(repository.findAll()).not.toContain(somePerson);
    });
});