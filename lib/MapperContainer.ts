import {Mapper} from './Mapper';
import MapperNotAvailableError from './Error/MapperNotAvailableError';

class MapperContainer {
    private registeredMappers:{[name:string]:Mapper<any>};
    private waiting:{[name:string]: {name: string, dependencies: string[], klass:{getInstance:Function}}};
    private unresolvedDependencies:{[name:string]: string[]};

    constructor () {
        this.registeredMappers = {};
        this.waiting = {};
        this.unresolvedDependencies = {};
    }

    public registerMapper (name:string, dependencies:string[], klass:{getInstance:Function}) {
        if(this.checkDependencies(dependencies)) {
            this.registeredMappers[name] = klass.getInstance.apply(klass, this.resolveDependencies(dependencies));
        } else {
            this.registerWaiting(name, dependencies, klass);
        }

        if(this.isUnresolved(name)) {
            let dependants:string[] = this.unresolvedDependencies[name];
            this.unresolvedDependencies[name] = undefined;
            dependants.map((name) => {
                return this.waiting[name];
            }).forEach((item) => {
                this.registerMapper(item.name, item.dependencies, item.klass);
            });
        }
    }

    public getMapper (name:string) {
        if(this.registeredMappers[name]) {
            return this.registeredMappers[name];
        } else {
            throw MapperNotAvailableError(name);
        }
    }

    public isRegistered (name:string):boolean {
        return this.registeredMappers[name]?true:false;
    }

    private checkDependencies (dependencies:string[]):boolean {
        for(let i=0; i<dependencies.length; i++) {
            if(!this.isRegistered(dependencies[i])) {
                return false;
            }
        }
        return true;
    }

    private resolveDependencies (dependencies: string[]):Mapper<any>[] {
        return dependencies.map((dependency:string):Mapper<any> => {
            return this.getMapper(dependency);
        });
    }

    private registerWaiting (name:string, dependencies:string[], klass:{getInstance:Function}) {
        this.waiting[name] = {name: name, dependencies: dependencies, klass:klass};
        dependencies.forEach((dependency) => {
            if(!this.isRegistered(dependency)) {
                this.registerUnresolved(dependency, name);
            }
        })
    }

    private registerUnresolved (dependency:string, dependant:string) {
        if(!this.unresolvedDependencies[dependency]) {
            this.unresolvedDependencies[dependency] = [];
        }
        this.unresolvedDependencies[dependency].push(dependant);
    }

    private isUnresolved (name:string):boolean {
        return this.unresolvedDependencies[name]?true:false;
    }
}

export default MapperContainer;