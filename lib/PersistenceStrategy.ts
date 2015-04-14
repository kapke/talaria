///<reference path="../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import EntityInfo = require('./EntityInfo');
import rsvp = require('es6-promise');
import Promise = rsvp.Promise;

export interface PersistenceStrategy {
    create (entityInfo:EntityInfo, obj:any):Promise<void>;
    update (entityInfo:EntityInfo, obj:any):Promise<void>;
    delete (entityInfo:EntityInfo, obj:any):Promise<void>;
    find (entityInfo:EntityInfo, criteria:Object);
}