// function padLeft(padding: string | number, input: string): string {
//     // Argument of type 'string | number' is not assignable to parameter of type 'number'.
//     return ' '.repeat(padding) + input;
// }

// function padLeft(padding: string | number, input: string): string {
//     if (typeof padding === "number") {
//         return " ".repeat(padding) + input;
//     }
//     return padding + input;
// }

// function printAll(strs: string | string[] | null) {
//     if (typeof strs === "object") {
//         // 'strs' is possibly 'null'.
//         for (const s of strs) {
//             console.log(s);
//         }
//     } else if (typeof strs === "string") {
//         console.log(strs);
//     } else {
//         // do nothing
//     }
// }

// function getUsersOnlineMessage(numUsersOnline: number) {
//     if (numUsersOnline) {
//         return `There are ${numUsersOnline} online now!`;
//     }
//     return "Nobody's here. :(";
// }

// const byBoolean: boolean
// const byBoolean = Boolean('hello')
// const byDoubleExclamation: true
// const byDoubleExclamation = !!'hello'

// function printAll(strs: string | string[] | null) {
//    if (strs) {
//         if (strs && typeof strs === "object") {
//             for (const s of strs) {
//                 console.log(s);
//             }
//         } else if (typeof strs === "string") {
//             console.log(strs);
//         }
//    }
// }

// function multiplyAll(
//     values: number[] | undefined,
//     factor: number
// ): number[] | undefined {
//     if (!values) {
//         return values;
//     } else {
//         return values.map((x) => x * factor);
//     }
// } 

// multiplyAll([1, 2, 3], 2)

// function equality(x: number | string, y: boolean | string) {
//     if (x === y) {
//         // We can now call any 'string' method on 'x' or 'y'.
//         x.toUpperCase();
//         y.toLowerCase();
//     } else {
//         // other branch
//     }
// }

// function printAll(strs: string | string[] | null) {
//    if (strs !== null) {
//         if (typeof strs === "object") {
//             for (const s of strs) {
//                 console.log(s);
//             }
//         } 
//    } else if (typeof strs === "string") {
//         console.log(strs);
//    }
// }

// interface Container {
//     value: number | null | undefined;
// }

// function multiplyValue(container: Container, factor: number) {
//     // Remove both 'null' and 'undefined' from the type.
//     if (container.value != null) {
//         console.log(container.value);
//         container.value *= factor;
//     }
// }

// multiplyValue({ value: null }, 2)

// interface Value {
//     key?: string;
//     value: number;
// }

// function doSth(v: Value) {
//     if ('key' in v) {
//         console.log(v);
//     } else {
//         console.log(v);
//     }   
// }

// type Fish = { swim: () => void };
// type Bird = { fly: ()    => void };

// function move(animal: Fish | Bird) {
//     if ("swim" in animal) {
//         return animal.swim();
//     }
//     return animal.fly();
// }

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void, fly?: () => void };

// function move(animal: Fish | Bird | Human) {
//     if ('swim' in animal) {
//         // (parameter) animal: Fish | Human
//         console.log(animal);
//     } else {
//         // (parameter) animal: Bird | Human
//         console.log(animal);
//     }
// }

// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//         console.log(x.getTime());
//     } else {
//         console.log(x.toUpperCase());
//     }
// }

// logValue(new Date())

// let sx = Math.random() < 0.5 ? 10 : "hello world!";
// sx = 1
// console.log(sx);

// sx = 'abcd'
// console.log(sx);

// function example() {
//     let x: string | number | boolean;
//     x = Math.random() < 0.5;
//     // boolean
//     console.log(x);
//     if (Math.random() < 0.5) {
//         x = "hello";
//         // string
//         console.log(x);
//         return x;
//     } else {
//         x = 100;
//         // number
//         console.log(x);
//         return x;
//     }
// }

// function isString(value: unknown): value is string {
//     return typeof value === "string";
// }

// function example(x: unknown) {
//     if (isString(x)) {
//         x.toLowerCase()
//     } else {
//         console.log(x);
//     }
// }

interface CircleOptions {
    kind: "circle",
    radius: number;
}

interface SquareOptions {
    kind: "square",
    sideLength: number;
}

type Shape = CircleOptions | SquareOptions;

// function getArea(shape: Shape) {
//     if (shape.kind === 'circle') {
//         // shape -> CircleOptions
//         console.log(shape.radius);
//     } else  {
//         // shape -> SquareOptions
//         console.log(shape.sideLength);
//     }
// }

function getArea(shape:Shape) {
    switch (shape.kind) {
        case 'circle':
            // shape -> Circle
            console.log(shape.radius);
            break
        case 'square':
            // shape -> Square
            console.log(shape.sideLength);
            break
        default:
            console.log(shape);
    }
}



