import EntityConfig from './EntityConfig';

export default class EntityInfo {
    public entity:any;
    public config:EntityConfig;

    public constructor(entity:any, config:EntityConfig) {
        this.entity = entity;
        this.config = config;
    }
}