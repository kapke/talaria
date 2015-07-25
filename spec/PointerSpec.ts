///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import Pointer from '../lib/Pointer';
import personInfoFactory from './Helper/personInfoFactory';
import EntityInfo from '../lib/EntityInfo';
import Person from './Helper/Person';
import PersonMapper from './Helper/PersonMapper';

describe('Pointer', () => {
    var pointer:Pointer,
        personInfo:EntityInfo<Person>,
        person:Person,
        personMapper:PersonMapper,
        pointerObject:{__type:string, __entity:string, id:number};

    beforeEach(() => {
        personMapper = new PersonMapper();
        person = new Person('Ala', 'Makota', 1);
        personInfo = personInfoFactory.getPersonInfo();
        pointer = new Pointer(personInfo.config.name, personMapper.extractKey(person));
        pointerObject = {
            __type: 'pointer',
            __entity: personInfo.config.name,
            id: 1
        };
    });

    it('should be convertible into plain object', () => {
        expect(pointer.toObject()).toEqual(pointerObject);
    });
    it('should be possible to recreate pointer from object', () => {
        var recreated:Pointer = Pointer.fromObject(pointerObject);
        expect(recreated).toEqual(jasmine.any(Pointer));
        expect(recreated.toObject()).toEqual(pointerObject);
    });
});