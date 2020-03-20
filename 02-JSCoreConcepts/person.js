class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    getFullName() {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    getInitials() {
        return `${this.name[0].toUpperCase()}.${this.surname[0].toUpperCase()}.`
    }
}

const person1 = new Person('Jan', 'Nowak')
const person2 = new Person('Jan', 'Ignasik')


console.log(person1.getFullName())
console.log(person1.getInitials())

console.log(person2.getFullName())
console.log(person2.getInitials())