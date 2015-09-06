import EntityInfo from './EntityInfo';
import EntityConfig from './EntityConfig';
import EntityContainer from './EntityContainer';
import {Mapper, MapperConstructor} from './Mapper';

class EntityRegistry {
    private entityContainer:EntityContainer;

    constructor (entityContainer:EntityContainer) {
        this.entityContainer = entityContainer;
    }

    public registerEntity<T> (entityConstructor:Function, config:EntityConfig, mapperConstructor:MapperConstructor):void {
        this.entityContainer.registerEntity(config, entityConstructor, mapperConstructor);
    }

    public getEntity (name:string):EntityInfo<any> {
        return this.entityContainer.getEntity(name);
    }
}

export default EntityRegistry;