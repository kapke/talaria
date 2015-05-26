import EntityInfo from './EntityInfo';
import UnitOfWork from './UnitOfWork';
import {PersistenceStrategy} from './PersistenceStrategy';
import {Promise} from 'es6-promise';

export default class Repository<T> {
    private entityInfo:EntityInfo;
    //should be used only for writing actions
    private unitOfWork:UnitOfWork;
    //should be used only for reading actions
    private persistenceStrategy:PersistenceStrategy;
    private cache:T[] = [];

	constructor (entityInfo:EntityInfo, unitOfWork:UnitOfWork, persistenceStrategy: PersistenceStrategy) {
        this.entityInfo = entityInfo;
        this.unitOfWork = unitOfWork;
        this.persistenceStrategy = persistenceStrategy;
	}
	public add(obj: T) : Promise<T> {
        return new Promise<T>((resolve, reject) => {
            var registered:T = <T>this.unitOfWork.registerNew(this.entityInfo, obj);
            this.cache.push(registered);
            resolve(registered);
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
	public findOne() : Promise<T> {
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