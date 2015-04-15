import EntityInfo = require('./EntityInfo');
declare class Repository<T> {
    private entityInfo;
    private entities;
    constructor(entityInfo: EntityInfo);
    add(obj: T): void;
    remove(obj: T): void;
    findOne(): T;
    findAll(): T[];
    has(obj: T): boolean;
}
export = Repository;
