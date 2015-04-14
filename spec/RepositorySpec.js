///<reference path="../typings/jasmine/jasmine.d.ts" />
var Repository = require('../lib/Repository');
var Person = require('./Helper/Person');
var personInfoFactory = require('./Helper/personInfoFactory');
describe('Repository', function () {
    var repository, somePerson;
    beforeEach(function () {
        repository = new Repository(personInfoFactory.getPersonInfo());
        somePerson = new Person('Ala', 'Makota', 1);
    });
    it('should make object available after adding to repository', function () {
        repository.add(somePerson);
        expect(repository.has(somePerson)).toEqual(true);
    });
    it('should make object present on find results after adding to repository', function () {
        repository.add(somePerson);
        expect(repository.findAll()).toContain(somePerson);
    });
    it('should make object unavailable after removing from repository', function () {
        repository.add(somePerson);
        repository.remove(somePerson);
        expect(repository.has(somePerson)).toEqual(false);
    });
    it('should make object not present on find results after removing from repository', function () {
        repository.add(somePerson);
        repository.remove(somePerson);
        expect(repository.findAll()).not.toContain(somePerson);
    });
});
//# sourceMappingURL=RepositorySpec.js.map