import EntityInfo = require('./EntityInfo');
import UnitOfWork = require('./UnitOfWork');
import ps = require('./PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
import rsvp = require('es6-promise');
import Promise = rsvp.Promise;

class Repository<T> {
    private entityInfo:EntityInfo;
    private unitOfWork:UnitOfWork;
    private persistenceStrategy:PersistenceStrategy;
    private cache:T[] = [];

	constructor (entityInfo:EntityInfo, unitOfWork:UnitOfWork, persistenceStrategy: PersistenceStrategy) {
        this.entityInfo = entityInfo;
        this.unitOfWork = unitOfWork;
        this.persistenceStrategy = persistenceStrategy;
	}
	public add(obj: T) : Promise<void> {
        return this.has(obj).then((result : boolean) => {
            if(!result) {
                this.cache.push(obj);
                this.unitOfWork.registerNew(this.entityInfo, obj);
            }
        });
    }
	public remove(obj : T) : Promise<void> {
        return this.has(obj).then((result : boolean) => {
            if(result) {
                this.cache.splice(this.cache.indexOf(obj), 1);
                this.unitOfWork.registerDeleted(this.entityInfo, obj);
            }
        });
    }
	public findOne() : T {
        throw new Error('Not implemented yet');
    }
    public findAll() : Promise<Array<T>> {
        return this.persistenceStrategy.find(this.entityInfo, null).then((found: T[]) => {
            found.forEach((item) => {
                if(this.cache.indexOf(item) == -1) {
                    this.cache.push(item);
                }
            });
            return this.cache.slice();
        });
    }
	public has(obj: T) : Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.cache.indexOf(obj) > -1) {
                resolve(true);
            } else {
                this.persistenceStrategy.find(this.entityInfo, obj).then((found) => {
                    found.forEach(function (item) {
                        this.cache.push(item);
                    });
                    resolve(found.length > 0);
                });
            }
        });
    }
}

export = Repository;