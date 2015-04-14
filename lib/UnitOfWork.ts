import ps = require('./PersistenceStrategy');
import PersistenceStrategy = ps.PersistenceStrategy;
import Proxy = require('./Proxy');
import EntityInfo = require('./EntityInfo');

class TrackedObject {
    private info:EntityInfo;
    private object:any;

    get Info():EntityInfo {return this.info;}

    get Object():any {return this.object;}

    constructor (info:EntityInfo, object:any) {
        this.info = info;
        this.object = object;
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

    public registerNew (info:EntityInfo, obj) : Object {
        this.newObjects.push(new TrackedObject(info, obj));
        return obj;
    }

    public registerFetched (info:EntityInfo, obj) : Object {
        this.fetchedObjects.push(new TrackedObject(info, obj));
        return this.getProxy(info, obj);
    }

    public registerDirty (info:EntityInfo, obj) : Object {
        this.dirtyObjects.push(new TrackedObject(info, obj));
        return obj;
    }

    public registerDeleted (info:EntityInfo, obj) : Object {
        this.deletedObjects.push(new TrackedObject(info, obj));
        return obj;
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

    public rollback () {}

    private getProxy (info:EntityInfo, obj):Proxy {
        var setters = {};

        function modificationHandler (info:EntityInfo, target, name, value) {
            this.registerDirty(info, target);
            target[name] = value;
        }

        for(var name in obj) {
            setters[name] = {set: modificationHandler.bind(this, info, obj, name)};
        }
        return new Proxy(obj, setters);
    }
}
export = UnitOfWork;