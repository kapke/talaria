import {PersistenceStrategy} from './PersistenceStrategy';

export interface Mapper<T> {
    toObject(entity:T):Object;
    toObjectWithPointers(strategy:PersistenceStrategy, entity:T):Promise<Object>;
    fromObject(data:Object):T;
    fromObjectWithPointers(strategy:PersistenceStrategy, dataWithPointers:Object):Promise<T>;
    extractKey(entity:T):Object;
}