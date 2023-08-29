// function sealed(target) {
//     // do something here
// }

// function decoratorWrapper(value: string) {
//     return function (target) {
//         // do something here
//     }
// }

// function first() {
//     console.log('first(): factory evaluated');
//     return function (
//         target: unknown, 
//         propertyKey: unknown, 
//     ) {
//         console.log("first(): called");
//     }
// }

// function second() {
//     console.log('second(): factory evaluated');
//     return function (
//         target: unknown, 
//         propertyKey: unknown, 
//     ) {
//         console.log("second(): called");
//     }
// }

// class ExampleClass {
//     @first()
//     @second()
//     method() {
//     }
// }

/**
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
 */

// function sealed(constructor: Function) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype)
// }

// @sealed
// class BugReport {
//     type = "report";
//     title: string;
 
//     constructor(t: string) {
//         this.title = t;
//     }
// }

// function reportableClassDecorator<T extends { new (...args: any[]): {}}>(constructor: T) {
//     return class extends constructor {
//         reportingURL = 'https://www...'
//     }
// }

// @reportableClassDecorator
// class BugReport {
//     type = "report";
//     title: string;
    
//     constructor(t: string) {
//         this.title = t;
//     }
// }

// const bug = new BugReport("Needs dark mode");
/**
BugReport {
  type: 'report',
  title: 'Needs dark mode',
  reportingURL: 'https://www...'
}
 */
// console.log(bug);

// Property 'reportingURL' does not exist on type 'BugReport'.
// bug.reportingURL

// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value
//         console.log(target, propertyKey, descriptor);
        
//     }
// }

// class Greeter {
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message
//     }

//     @enumerable(true)
//     greet() {
//         return `Hello, ${this.greeting}`
//     }
// }

// class Greeter {
//     @format('YYYY-MM-DD')
//     date: string;

//     constructor(date: string) {
//         this.date = date;
//     }

//     greet() {
//     }
// }

// function format(formatString: string) {
//     return function (target: any, propertyKey: string) {
//         // ...
//     }
// }

// function log(target: any, propertyKey: string | symbol, parameterIndex: number) {
//     console.log(target, propertyKey, parameterIndex);
// }

// class C {
//     member(
//         @log x: number,
//         @log y: number
//     ) {
//         console.log('x, y ->', x, ',', y);
        
//     }
// }

// const c = new C();
// c.member(1, 2);


// function f(key:string): any {
//   return function (target: any, propertyKey: string) {
//     console.log('Running:', key);
//   };
// }

// class C {

//   @f('Method 2')
//   m2(@f('Parameter 2') foo:any) {}

//   @f('Property 2')
//   p2: number;

//   @f('Method 1')
//   m1(@f('Parameter 1') foo:any) {}

//   @f('Property 1')
//   p1: number;
// }

function f(key:string): any {
  return function (target: any, propertyKey: string) {
    console.log('Running:', key);
  };
}

class C {
  @f('A')
  @f('B')
  @f('C')
  m1(
    @f('D') x: number,
    @f('E') y: number
  ) {}
}
