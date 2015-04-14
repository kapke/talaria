/**
 * Created by kapke on 23.03.15.
 */
///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />
var Person = require('./Helper/Person');
var personInfoFactory = require('./Helper/personInfoFactory');
var customMatchersFactory = require('./Helper/customMatchersFactory');
module.exports = function strategySpec(strategyName, strategyFactory) {
    describe(strategyName + ' Persistence Strategy', function () {
        var strategy, obj, info;
        beforeEach(function (done) {
            jasmine.addMatchers(customMatchersFactory);
            strategy = strategyFactory();
            obj = new Person('Ala', 'Makota', 1);
            info = personInfoFactory.getPersonInfo();
            strategy.create(info, obj).then(function () {
                done();
            });
        });
        it('should return object with the same interface when looking for it', function (done) {
            strategy.find(info, obj).then(function (received) {
                expect(received).toContain(obj);
                done();
            });
        });
        it('should make object available when looking for it after creation', function (done) {
            strategy.find(info, obj).then(function (received) {
                expect(received).toContain(obj);
                done();
            });
        });
        it('should change persisted object after update', function (done) {
            var modified = new Person('Basia', 'Makota', 1);
            strategy.update(info, modified).then(function () {
                strategy.find(info, modified).then(function (received) {
                    expect(received).toContainLookingSame(modified);
                    expect(obj).toLookSame(modified);
                    done();
                });
            });
        });
        it('should delete persisted object after delete', function (done) {
            strategy.delete(info, obj).then(function () {
                strategy.find(info, obj).then(function (received) {
                    expect(received).not.toContain(obj);
                    done();
                });
            });
        });
    });
};
//# sourceMappingURL=PersistenceStrategySpec.js.map