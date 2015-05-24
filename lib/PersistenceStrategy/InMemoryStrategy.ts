///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />

import ps = require('../PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
import EntityInfo = require('../EntityInfo');
import rsvp = require('es6-promise');
import Promise = rsvp.Promise;

class InMemoryStrategy implements PersistenceStrategy {
    private objects:{[name:string]:Array<any>} = {};

    public constructor () {}

    public create (info:EntityInfo, obj):Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.objects[info.config.name] = this.objects[info.config.name] || [];
            this.objects[info.config.name].push(obj);
            resolve();
        });
    }

    public update (info:EntityInfo, obj):Promise<void> {
        return this.findByKey(info, obj).then((found) => {
            for(var name in found) {
                found[name] = obj[name];
            }
        });
    }

    public delete (info:EntityInfo, obj):Promise<void> {
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

    public find (info:EntityInfo, criteria:Object) : Promise<Array<any>> {
        function allFilter (obj) : boolean {return true;}
        function strictFilter (obj) : boolean {
            for(var name in criteria) {
                if(obj[name] != criteria[name]) {
                    return false;
                }
            }
            return true;
        }

        return new Promise<Array<any>>((resolve, reject) => {
            var collection = this.getCollection(info),
                filter : (any) => boolean;
            if(criteria == null) {
                filter = allFilter;
            } else {
                filter = strictFilter;
            }
            resolve(collection.filter(filter));
        });
    }

    public findByKey (info:EntityInfo, keyValue:Object) : Promise<any> {
        var collection = this.getCollection(info);
        return new Promise<any>((resolve, reject) => {
            for(var i=0; i<collection.length; i++) {
                if(this.matchesKey(info, keyValue, collection[i])) {
                    resolve(collection[i]);
                }
            }
            reject();
        });
    }

    private matchesKey (info:EntityInfo, ref, current) : Boolean {
        for(var i=0; i<info.config.key.length; i++) {
            var name = info.config.key[i];
            if(ref[name] != current[name]) {
                return false;
            }
        }
        return true;
    }

    private getCollection (info: EntityInfo) : Array<any> {
        if(!this.objects[info.config.name]) {
            this.objects[info.config.name] = [];
        }
        return this.objects[info.config.name];
    }
}
export = InMemoryStrategy;