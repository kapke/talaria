/**
 * Created by kapke on 23.03.15.
 */
///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import ps = require('../lib/PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
import EntityInfo = require('../lib/EntityInfo');
import Person = require('./Helper/Person');
import personInfoFactory = require('./Helper/personInfoFactory');
import customMatchersFactory = require('./Helper/customMatchersFactory');

module.exports = function strategySpec (strategyName : String, strategyFactory : () => PersistenceStrategy) : void {
    describe(strategyName + ' Persistence Strategy', () => {
        var strategy,
            obj:Person,
            info:EntityInfo;
        beforeEach((done) => {
            jasmine.addMatchers(customMatchersFactory);
            strategy = strategyFactory();
            obj = new Person('Ala', 'Makota', 1);
            info = personInfoFactory.getPersonInfo();
            strategy.create(info, obj).then(() => {
                done();
            });
        });

        it('should return object with the same interface when looking for it', (done) => {
            strategy.find(info, obj).then((received) => {
                expect(received).toContain(obj);
                done();
            });
        });
        it('should make object available when looking for it after creation', (done) => {
            strategy.find(info, obj).then((received) => {
                expect(received).toContain(obj);
                done();
            });
        });
        it('should change persisted object after update', (done) => {
            var modified:Person = new Person('Basia', 'Makota', 1);
            strategy.update(info, modified).then(() => {
                strategy.find(info, modified).then((received) => {
                    expect(received).toContainLookingSame(modified);
                    expect(obj).toLookSame(modified);
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
    });
};
