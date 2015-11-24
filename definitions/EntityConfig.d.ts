declare class EntityConfig {
    name: string;
    properties: string[];
    key: string[];
    dependencies: string[];
    constructor(name: string, properties: string[], key?: string[], dependencies?: string[]);
}
export default EntityConfig;
