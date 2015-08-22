///<reference path="../typings/tsd.d.ts" />

import {Promise} from 'es6-promise';

import EntityInfo from './EntityInfo';
import Pointer from './Pointer';

export interface PersistenceStrategy {
    create<T> (entityInfo:EntityInfo<T>, obj:T):Promise<void>;
    update<T> (entityInfo:EntityInfo<T>, obj:T):Promise<void>;
    delete<T> (entityInfo:EntityInfo<T>, obj:T):Promise<void>;
    find<T> (entityInfo:EntityInfo<T>, criteria:Object):Promise<Array<T>>;
    find<T> (entityInfo:EntityInfo<T>, pointer:Pointer):Promise<T>;
}