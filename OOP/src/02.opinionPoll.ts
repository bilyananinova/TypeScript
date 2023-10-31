class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    get personName() {
        return this.name;
    }

    set personName(name: string) {
        this.name = name;
    }

    get personAge() {
        return this.age;
    }

    set personAge(age: number) {
        this.age = age;
    }

    printDetails() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

let person = new Person('Peter', 12);
person.printDetails();

person.personName = 'Sofia';
person.personAge = 33;
person.printDetails();