class Person {
    public id:number;
    public name:string;
    public surname:string;

    constructor (name:string, surname:string, id:number=null) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    greet () : String {
        return this.name + this.surname;
    }

    beSmith () {
        this.surname = 'Smith';
    }
}

export default Person;