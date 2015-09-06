class EntityConfig {
    public name:string;
    public properties : string[];
    public key : string[];
    public dependencies : string[];

    public constructor (name:string, properties:string[], key:string[] = [], dependencies:string[] = []) {
        this.name = name;
        this.properties = properties;
        this.key = key;
        this.dependencies = dependencies;
    }
}

export default EntityConfig;