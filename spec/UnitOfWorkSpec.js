///<reference path="../typings/jasmine/jasmine.d.ts" />
var UnitOfWork = require('../lib/UnitOfWork');
var Person = require('./Helper/Person');
var personInfoFactory = require('./Helper/personInfoFactory');
var FakeStrategy = (function () {
    function FakeStrategy() {
    }
    FakeStrategy.prototype.create = function (info, obj) {
        throw new Error("Not implemented");
    };
    FakeStrategy.prototype.update = function (info, obj) {
        throw new Error("Not implemented");
    };
    FakeStrategy.prototype.delete = function (info, obj) {
        throw new Error("Not implemented");
    };
    FakeStrategy.prototype.find = function (info, criteria) {
        throw new Error("Not implemented");
    };
    return FakeStrategy;
})();
describe('Unit of Work', function () {
    var unit, obj, strategy, info;
    beforeEach(function () {
        strategy = new FakeStrategy();
        unit = new UnitOfWork(strategy);
        obj = new Person('Ala', 'Makota', 1);
        info = personInfoFactory.getPersonInfo();
    });
    it('should persist new object after commit using given strategy when registering object as new', function (done) {
        spyOn(strategy, 'create').and.callFake(function (info, registeredObj) {
            expect(registeredObj).toEqual(obj);
            done();
        });
        unit.registerNew(info, obj);
        unit.commit();
    });
    it('should update previously persisted object after commit using given strategy when registering object as dirty', function (done) {
        spyOn(strategy, 'update').and.callFake(function (info, registeredObj) {
            expect(registeredObj).toEqual(obj);
            done();
        });
        unit.registerDirty(info, obj);
        unit.commit();
    });
    it('should delete persisted object after marking it as deleted using given strategy', function (done) {
        spyOn(strategy, 'delete').and.callFake(function (info, deletedObj) {
            expect(deletedObj).toEqual(obj);
            done();
        });
        unit.registerDeleted(info, obj);
        unit.commit();
    });
    it('should detect fetched object change and register it as dirty automatically', function (done) {
        spyOn(strategy, 'update').and.callFake(function (info, registeredObj) {
            for (var name in obj) {
                expect(registeredObj[name]).toEqual(obj[name]);
            }
            done();
        });
        var fetched = unit.registerFetched(info, obj);
        for (var name in obj) {
            expect(fetched[name]).toEqual(obj[name]);
        }
        fetched.name = 'Basia';
        unit.commit();
    });
});
//# sourceMappingURL=UnitOfWorkSpec.js.map