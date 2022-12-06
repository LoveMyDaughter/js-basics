const person = {
    firstName: 'Anton',
    lastName: 'Tsvihun',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(fullName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
};

person.fullName = 'Ant T';

console.log(person);