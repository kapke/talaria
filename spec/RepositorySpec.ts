///<reference path="../typings/jasmine/jasmine.d.ts" />

import Repository = require('../lib/Repository');
import UnitOfWork = require('../lib/UnitOfWork');
import ps = require('../lib/PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
import InMemoryStrategy = require('../lib/PersistenceStrategy/InMemoryStrategy');
import Person = require('./Helper/Person');
import personInfoFactory = require('./Helper/personInfoFactory');

describe('Repository', () => {
    var repository : Repository<Object>,
        unitOfWork : UnitOfWork,
        strategy : PersistenceStrategy,
        somePerson : Person;

    beforeEach(() => {
        strategy = new InMemoryStrategy();
        unitOfWork = new UnitOfWork(strategy);
        repository = new Repository<Person>(personInfoFactory.getPersonInfo(), unitOfWork, strategy);
        somePerson = new Person('Ala', 'Makota', 1);
    });

    it('should make object available after adding to repository', (done) => {
        repository
            .add(somePerson)
            .then(repository.has.bind(repository, somePerson))
            .then((result : boolean) => {
                expect(result).toEqual(true);
                done();
            });
    });
    it('should make object present on find results after adding to repository', (done) => {
        //TODO: improve code style for this test
        repository.add(somePerson).then(() => {
            repository.findAll().then((results) => {
                expect(results).toContain(somePerson);
                done();
            });
        });
    });
    it('should make object unavailable after removing from repository', (done) => {
        //TODO: improve code style for this test
        repository.add(somePerson).then(() => {
            repository.remove(somePerson).then(() => {
                repository.has(somePerson).then((result:boolean) => {
                    expect(result).toEqual(false);
                    done();
                });
            });
        });
    });
    it('should make object not present on find results after removing from repository', () => {
        //TODO: improve code style for this test
        repository.add(somePerson).then(() => {
            repository.remove(somePerson).then(() => {
                repository.findAll().then((results) => {
                    expect(results).not.toContain(somePerson);
                });
            });
        });
    });
});