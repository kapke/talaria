declare class EntityConfig {
    name: string;
    properties: string[];
    key: string[];
    constructor(name: string, properties: string[], key?: string[]);
}
export default EntityConfig;
