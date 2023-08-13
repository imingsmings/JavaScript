// // /// <reference path="namespace.ts" />
// // MyNamespace1.doSomething();

// import { MyNamespace1 } from './namespace.ts'

// namespace Shapes {
//     export namespace Polygons {
//         export class Circle {}
//         export class Square {}
//     }
// }

// import polygons = Shapes.Polygons
// // equal to new Shapes.Polygons.Circle()
// let sq = new polygons.Circle()

// MyNamespace1.doSomething()


// declare namespace MyNamespace {
//     interface MyInterface {
//       name: string;
//       age: number;
//     }
  
//     function myFunction(): void;
//   }
  
//   // 使用环境命名空间中定义的类型和函数
// const obj: MyNamespace.MyInterface = {
//     name: "Alice",
//     age: 25,
// };
  
// MyNamespace.myFunction();