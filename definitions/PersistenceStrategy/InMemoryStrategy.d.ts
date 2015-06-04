/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />
import { PersistenceStrategy } from '../PersistenceStrategy';
import EntityInfo from '../EntityInfo';
export default class InMemoryStrategy implements PersistenceStrategy {
    private objects;
    constructor();
    create<T>(info: EntityInfo<T>, obj: T): Promise<void>;
    update<T>(info: EntityInfo<T>, obj: T): Promise<void>;
    delete<T>(info: EntityInfo<T>, obj: T): Promise<void>;
    find<T>(info: EntityInfo<T>, criteria: Object): Promise<Array<T>>;
    findByKey<T>(info: EntityInfo<T>, keyValue: Object): Promise<T>;
    private matchesKey<T>(info, ref, current);
    private getCollection<T>(info);
}
