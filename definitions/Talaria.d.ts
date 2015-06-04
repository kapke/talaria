import EntityConfig from './EntityConfig';
import EntityInfo from './EntityInfo';
import Repository from './Repository';
import UnitOfWork from './UnitOfWork';
import { PersistenceStrategy } from './PersistenceStrategy';
import { Mapper } from './Mapper';
export default class Talaria {
    private static instance;
    static getInstance(): Talaria;
    private defaultStrategy;
    private unitOfWork;
    private entities;
    private repositories;
    DefaultStrategy: PersistenceStrategy;
    DefaultUnitOfWork: UnitOfWork;
    registerEntity<T>(constructor: any, config: EntityConfig, mapper: Mapper<T>): void;
    getEntityInfo(name: string): EntityInfo<any>;
    getRepository<T>(name: string): Repository<T>;
}
export { EntityInfo, EntityConfig, Proxy, Repository, UnitOfWork, PersistenceStrategy, Mapper };
