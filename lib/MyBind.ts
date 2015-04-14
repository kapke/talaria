import EntityConfig = require('./EntityConfig');
import EntityInfo = require('./EntityInfo');
import Repository = require('./Repository');

class MyBind {
    private static instance : MyBind;

    private entities : {[name:string]:EntityInfo} = {};
    private repositories : {[name:string]:Repository<any>} = {};

    public constructor () {}

    public registerEntity (constructor:any, config:EntityConfig) {
        this.entities[config.name] = new EntityInfo(constructor, config);
    }

    public getEntityInfo (name:string) : EntityInfo {
        return this.entities[name];
    }

    public getRepository<T> (name:string) : Repository<T> {
        if(!this.repositories[name]) {
            this.repositories[name] = new Repository<T>(this.getEntityInfo(name));
        }
        return this.repositories[name];
    }

    public static getInstance () : MyBind {
        if(!MyBind.instance) {
            MyBind.instance = new MyBind();
        }
        return MyBind.instance;
    }
}

export = MyBind;