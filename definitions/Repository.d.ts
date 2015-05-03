import EntityInfo = require('./EntityInfo');
import UnitOfWork = require('./UnitOfWork');
import ps = require('./PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
declare class Repository<T> {
    private entityInfo;
    private unitOfWork;
    private persistenceStrategy;
    private cache;
    constructor(entityInfo: EntityInfo, unitOfWork: UnitOfWork, persistenceStrategy: PersistenceStrategy);
    add(obj: T): Promise<void>;
    remove(obj: T): Promise<void>;
    findOne(): T;
    findAll(): Promise<Array<T>>;
    has(obj: T): Promise<boolean>;
}
export = Repository;
