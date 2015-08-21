///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import Person from './Helper/Person';
import PersonMapper from './Helper/PersonMapper';
import Contact from './Helper/Contact';
import ContactMapper from './Helper/ContactMapper';
import {Mapper} from '../lib/Mapper';
import {PersistenceStrategy} from '../lib/PersistenceStrategy';
import InMemoryStrategy from '../lib/PersistenceStrategy/InMemoryStrategy';
import Pointer from '../lib/Pointer';
import EntityNotDistinguishableError from '../lib/Error/EntityNotDistinguishableError';
import customMatchersFactory from './Helper/customMatchersFactory';

export interface MapperSpecConfig<T> {
    name:string;
    mapperConstructor:()=>{getInstance: Function};
    getInstanceArgs: ()=>Array<Mapper<any>>;
    mapper:()=>Mapper<T>;
    entity:()=>T;
    data:()=>any;
    dataWithPointers:()=>any;
    key:()=>any;
    entityMatcher:(actual:T, expected:T)=>boolean;
    pointer:()=>Pointer;
    entityWithoutId:()=>T;
}

function mapperSpec<T> (config:MapperSpecConfig<T>):void {
    describe(config.name, () => {
        var persistenceStrategy:PersistenceStrategy = new InMemoryStrategy(),
            mapperConstructor:{getInstance:Function},
            mapper:Mapper<T>,
            entity:T,
            data:any,
            dataWithPointers:any,
            key:any;

        beforeEach(() => {
            jasmine.addMatchers(customMatchersFactory);
            mapperConstructor = config.mapperConstructor();
            mapper = config.mapper();
            entity = config.entity();
            data = config.data();
            dataWithPointers = config.dataWithPointers();
            key = config.key();
        });

        it('should be instantiable using static "getInstance" method', () => {
            expect(mapperConstructor.getInstance).toEqual(jasmine.any(Function));
            expect(mapperConstructor.getInstance.apply(null, config.getInstanceArgs)).toEqual(jasmine.any(mapperConstructor));
        });

        it('should convert entity into plain object', () => {
            expect(mapper.toObject(entity)).toEqual(data);
        });

        it('should convert data object into entity', () => {
            expect(config.entityMatcher(entity, mapper.fromObject(data))).toBe(true);
        });

        it('should extract only key from entity', () => {
            expect(mapper.extractKey(entity)).toEqual(key);
        });

        it('should throw error when it\'s impossible to extract key from entity', () => {
            expect(() => {
                mapper.extractKey(config.entityWithoutId())
            }).toThrowTalariaError(EntityNotDistinguishableError);
        });

        it('should convert entity into object with pointers', (done) => {
            mapper.toObjectWithPointers(persistenceStrategy, entity).then(function (data) {
                expect(data).toEqual(dataWithPointers);
                done();
            });
        });

        it('should convert object with pointers into entity', () => {
            mapper.fromObjectWithPointers(persistenceStrategy, dataWithPointers).then(function (entity) {
                expect(config.entityMatcher(entity, config.entity())).toBe(true);
            })
        });

        it('should convert object into pointer', () => {
            expect(mapper.toPointer(entity)).toEqual(config.pointer());
        });

        it('should throw error when object has not all required data for creating pointer', () => {
            expect(() => {
                mapper.toPointer(config.entityWithoutId())
            }).toThrowTalariaError(EntityNotDistinguishableError);
        });
    });
}

export default mapperSpec;