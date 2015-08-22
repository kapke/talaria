export default class Pointer {
    private name:string;
    private key:Object;

    get Name ():string {
        return this.name;
    }

    get Key():Object {
        return this.key;
    }

    constructor(name:string, key:Object) {
        this.name = name;
        this.key = key;
    }

    public toObject ():Object {
        var data:Object = {
            __type: 'pointer',
            __entity: this.name
        };
        for(let name in this.key) {
            data[name] = this.key[name];
        }

        return data;
    }

    public static fromObject(data:Object):Pointer {
        var key:Object = {},
            name:string = (<{__entity:string}>data).__entity;
        for(let name in data) {
            if(name.substr(0, 2) != '__') {
                key[name] = data[name];
            }
        }

        return new Pointer(name, key);
    }
}