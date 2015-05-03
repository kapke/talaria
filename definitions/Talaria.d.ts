import EntityConfig = require('./EntityConfig');
import EntityInfo = require('./EntityInfo');
import Repository = require('./Repository');
import Proxy = require('./Proxy');
import UnitOfWork = require('./UnitOfWork');
import ps = require('./PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
declare class Talaria {
    static EntityInfo: typeof EntityInfo;
    static EntityConfig: typeof EntityConfig;
    static Proxy: typeof Proxy;
    static Repository: typeof Repository;
    static UnitOfWork: typeof UnitOfWork;
    private static instance;
    static getInstance(): Talaria;
    private defaultStrategy;
    private unitOfWork;
    private entities;
    private repositories;
    registerEntity(constructor: any, config: EntityConfig): void;
    getEntityInfo(name: string): EntityInfo;
    getRepository<T>(name: string): Repository<T>;
    setDefaultStrategy(strategy: PersistenceStrategy): void;
    getDefaultStrategy(): PersistenceStrategy;
    getDefaultUnitOfWork(): UnitOfWork;
}
export = Talaria;
