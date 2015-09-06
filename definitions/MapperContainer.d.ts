import { Mapper } from './Mapper';
declare class MapperContainer {
    private registeredMappers;
    private waiting;
    private unresolvedDependencies;
    constructor();
    registerMapper(name: string, dependencies: string[], klass: {
        getInstance: Function;
    }): void;
    getMapper(name: string): Mapper<any>;
    isRegistered(name: string): boolean;
    private checkDependencies(dependencies);
    private resolveDependencies(dependencies);
    private registerWaiting(name, dependencies, klass);
    private registerUnresolved(dependency, dependant);
    private isUnresolved(name);
}
export default MapperContainer;
