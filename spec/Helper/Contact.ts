import Person from './Person';

class Contact {
    public person:Person;
    public data:{string: any};

    constructor(person:Person, data:{string: any}) {
        this.person = person;
        this.data = data;
    }
}

export default Contact;