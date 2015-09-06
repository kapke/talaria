import {PersistenceStrategy} from './PersistenceStrategy';
import Proxy from './Proxy';
import EntityInfo from './EntityInfo';

class TrackedObject {
    private info:EntityInfo<any>;
    private object:any;
    private proxy:Proxy;

    get Info():EntityInfo<any> {return this.info;}

    get Object():any {return this.object;}

    get Proxy():Proxy {return this.proxy;}

    constructor (info:EntityInfo<any>, object:any, proxy:Proxy) {
        this.info = info;
        this.object = object;
        this.proxy = proxy;
    }
}

class UnitOfWork {
    private strategy:PersistenceStrategy;
    private newObjects:Array<TrackedObject> = [];
    private dirtyObjects:Array<TrackedObject> = [];
    private fetchedObjects:Array<TrackedObject> = [];
    private deletedObjects:Array<TrackedObject> = [];

    constructor(strategy:PersistenceStrategy) {
        this.strategy = strategy;
    }

    public registerNew (info:EntityInfo<any>, obj) : Object {
        var tracker:TrackedObject = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.newObjects.push(tracker);
        return tracker.Proxy;
    }

    public registerFetched (info:EntityInfo<any>, obj) : Object {
        var tracker:TrackedObject = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.fetchedObjects.push(tracker);
        return tracker.Proxy;
    }

    public registerDirty (info:EntityInfo<any>, obj) : Object {
        var tracker:TrackedObject = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.dirtyObjects.push(tracker);
        return tracker.Proxy;
    }

    public registerDeleted (info:EntityInfo<any>, obj) : Object {
        var tracker:TrackedObject = new TrackedObject(info, obj, this.getProxy(info, obj));
        this.deletedObjects.push(tracker);
        return tracker.Proxy;
    }

	public commit () {
        var strategy = this.strategy;

        this.newObjects.forEach(function (obj) {
            strategy.create(obj.Info, obj.Object);
        });
        this.dirtyObjects.forEach(function (obj) {
            strategy.update(obj.Info, obj.Object);
        });
        this.deletedObjects.forEach(function (obj) {
            strategy.delete(obj.Info, obj.Object);
        });
    }

    public rollback () {
        throw new Error('Not implemented');
    }

    private getProxy (info:EntityInfo<any>, obj):Proxy {
        var setters = {};

        var modificationHandler = (info:EntityInfo<any>, target, name, value) => {
            this.registerDirty(info, target);
            target[name] = value;
        };

        for(var name in obj) {
            setters[name] = {set: modificationHandler.bind(this, info, obj, name)};
        }
        return new Proxy(obj, setters);
    }
}
export default UnitOfWork;