import EntityConfig from './EntityConfig';
import { Mapper } from './Mapper';
export default class EntityInfo<T> {
    entity: any;
    config: EntityConfig;
    mapper: Mapper<T>;
    constructor(entity: any, config: EntityConfig, mapper: Mapper<T>);
}
