var Person = (function () {
    function Person(name, surname, id) {
        if (id === void 0) { id = null; }
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    return Person;
})();
module.exports = Person;
//# sourceMappingURL=Person.js.map