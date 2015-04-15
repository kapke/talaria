import EntityConfig = require('./EntityConfig');
declare class EntityInfo {
    entity: any;
    config: EntityConfig;
    constructor(entity: any, config: EntityConfig);
}
export = EntityInfo;
