import Person from './Person';

class Contact {
    public person:Person;
    public data:Object;

    constructor(person:Person, data:Object) {
        this.person = person;
        this.data = data;
    }
}

export default Contact;