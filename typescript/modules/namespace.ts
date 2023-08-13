// namespace MyNamespace {
//     export function doSomething () {
//         console.log('do something');
//     }

//     interface MyInterface {
//         name: string;
//         age: number
//     }

//     export class MyClass {
//         public name:string;
//         public age:number;

//         constructor(options: MyInterface) {
//            this.name = options.name
//            this.age = options.age
//         }
//     }
// }

// MyNamespace.doSomething()
// const mc = new MyNamespace.MyClass({
//     name: 'Tim',
//     age: 20
// })
// // Namespace 'MyNamespace' has no exported member 'MyInterface'.
// let objs:MyNamespace.MyInterface;

export namespace MyNamespace1 {
    export function doSomething() {
      console.log('Doing something...');
    }
}