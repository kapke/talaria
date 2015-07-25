import EntityInfo from './EntityInfo';
import EntityConfig from './EntityConfig';
import MapperContainer from './MapperContainer';
import {Mapper} from './Mapper';

class EntityRegistry {
    private mapperContainer:MapperContainer;
    private registry:{[name:string]:{
        resolved:boolean,
        info:EntityInfo<any>|any,
        data: {constructor: Function, config:EntityConfig, mapperKlass:{getInstance:Function}}}
    };

    constructor (mapperContainer:MapperContainer) {
        this.mapperContainer = mapperContainer;
        this.registry = {};
    }

    public registerEntity<T> (constructor:Function, config:EntityConfig, mapperKlass:{getInstance:Function}):void {
        this.mapperContainer.registerMapper(config.name, config.dependencies, mapperKlass);
        this.registry[config.name] = {
            resolved: false,
            info: null,
            data: {
                constructor: constructor,
                config: config,
                mapperKlass: mapperKlass
            }
        }
    }

    public getEntity (name:string):EntityInfo<any> {
        var item = this.registry[name];
        if(!item.resolved) {
            this.tryResolve(name);
        }
        return item.info;
    }

    private tryResolve (name:string) {
        var mapper:Mapper<any> = this.mapperContainer.getMapper(name),
            item = this.registry[name];
        item.info = new EntityInfo<any>(item.data.constructor, item.data.config, mapper);
    }
}

export default EntityRegistry;