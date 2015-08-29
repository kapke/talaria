///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />

import {PersistenceStrategy} from '../PersistenceStrategy';
import EntityInfo from '../EntityInfo';
import Pointer from '../Pointer';
import NotFoundError from '../Error/NotFoundError';

export default class InMemoryOnPointersStrategy implements PersistenceStrategy {
    private objects:{[name:string]:Array<any>} = {};

    public constructor () {}

    public create<T> (info:EntityInfo<T>, obj:T):Promise<void> {
        return new Promise<void>((resolve) => {
            this.getCollection(info).push(info.mapper.toObjectWithPointers(obj));
            resolve();
        });
    }

    public update<T> (info:EntityInfo<T>, obj:T):Promise<void> {
        return new Promise<void>((resolve) => {
            this.findByKey(info, info.mapper.toObjectWithPointers(obj)).then((found) => {
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

    public find<T> (info:EntityInfo<T>, criteria:Object=null) : Promise<Array<T>>|Promise<T> {
        function resolvePointer (pointer:Pointer):Promise<any> {
            return this.find(info.dependencies[pointer.Name], pointer);
        }
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
            },
            pointerFilterFactory = (criteria:Pointer):(any: any)=>boolean => {
                return this.matchesKey.bind(this, info, criteria.Key);
            };

        return new Promise<Array<T>>((resolve) => {
            var promises : Promise<T|T[]>[],
                output : Promise<T|T[]>,
                collection = this.getCollection(info),
                returnSingle: boolean = false,
                filter : (any) => boolean;

            if(criteria == null) {
                filter = allFilter;
            } else if (criteria instanceof info.entity) {
                filter = keyFilter;
            } else if (criteria instanceof Pointer) {
                returnSingle = true;
                filter = pointerFilterFactory(criteria);
            } else {
                filter = strictFilter;
            }

            promises = collection.filter(filter).map((item) => {
                return info.mapper.fromObjectWithPointers(resolvePointer, item);
            });
            output = Promise.all(promises).then((items) => {
                if(returnSingle) {
                    if(items[0]) {
                        return items[0];
                    } else {
                        return Promise.reject(new NotFoundError(info, criteria));
                    }
                } else {
                    return items;
                }
            });
            resolve(output);
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