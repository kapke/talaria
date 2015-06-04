/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
import EntityInfo from './EntityInfo';
export interface PersistenceStrategy {
    create<T>(entityInfo: EntityInfo<T>, obj: T): Promise<void>;
    update<T>(entityInfo: EntityInfo<T>, obj: T): Promise<void>;
    delete<T>(entityInfo: EntityInfo<T>, obj: T): Promise<void>;
    find<T>(entityInfo: EntityInfo<T>, criteria: Object): Promise<Array<T>>;
}
