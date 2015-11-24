import { MapperConstructor } from './Mapper';
import EntityConfig from './EntityConfig';
import EntityInfo from './EntityInfo';
declare class EntityContainer {
    private resolved;
    private waiting;
    private unresolvedDependencies;
    constructor();
    registerEntity(config: EntityConfig, entityConstructor: Function, mapperConstructor: MapperConstructor): void;
    getEntity(name: string): EntityInfo<any>;
    isRegistered(name: string): boolean;
    private checkDependencies(dependencies);
    private registerResolved(item);
    private registerWaiting(item);
    private registerUsingItem(item);
    private registerUnresolvedDependency(dependency, dependant);
    private isUnresolvedDependency(name);
    private createItem(config, entityConstructor, mapperConstructor);
    private resolveItem(item);
    private resolveDependants(name);
    private buildInfo(item);
    private buildMapper(item);
    private resolveDependencies(item);
}
export default EntityContainer;
