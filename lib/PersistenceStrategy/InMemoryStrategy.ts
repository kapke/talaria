///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />

import {PersistenceStrategy} from '../PersistenceStrategy';
import EntityInfo from '../EntityInfo';
import {Promise} from 'es6-promise';

export default class InMemoryStrategy implements PersistenceStrategy {
    private objects:{[name:string]:Array<any>} = {};

    public constructor () {}

    public create<T> (info:EntityInfo<T>, obj:T):Promise<void> {
        return new Promise<void>((resolve) => {
            this.getCollection(info).push(info.mapper.toObject(obj));
            resolve();
        });
    }

    public update<T> (info:EntityInfo<T>, obj:T):Promise<void> {
        return new Promise<void>((resolve) => {
            this.findByKey(info, info.mapper.toObject(obj)).then((found) => {
                for(var name in found) {
                    found[name] = obj[name];
                }
                resolve();
            });
        });
    }

    public delete<T> (info:EntityInfo<T>, obj:T):Promise<void> {
        var collection = this.getCollection(info);
        var resolved = false;
        return new Promise<void>((resolve, reject) => {
            for(var i=0; i<collection.length; i++) {
                if(this.matchesKey(info, obj, collection[i])) {
                    collection.splice(i, 1);
                    resolved = true;
                    resolve();
                }
            }
            if(!resolved) {
                reject();
            }
        });
    }

    public find<T> (info:EntityInfo<T>, criteria:Object) : Promise<Array<T>> {
        function allFilter (obj) : boolean {return true;}
        function strictFilter (obj) : boolean {
            for(var name in criteria) {
                if(obj[name] != criteria[name]) {
                    return false;
                }
            }
            return true;
        }
        var keyFilter = (obj:Object) : boolean => {
            return this.matchesKey(info, criteria, obj);
        };

        return new Promise<Array<T>>((resolve) => {
            var collection = this.getCollection(info),
                filter : (any) => boolean;

            if(criteria == null) {
                filter = allFilter;
            } else if (criteria instanceof info.entity) {
                filter = keyFilter;
            } else {
                filter = strictFilter;
            }
            resolve(
                collection
                    .filter(filter)
                    .map(info.mapper.fromObject));
        });
    }

    public findByKey<T> (info:EntityInfo<T>, keyValue:Object) : Promise<T> {
        var collection = this.getCollection(info);
        return new Promise<T>((resolve, reject) => {
            for(var i=0; i<collection.length; i++) {
                if(this.matchesKey(info, keyValue, collection[i])) {
                    resolve(collection[i]);
                }
            }
            reject();
        });
    }

    private matchesKey<T> (info:EntityInfo<T>, ref, current) : boolean {
        for(var i=0; i<info.config.key.length; i++) {
            var name = info.config.key[i];
            if(ref[name] != current[name]) {
                return false;
            }
        }
        return true;
    }

    private getCollection<T> (info: EntityInfo<T>) : Array<any> {
        if(!this.objects[info.config.name]) {
            this.objects[info.config.name] = [];
        }
        return this.objects[info.config.name];
    }
}