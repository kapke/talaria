class EntityConfig {
    public name:string;
    public properties : Array<string>;
    public key : Array<string>;

    public constructor (name:string, properties : Array<string>, key:Array<string> = []) {
        this.name = name;
        this.properties = properties;
        this.key = key;
    }
}

export = EntityConfig;