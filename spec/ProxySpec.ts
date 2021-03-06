///<reference path="../typings/jasmine/jasmine.d.ts" />

import Proxy from '../lib/Proxy';

describe('Proxy', () => {
    var obj,
        accessors,
        objProxy;
    beforeEach(() => {
        obj = {
            name: 'Ala',
            has: 'kota',
            greet: () => {
                return "Cześć";
            }
        };
        accessors = {
            name: {
                get: () => { return obj.name;},
                set: (value) => { obj.name = value; }
            },
            greet: () => {
                return obj.greet();
            }
        };
        objProxy = new Proxy(obj, accessors);
    });
    it('should have the same interface as original object', () => {
        for(var name in obj) {
            if(typeof obj[name] == 'function') {
                expect(objProxy[name]).toEqual(jasmine.any(Function));
            } else {
                expect(obj[name]).toEqual(objProxy[name]);    
            }   
        }
    });
    it('should call getter and return value when accessing property', () => {
        spyOn(accessors.name, 'get').and.callThrough();
        objProxy = new Proxy(obj, accessors);
        var name = objProxy.name;
        expect(name).toEqual(obj.name);
        expect(accessors.name.get).toHaveBeenCalled();
    });
    it('should just return value when getter not available', () => {
        var has = objProxy.has;
        expect(has).toEqual(obj.has);
    });
    it('should call setter and set new value when setting property value', () => {
        spyOn(accessors.name, 'set').and.callThrough();
        objProxy = new Proxy(obj, accessors);
        objProxy.name = 'Basia';
        expect(accessors.name.set).toHaveBeenCalledWith('Basia');
        expect(obj.name).toEqual('Basia');
        expect(objProxy.name).toEqual('Basia');
    });
    it('should just set property when setter not available', () => {
        objProxy.has = 'Psa';
        expect(objProxy.has).toEqual('Psa');
        expect(obj.has).toEqual('Psa');
    });
    it('should call decorator when calling method', () => {
        spyOn(accessors, 'greet').and.callThrough();
        objProxy = new Proxy(obj, accessors);
        var greeting = objProxy.greet();
        expect(accessors.greet).toHaveBeenCalled();
        expect(greeting).toBe('Cześć');
    });
});