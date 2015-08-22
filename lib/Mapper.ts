import EntityConfig from './EntityConfig';
import {PersistenceStrategy} from './PersistenceStrategy';
import Pointer from './Pointer';

export interface Mapper<T> {
    toObject(entity:T):Object;
    toPointer(entity:T):Pointer;
    toObjectWithPointers(entity:T):Object;
    fromObject(data:Object):T;
    fromObjectWithPointers(pointerResolver:(pointer:Pointer)=>Promise<Object>, dataWithPointers:Object):Promise<T>;
    extractKey(entity:T):Object;
}

export interface MapperConstructor {
    getInstance(entityConfig:EntityConfig, ...mappers:Array<Mapper<any>>);
}