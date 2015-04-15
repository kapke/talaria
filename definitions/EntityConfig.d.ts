declare class EntityConfig {
    name: string;
    properties: Array<string>;
    key: Array<string>;
    constructor(name: string, properties: Array<string>, key?: Array<string>);
}
export = EntityConfig;
