import { PersistenceStrategy } from './PersistenceStrategy';
import EntityInfo from './EntityInfo';
declare class UnitOfWork {
    private strategy;
    private newObjects;
    private dirtyObjects;
    private fetchedObjects;
    private deletedObjects;
    constructor(strategy: PersistenceStrategy);
    registerNew(info: EntityInfo<any>, obj: any): Object;
    registerFetched(info: EntityInfo<any>, obj: any): Object;
    registerDirty(info: EntityInfo<any>, obj: any): Object;
    registerDeleted(info: EntityInfo<any>, obj: any): Object;
    commit(): Promise<any>;
    rollback(): void;
    private getProxy(info, obj);
}
export default UnitOfWork;
