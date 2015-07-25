import EntityConfig from './EntityConfig';
import EntityInfo from './EntityInfo';
import Repository from './Repository';
import UnitOfWork from './UnitOfWork';
import { PersistenceStrategy } from './PersistenceStrategy';
export default class Talaria {
    private static instance;
    static getInstance(): Talaria;
    private defaultStrategy;
    private unitOfWork;
    private repositories;
    private registry;
    DefaultStrategy: PersistenceStrategy;
    DefaultUnitOfWork: UnitOfWork;
    registerEntity<T>(constructor: Function, config: EntityConfig, mapperKlass: {
        getInstance: Function;
    }): void;
    getEntityInfo(name: string): EntityInfo<any>;
    getRepository<T>(name: string): Repository<T>;
}
export { EntityInfo, EntityConfig, Proxy, Repository, UnitOfWork, PersistenceStrategy, Mapper };
