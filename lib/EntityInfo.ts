import EntityConfig from './EntityConfig';
import {Mapper} from './Mapper';

export default class EntityInfo<T> {
    public entity:any;
    public config:EntityConfig;
    public mapper:Mapper<T>;

    public constructor(entity:any, config:EntityConfig, mapper:Mapper<T>) {
        this.entity = entity;
        this.config = config;
        this.mapper = mapper;
    }
}