// interface ILength {
//     length: number;
// }
// class Box<T extends ILength> {
//     value: T;
//     constructor(value: T) {
//         this.value = value
//     }
// }
// const box1 = new Box({
//     length: 10,
//     name: 'box1'
// });
// { value: { length: 10, name: 'box1' } }
// console.log(box1);
// class Box<T> {
//  Static members cannot reference class type parameters.
//     static defaultValue: T;
// }
// class Base {
//     public name: string = 'base';
//     getName = (): string => {
//         return this.name;
//     }
// }
// const bb = new Base();
// const { getName } = bb;
// console.log(getName()); // base
// TypeScript input with 'this' parameter
// function fn(this: SomeType, x: number) {
//     /* ... */
// }
// // JavaScript output
// function fn(x) {
//     /* ... */
// }
var Base = /** @class */ (function () {
    function Base() {
        this.name = 'base';
    }
    Base.prototype.getName = function () {
        return this.name;
    };
    return Base;
}());
var bb = new Base();
console.log(bb.getName()); // base 
// const gg = bb.getName
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'Base'.
// console.log(gg());
