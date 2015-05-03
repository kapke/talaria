///<reference path="../typings/jasmine/jasmine.d.ts" />
var Repository = require('../lib/Repository');
var UnitOfWork = require('../lib/UnitOfWork');
var InMemoryStrategy = require('../lib/PersistenceStrategy/InMemoryStrategy');
var Person = require('./Helper/Person');
var personInfoFactory = require('./Helper/personInfoFactory');
describe('Repository', function () {
    var repository, unitOfWork, strategy, somePerson;
    beforeEach(function () {
        strategy = new InMemoryStrategy();
        unitOfWork = new UnitOfWork(strategy);
        repository = new Repository(personInfoFactory.getPersonInfo(), unitOfWork, strategy);
        somePerson = new Person('Ala', 'Makota', 1);
    });
    it('should make object available after adding to repository', function (done) {
        repository.add(somePerson).then(repository.has.bind(repository, somePerson)).then(function (result) {
            expect(result).toEqual(true);
            done();
        });
    });
    it('should make object present on find results after adding to repository', function (done) {
        //TODO: improve code style for this test
        repository.add(somePerson).then(function () {
            repository.findAll().then(function (results) {
                expect(results).toContain(somePerson);
                done();
            });
        });
    });
    it('should make object unavailable after removing from repository', function (done) {
        //TODO: improve code style for this test
        repository.add(somePerson).then(function () {
            repository.remove(somePerson).then(function () {
                repository.has(somePerson).then(function (result) {
                    expect(result).toEqual(false);
                    done();
                });
            });
        });
    });
    it('should make object not present on find results after removing from repository', function () {
        //TODO: improve code style for this test
        repository.add(somePerson).then(function () {
            repository.remove(somePerson).then(function () {
                repository.findAll().then(function (results) {
                    expect(results).not.toContain(somePerson);
                });
            });
        });
    });
});
//# sourceMappingURL=RepositorySpec.js.map