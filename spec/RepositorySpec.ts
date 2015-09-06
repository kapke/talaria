///<reference path="../typings/jasmine/jasmine.d.ts" />

import Repository from '../lib/Repository';
import UnitOfWork from '../lib/UnitOfWork';
import {PersistenceStrategy} from '../lib/PersistenceStrategy';
import InMemoryStrategy from '../lib/PersistenceStrategy/InMemoryStrategy';
import Person from './Helper/Person';
import personInfoFactory from './Helper/personInfoFactory';

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
        var addedPerson:Person;
        repository
            .add(somePerson)
            .then((result:Person) => {addedPerson = result;})
            .then(() => {return repository.has(addedPerson);})
            .then((result : boolean) => {
                expect(result).toEqual(true);
                done();
            });
    });
    it('should make object present on find results after adding to repository', (done) => {
        //TODO: improve code style for this test
        repository.add(somePerson).then((addedPerson:Person) => {
            repository.findAll().then((results:Person[]) => {
                expect(results).toContain(addedPerson);
                done();
            });
        });
    });
    it('should make object unavailable after removing from repository', (done) => {
        //TODO: improve code style for this test
        repository.add(somePerson).then((addedPerson:Person) => {
            repository.remove(addedPerson).then(() => {
                repository.has(addedPerson).then((result:boolean) => {
                    expect(result).toEqual(false);
                    done();
                });
            });
        });
    });
    it('should make object not present on find results after removing from repository', () => {
        //TODO: improve code style for this test
        repository.add(somePerson).then((addedPerson:Person) => {
            repository.remove(addedPerson).then(() => {
                repository.findAll().then((results) => {
                    expect(results).not.toContain(addedPerson);
                });
            });
        });
    });
    it('should register objects in given UnitOfWork, so given UnitOfWork should register object changes', (done) => {
        spyOn(strategy, 'update').and.callThrough();
        repository.add(somePerson).then((registeredPerson) => {
            unitOfWork.commit();
            repository.findAll().then((results : Array<Person>) => {
                var person : Person = results[0];
                person.name = 'Basia';
                unitOfWork.commit();
                expect(strategy.update).toHaveBeenCalled();
                done();
            });
        });
    });
});