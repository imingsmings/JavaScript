namespace MyNamespace {
    interface MyInterface {
        name: string;
        age: number
    }
    export class MyClass {
        public name:string;
        public age:number;
        constructor(options: MyInterface) {
           this.name = options.name
           this.age = options.age
        }
    }
}
