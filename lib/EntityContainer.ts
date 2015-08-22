import {Mapper, MapperConstructor} from './Mapper';
import EntityNotAvailableError from './Error/EntityNotAvailableError';
import EntityConfig from './EntityConfig';
import EntityInfo from './EntityInfo';

interface EntityMapItem {
    name: string;
    resolved: boolean;
    config: EntityConfig;
    info: EntityInfo<any>;
    dependencies: string[];
    resolvedDependencies: EntityMapItem[];
    mapperConstructor: MapperConstructor;
    mapper: Mapper<any>;
    entityConstructor: Function;
}

interface EntityMap {
    [name:string]:EntityMapItem;
}

class EntityContainer {
    private resolved:EntityMap;
    private waiting:EntityMap;
    private unresolvedDependencies:{[name:string]: string[]};

    constructor () {
        this.resolved = {};
        this.waiting = {};
        this.unresolvedDependencies = {};
    }

    public registerEntity (config:EntityConfig, entityConstructor:Function, mapperConstructor:MapperConstructor) {
        var item:EntityMapItem = this.createItem(config, entityConstructor, mapperConstructor);
        this.registerUsingItem(item);
    }

    public getEntity (name:string):EntityInfo<any> {
        if(this.resolved[name]) {
            return this.resolved[name].info;
        } else {
            throw new EntityNotAvailableError(name);
        }
    }

    public isRegistered (name:string):boolean {
        return this.resolved[name]?true:false;
    }

    private checkDependencies (dependencies:string[]):boolean {
        for(let i=0; i<dependencies.length; i++) {
            if(!this.isRegistered(dependencies[i])) {
                return false;
            }
        }
        return true;
    }

    private registerResolved (item:EntityMapItem) {
        this.resolved[item.name] = this.resolveItem(item);
    }

    private registerWaiting (item:EntityMapItem) {
        this.waiting[item.name] = item;
        item.dependencies.forEach((dependency) => {
            if(!this.isRegistered(dependency)) {
                this.registerUnresolvedDependency(dependency, item.name);
            }
        })
    }

    private registerUsingItem (item:EntityMapItem) {
        if (this.checkDependencies(item.dependencies)) {
            this.registerResolved(item);
            this.resolveDependants(item.name);
        } else {
            this.registerWaiting(item);
        }
    }

    private registerUnresolvedDependency (dependency:string, dependant:string) {
        if(!this.unresolvedDependencies[dependency]) {
            this.unresolvedDependencies[dependency] = [];
        }
        if(this.unresolvedDependencies[dependency].indexOf(dependant) == -1) {
            this.unresolvedDependencies[dependency].push(dependant);
        }
    }

    private isUnresolvedDependency (name:string):boolean {
        return this.unresolvedDependencies[name]?true:false;
    }

    private createItem (config:EntityConfig, entityConstructor:Function, mapperConstructor:MapperConstructor):EntityMapItem {
        return {
            name: config.name,
            resolved: false,
            config: config,
            dependencies: config.dependencies,
            resolvedDependencies: [],
            info: null,
            mapper: null,
            mapperConstructor: mapperConstructor,
            entityConstructor: entityConstructor
        };
    }

    private resolveItem (item:EntityMapItem):EntityMapItem {
        this.resolveDependencies(item);
        item.info = this.buildInfo(item);
        item.mapper = item.info.mapper;
        item.resolved = true;
        return item;
    }

    private resolveDependants (name) {
        if (this.isUnresolvedDependency(name)) {
            let dependants:string[] = this.unresolvedDependencies[name];
            this.unresolvedDependencies[name] = undefined;
            dependants.map((name) => {
                return this.waiting[name];
            }).forEach((item:EntityMapItem) => {
                this.registerUsingItem(item);
            });
        }
    }

    private buildInfo (item:EntityMapItem):EntityInfo<any> {
        var dependenciesMap:{[name:string]:EntityInfo<any>} = {},
            mapper = this.buildMapper(item);

        item.resolvedDependencies.forEach((item:EntityMapItem) => {
            dependenciesMap[item.name] = item.info;
        });

        return new EntityInfo(item.entityConstructor, item.config, mapper, dependenciesMap);
    }

    private buildMapper (item:EntityMapItem):Mapper<any> {
        var that = item.mapperConstructor,
            argsArray:Array<any> = [item.config];

        item.resolvedDependencies.forEach((dependency) => {
            argsArray.push(dependency.mapper);
        });

        return item.mapperConstructor.getInstance.apply(that, argsArray);
    }

    private resolveDependencies (item:EntityMapItem) {
        item.resolvedDependencies = item.dependencies.map((name:string) => {
            return this.resolved[name];
        });
    }
}

export default EntityContainer;