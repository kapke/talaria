declare class Pointer {
    private name;
    private key;
    constructor(name: string, key: Object);
    toObject(): Object;
    static fromObject(data: Object): Pointer;
}
export default Pointer;
