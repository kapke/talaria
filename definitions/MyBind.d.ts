import EntityConfig = require('./EntityConfig');
import EntityInfo = require('./EntityInfo');
import Repository = require('./Repository');
declare class MyBind {
    private static instance;
    private entities;
    private repositories;
    constructor();
    registerEntity(constructor: any, config: EntityConfig): void;
    getEntityInfo(name: string): EntityInfo;
    getRepository<T>(name: string): Repository<T>;
    static getInstance(): MyBind;
}
export = MyBind;
