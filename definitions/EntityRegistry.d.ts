import EntityInfo from './EntityInfo';
import EntityConfig from './EntityConfig';
import EntityContainer from './EntityContainer';
import { MapperConstructor } from './Mapper';
declare class EntityRegistry {
    private entityContainer;
    constructor(entityContainer: EntityContainer);
    registerEntity<T>(entityConstructor: Function, config: EntityConfig, mapperConstructor: MapperConstructor): void;
    getEntity(name: string): EntityInfo<any>;
}
export default EntityRegistry;
