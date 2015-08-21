import {PersistenceStrategy} from './PersistenceStrategy';
import Pointer from './Pointer';

export interface Mapper<T> {
    toObject(entity:T):Object;
    toPointer(entity:T):Pointer;
    toObjectWithPointers(strategy:PersistenceStrategy, entity:T):Promise<Object>;
    fromObject(data:Object):T;
    fromObjectWithPointers(strategy:PersistenceStrategy, dataWithPointers:Object):Promise<T>;
    extractKey(entity:T):Object;
}