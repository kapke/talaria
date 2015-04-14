class Person {
    public id:Number;
    public name:string;
    public surname:string;

    constructor (name:string, surname:string, id:Number=null) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}

export = Person;