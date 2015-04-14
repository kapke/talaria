///<reference path="../typings/jasmine/jasmine.d.ts" />
var Proxy = require('../lib/Proxy');
describe('Proxy', function () {
    var obj, accessors, objProxy;
    beforeEach(function () {
        obj = {
            name: 'Ala',
            has: 'kota'
        };
        accessors = {
            name: {
                get: function () {
                    return obj.name;
                },
                set: function (value) {
                    obj.name = value;
                }
            }
        };
        objProxy = new Proxy(obj, accessors);
    });
    it('should have the same interface as original object', function () {
        for (var name in obj) {
            expect(obj[name]).toEqual(objProxy[name]);
        }
    });
    it('should call getter and return value when accessing property', function () {
        spyOn(accessors.name, 'get').and.callThrough();
        objProxy = new Proxy(obj, accessors);
        var name = objProxy.name;
        expect(name).toEqual(obj.name);
        expect(accessors.name.get).toHaveBeenCalled();
    });
    it('should just return value when getter not available', function () {
        var has = objProxy.has;
        expect(has).toEqual(obj.has);
    });
    it('should call setter and set new value when setting property value', function () {
        spyOn(accessors.name, 'set').and.callThrough();
        objProxy = new Proxy(obj, accessors);
        objProxy.name = 'Basia';
        expect(accessors.name.set).toHaveBeenCalledWith('Basia');
        expect(obj.name).toEqual('Basia');
        expect(objProxy.name).toEqual('Basia');
    });
    it('should just set property when setter not available', function () {
        objProxy.has = 'Psa';
        expect(objProxy.has).toEqual('Psa');
        expect(obj.has).toEqual('Psa');
    });
});
//# sourceMappingURL=ProxySpec.js.map