abstract class Duck {
    abstract name: string;
    abstract walk(): void;
    abstract shout(): void;

    getName () {
        console.log(this.name);
    }
}

class Bird extends Duck {
    name: string;

    constructor(name: string) {
        super()
        this.name = name
    }

    walk() {
        console.log('Bird walk');
    }

    shout() {
        console.log('Bird shout');
    }
}

class Person extends Duck {
    name: string;

    constructor(name: string) {
        super()
        this.name = name
    }

    walk() {
        console.log('Person walk');
    }

    shout() {
        console.log('Person shout');
    }
}

const bird: Duck = new Bird('bird')
const person: Duck = new Person('person')

bird.getName()
person.getName()