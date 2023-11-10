// const o = {
//     a: 1,
//     getA() {
//         return this.a
//     }
// }

// function Test(a: number) {
//     // 'this' implicitly has type 'any' because it does not have a type annotation.
//     this.a = 1
// }

interface ITest {
    a: number,
    getA(): number
}

interface ITestConstructor {
    new (a: number): ITest,
    prototype: ITest
}

const Test = (function (this: ITest, a: number) {
    this.a = a
} as unknown) as ITestConstructor

Test.prototype.getA = function () {
    return this.a
}

const t = new Test(1)
console.log(t.getA());
