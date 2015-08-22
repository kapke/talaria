import EntityConfig from './EntityConfig';
import { Mapper } from './Mapper';
export interface EntityInfoDependencies {
    [name: string]: EntityInfo<any>;
}
export default class EntityInfo<T> {
    entity: Function;
    config: EntityConfig;
    mapper: Mapper<T>;
    dependencies: EntityInfoDependencies;
    constructor(entity: Function, config: EntityConfig, mapper: Mapper<T>, dependencies?: EntityInfoDependencies);
}
