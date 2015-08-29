///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import {PersistenceStrategy} from '../lib/PersistenceStrategy';
import EntityInfo from '../lib/EntityInfo';
import Person from './Helper/Person';
import personInfoFactory from './Helper/personInfoFactory';
import customMatchersFactory from './Helper/customMatchersFactory';
import Pointer from '../lib/Pointer';

export default function strategySpec (strategyName : String, strategyFactory : () => PersistenceStrategy, onPointers:boolean) : void {
    describe(strategyName + ' Persistence Strategy', () => {
        var strategy:PersistenceStrategy,
            obj:Person,
            info:EntityInfo<Person>;

        beforeEach((done) => {
            jasmine.addMatchers(customMatchersFactory);
            strategy = <PersistenceStrategy>strategyFactory();
            obj = new Person('Ala', 'Makota', 1);
            info = personInfoFactory.getPersonInfo();
            strategy.create(info, obj).then(done);
        });

        it('should return object with the same interface when looking for it', (done) => {
            strategy.find(info, obj).then((received) => {
                expect(received).toContainLookingSame(obj);
                done();
            });
        });
        it('should change persisted object after update', (done) => {
            var modified:Person = new Person('Basia', 'Makota', 1);
            strategy.update(info, modified).then(() => {
                strategy.find(info, modified).then((received) => {
                    expect(received).toContainLookingSame(modified);
                    done();
                });
            });
        });
        it('should delete persisted object after delete', (done) => {
            strategy.delete(info, obj).then(() => {
                strategy.find(info, obj).then((received) => {
                    expect(received).not.toContain(obj);
                    done();
                });
            });
        });
        it('should find all stored objects when passing null as criteria', (done) => {
            strategy.find(info, null).then((received) => {
                expect(received).toEqual([obj]);
                done();
           });
        });
        it('should find all stored objects when passing only entityInfo', (done) => {
            strategy.find(info).then((received) => {
                expect(received).toEqual([obj]);
                done();
            });
        });
        it('should find object using pointer to it', (done) => {
            strategy.find(info, new Pointer(info.config.name, {
                id: 1
            })).then((received) => {
                expect(received).toEqual(obj);
                done();
            });
        });

        if(onPointers) {
            it('should use given mapper for transforming data with pointers into entity', (done) => {
                spyOn(info.mapper, 'fromObjectWithPointers');
                strategy.find(info, obj).then((received) => {
                    expect(info.mapper.fromObjectWithPointers).toHaveBeenCalled();
                    done();
                });
            });
            it('should use given mapper for transforming entity into object with pointers', (done) => {
                spyOn(info.mapper, 'toObjectWithPointers');
                var basia:Person = new Person('Basia', 'Mapieska', 2);
                strategy.create(info, basia).then(() => {
                    expect(info.mapper.toObjectWithPointers).toHaveBeenCalledWith(basia);
                    done();
                });
            });
        } else {
            it('should use given mapper for transforming data into entity', (done) => {
                spyOn(info.mapper, 'fromObject');
                strategy.find(info, obj).then((received) => {
                    expect(info.mapper.fromObject).toHaveBeenCalled();
                    done();
                });
            });
            it('should use given mapper for transforming entity into plain object', (done) => {
                spyOn(info.mapper, 'toObject');
                var basia:Person = new Person('Basia', 'Mapieska', 2);
                strategy.create(info, basia).then(() => {
                    expect(info.mapper.toObject).toHaveBeenCalledWith(basia);
                    done();
                });
            });
        }
    });
};
