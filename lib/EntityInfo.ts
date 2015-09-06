import EntityConfig from './EntityConfig';
import {Mapper} from './Mapper';


export interface EntityInfoDependencies {
    [name:string]:EntityInfo<any>;
}

export default class EntityInfo<T> {
    public entity:Function;
    public config:EntityConfig;
    public mapper:Mapper<T>;
    public dependencies:EntityInfoDependencies;

    public constructor(entity:Function, config:EntityConfig, mapper:Mapper<T>, dependencies:EntityInfoDependencies = {}) {
        this.entity = entity;
        this.config = config;
        this.mapper = mapper;
        this.dependencies = dependencies;
    }
}