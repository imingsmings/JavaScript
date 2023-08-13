class Test {
    constructor() {
        console.log(new.target);
    }
    getName() {
        return this.name;
    }
}

new Test();
// Test()