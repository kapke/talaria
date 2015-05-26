///<reference path="../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import EntityInfo from './EntityInfo';
import {Promise} from 'es6-promise';

export interface PersistenceStrategy {
    create (entityInfo:EntityInfo, obj:any):Promise<void>;
    update (entityInfo:EntityInfo, obj:any):Promise<void>;
    delete (entityInfo:EntityInfo, obj:any):Promise<void>;
    find (entityInfo:EntityInfo, criteria:Object):Promise<Array<any>>;
}