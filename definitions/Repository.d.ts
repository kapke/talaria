import EntityInfo from './EntityInfo';
import UnitOfWork from './UnitOfWork';
import { PersistenceStrategy } from './PersistenceStrategy';
export default class Repository<T> {
    private entityInfo;
    private unitOfWork;
    private persistenceStrategy;
    private cache;
    constructor(entityInfo: EntityInfo<T>, unitOfWork: UnitOfWork, persistenceStrategy: PersistenceStrategy);
    add(obj: T): Promise<T>;
    remove(obj: T): Promise<void>;
    findOne(): Promise<T>;
    findAll(): Promise<Array<T>>;
    has(obj: T): Promise<boolean>;
}
