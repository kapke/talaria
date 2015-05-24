/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />
import ps = require('../PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
import EntityInfo = require('../EntityInfo');
declare class InMemoryStrategy implements PersistenceStrategy {
    private objects;
    constructor();
    create(info: EntityInfo, obj: any): Promise<void>;
    update(info: EntityInfo, obj: any): Promise<void>;
    delete(info: EntityInfo, obj: any): Promise<void>;
    find(info: EntityInfo, criteria: Object): Promise<Array<any>>;
    findByKey(info: EntityInfo, keyValue: Object): Promise<any>;
    private matchesKey(info, ref, current);
    private getCollection(info);
}
export = InMemoryStrategy;
