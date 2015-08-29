///<reference path="../typings/jasmine/jasmine.d.ts" />

import UnitOfWork from '../lib/UnitOfWork';
import {PersistenceStrategy} from '../lib/PersistenceStrategy';
import EntityInfo from '../lib/EntityInfo';
import EntityConfig from '../lib/EntityConfig';
import Person from './Helper/Person';
import personInfoFactory from './Helper/personInfoFactory';

class FakeStrategy implements PersistenceStrategy {
    public create(info:EntityInfo<any>, obj:any):Promise<void> {
        throw new Error("Not implemented");
    }
    public update(info:EntityInfo<any>, obj:any):Promise<void> {
        throw new Error("Not implemented");
    }
    public delete(info:EntityInfo<any>, obj:any):Promise<void> {
        throw new Error("Not implemented");
    }
    public find(info:EntityInfo<any>, criteria:Object=null):Promise<any[]>|Promise<any> {
        throw new Error("Not implemented");
    }
}

describe('Unit of Work', () => {
    var unit : UnitOfWork,
        obj:Person,
        strategy:PersistenceStrategy,
        info:EntityInfo<any>;
    beforeEach(() => {
        strategy = new FakeStrategy();
        unit = new UnitOfWork(strategy);
        obj = new Person('Ala', 'Makota', 1);
        info = personInfoFactory.getPersonInfo();
    });
    it('should persist new object after commit using given strategy when registering object as new', (done) => {
        spyOn(strategy, 'create').and.callFake((info:EntityInfo<any>, registeredObj) => {
            expect(registeredObj).toEqual(obj);
            done();
        });
        unit.registerNew(info, obj);
        unit.commit();
    });
    it('should update previously persisted object after commit using given strategy when registering object as dirty', (done) => {
        spyOn(strategy, 'update').and.callFake((info:EntityInfo<any>, registeredObj) => {
            expect(registeredObj).toEqual(obj);
            done();
        });
        unit.registerDirty(info, obj);
        unit.commit();
    });
    it('should delete persisted object after marking it as deleted using given strategy', (done) => {
        spyOn(strategy, 'delete').and.callFake((info:EntityInfo<any>, deletedObj) => {
            expect(deletedObj).toEqual(obj);
            done();
        });
        unit.registerDeleted(info, obj);
        unit.commit();
    });
    it('should detect fetched object change and register it as dirty automatically', (done) => {
        spyOn(strategy, 'update').and.callFake((info:EntityInfo<any>, registeredObj) => {
            for(var name in obj) {
                expect(registeredObj[name]).toEqual(obj[name]);
            }
            done();
        });
        var fetched = <Person>unit.registerFetched(info, obj);
        for(var name in obj) {
            expect(fetched[name]).toEqual(obj[name]);
        }
        fetched.name = 'Basia';
        unit.commit();
    });
    it('should treat method call as object modifiaction when method changes one of fields listed in EntityConfig', (done) => {
        spyOn(strategy, 'update').and.callFake((info:EntityInfo<any>, registeredObj) => {
            for(var name in obj) {
                expect(registeredObj[name]).toEqual(obj[name]);
            }
            done();
        });
        var fetched = <Person>unit.registerFetched(info, obj);
        for(var name in obj) {
            expect(fetched[name]).toEqual(obj[name]);
        }
        fetched.beSmith();
        unit.commit();
        expect(strategy.update).toHaveBeenCalled();
    });
    it('should not treat method call as object modification when method doesn\'t change fields listed in EntityConfig', () => {
        spyOn(strategy, 'update');
        var fetched = <Person>unit.registerFetched(info, obj);
        for(var name in obj) {
            expect(fetched[name]).toEqual(obj[name]);
        }
        fetched.greet();
        unit.commit();
        expect(strategy.update).not.toHaveBeenCalled();
    });
});