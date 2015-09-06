export default class Pointer {
    private name;
    private key;
    Name: string;
    Key: Object;
    constructor(name: string, key: Object);
    toObject(): Object;
    static fromObject(data: Object): Pointer;
}
