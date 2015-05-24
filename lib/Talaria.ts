import EntityConfig = require('./EntityConfig');
import EntityInfo = require('./EntityInfo');
import Repository = require('./Repository');
import Proxy = require('./Proxy');
import UnitOfWork = require('./UnitOfWork');
import ps = require('./PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
import InMemoryStrategy = require('./PersistenceStrategy/InMemoryStrategy');

class Talaria {
    public static EntityInfo = EntityInfo;
    public static EntityConfig = EntityConfig;
    public static Proxy = Proxy;
    public static Repository = Repository;
    public static UnitOfWork = UnitOfWork;

    private static instance : Talaria;

    public static getInstance () : Talaria {
        if(!Talaria.instance) {
            Talaria.instance = new Talaria();
        }
        return Talaria.instance;
    }

    private defaultStrategy : PersistenceStrategy = new InMemoryStrategy();
    private unitOfWork : UnitOfWork = new UnitOfWork(this.defaultStrategy);
    private entities : {[name:string]:EntityInfo} = {};
    private repositories : {[name:string]:Repository<any>} = {};

    get DefaultStrategy():PersistenceStrategy {
        return this.defaultStrategy;
    }

    /*
        Probably this should be removed and moved setting default strategy
        should be done in constructor
     */
    set DefaultStrategy(value:PersistenceStrategy) {
        this.defaultStrategy = value;
        this.unitOfWork = new UnitOfWork(value);
    }

    get DefaultUnitOfWork():UnitOfWork {
        return this.unitOfWork;
    }

    public registerEntity (constructor:any, config:EntityConfig) {
        this.entities[config.name] = new EntityInfo(constructor, config);
    }

    public getEntityInfo (name:string) : EntityInfo {
        return this.entities[name];
    }

    public getRepository<T> (name:string) : Repository<T> {
        if(!this.repositories[name]) {
            this.repositories[name] = new Repository<T>(this.getEntityInfo(name), this.unitOfWork, this.defaultStrategy);
        }
        return this.repositories[name];
    }
}

export = Talaria;