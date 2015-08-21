export default class TalariaError {
    public type:string;
    public message:string;

    constructor(message:string, type:string='TalariaError') {
        this.message = message;
        this.type = type;
    }
}