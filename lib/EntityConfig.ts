class EntityConfig {
    public name:string;
    public properties : string[];
    public key : string[];

    public constructor (name:string, properties:string[], key:string[] = []) {
        this.name = name;
        this.properties = properties;
        this.key = key;
    }
}

export default EntityConfig;