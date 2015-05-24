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
        var addedPerson;
        repository.add(somePerson).then(function (result) {
            addedPerson = result;
        }).then(function () {
            return repository.has(addedPerson);
        }).then(function (result) {
            expect(result).toEqual(true);
            done();
        });
    });
    it('should make object present on find results after adding to repository', function (done) {
        //TODO: improve code style for this test
        repository.add(somePerson).then(function (addedPerson) {
            repository.findAll().then(function (results) {
                expect(results).toContain(addedPerson);
                done();
            });
        });
    });
    it('should make object unavailable after removing from repository', function (done) {
        //TODO: improve code style for this test
        repository.add(somePerson).then(function (addedPerson) {
            repository.remove(addedPerson).then(function () {
                repository.has(addedPerson).then(function (result) {
                    expect(result).toEqual(false);
                    done();
                });
            });
        });
    });
    it('should make object not present on find results after removing from repository', function () {
        //TODO: improve code style for this test
        repository.add(somePerson).then(function (addedPerson) {
            repository.remove(addedPerson).then(function () {
                repository.findAll().then(function (results) {
                    expect(results).not.toContain(addedPerson);
                });
            });
        });
    });
    it('should register objects in given UnitOfWork, so given UnitOfWork should register object changes', function (done) {
        spyOn(strategy, 'update').and.callThrough();
        repository.add(somePerson).then(function (registeredPerson) {
            unitOfWork.commit();
            repository.findAll().then(function (results) {
                var person = results[0];
                person.name = 'Basia';
                unitOfWork.commit();
                expect(strategy.update).toHaveBeenCalled();
                done();
            });
        });
    });
});
//# sourceMappingURL=RepositorySpec.js.map