import { PersistenceStrategy } from './PersistenceStrategy';
import EntityInfo from './EntityInfo';
declare class UnitOfWork {
    private strategy;
    private newObjects;
    private dirtyObjects;
    private fetchedObjects;
    private deletedObjects;
    constructor(strategy: PersistenceStrategy);
    registerNew(info: EntityInfo, obj: any): Object;
    registerFetched(info: EntityInfo, obj: any): Object;
    registerDirty(info: EntityInfo, obj: any): Object;
    registerDeleted(info: EntityInfo, obj: any): Object;
    commit(): void;
    rollback(): void;
    private getProxy(info, obj);
}
export default UnitOfWork;
