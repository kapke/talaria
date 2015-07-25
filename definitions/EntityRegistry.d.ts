import EntityInfo from './EntityInfo';
import EntityConfig from './EntityConfig';
import MapperContainer from './MapperContainer';
declare class EntityRegistry {
    private mapperContainer;
    private registry;
    constructor(mapperContainer: MapperContainer);
    registerEntity<T>(constructor: Function, config: EntityConfig, mapperKlass: {
        getInstance: Function;
    }): void;
    getEntity(name: string): EntityInfo<any>;
    private tryResolve(name);
}
export default EntityRegistry;
