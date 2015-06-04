import EntityConfig from './EntityConfig';
import EntityInfo from './EntityInfo';
import Repository from './Repository';
import Proxy from './Proxy';
import UnitOfWork from './UnitOfWork';
import {PersistenceStrategy} from './PersistenceStrategy';
import InMemoryStrategy from './PersistenceStrategy/InMemoryStrategy';
import {Mapper} from './Mapper';

export default class Talaria {
    private static instance : Talaria;

    public static getInstance () : Talaria {
        if(!Talaria.instance) {
            Talaria.instance = new Talaria();
        }
        return Talaria.instance;
    }

    private defaultStrategy : PersistenceStrategy = new InMemoryStrategy();
    private unitOfWork : UnitOfWork = new UnitOfWork(this.defaultStrategy);
    private entities : {[name:string]:EntityInfo<any>} = {};
    private repositories : {[name:string]:Repository<any>} = {};

    get DefaultStrategy():PersistenceStrategy {
        return this.defaultStrategy;
    }

    /*
        Probably this should be removed and setting default strategy
        should be done in constructor
     */
    set DefaultStrategy(value:PersistenceStrategy) {
        this.defaultStrategy = value;
        this.unitOfWork = new UnitOfWork(value);
    }

    get DefaultUnitOfWork():UnitOfWork {
        return this.unitOfWork;
    }

    public registerEntity<T> (constructor:any, config:EntityConfig, mapper:Mapper<T>) {
        this.entities[config.name] = new EntityInfo<T>(constructor, config, mapper);
    }

    public getEntityInfo (name:string) : EntityInfo<any> {
        return this.entities[name];
    }

    public getRepository<T> (name:string) : Repository<T> {
        if(!this.repositories[name]) {
            this.repositories[name] = new Repository<T>(this.getEntityInfo(name), this.unitOfWork, this.defaultStrategy);
        }
        return this.repositories[name];
    }
}

export {EntityInfo, EntityConfig, Proxy, Repository, UnitOfWork, PersistenceStrategy, Mapper};