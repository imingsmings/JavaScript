// function firstElement(arr: any[]) {
//     return arr[0];
// }

// function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0];
// }

// console.log(firstElement([1, 2, 3]));
// console.log(firstElement(['a', 'b', 'c']));
// console.log(firstElement([]));

// function map<Input, Output>(arr: Input [], func: (arg: Input) => Output):Output[] {
//     return arr.map(func);
// }

// map(['1', '2', '3'], (n) => parseInt(n));

// function longest<T extends { length: number}> (a: T, b: T): T {
//     if (a.length > b.length) {
//         return a;
//     } else {
//         return b;
//     }
// }

// const longerArray = longest([1, 2], [1, 2, 3]);
// const longerString = longest('alice', 'bob');

// console.log(longerArray); // [1, 2, 2]
// console.log(longerString); // alice

// Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
// const longerNumber = longest(10, 100);

// function minimumLength<Type extends { length: number }>(
//     obj: Type, 
//     minimum: number
// ): Type {
//     if (obj.length >= minimum) {
//         return obj;
//     } else {
        /**
         *Type '{ length: number; }' is not assignable to type 'Type'.
        '{ length: number; }' is assignable to the constraint of type 'Type', 
        but 'Type' could be instantiated with a different subtype of 
        constraint '{ length: number; }'.
         */
        // return { length: minimum };
        // return {
        //     ...obj,
        //     length: minimum
        // }
//     }
// }

// arr = { length: 6 }
// arr is not compatible with type 'Type'
// const arr = minimumLength([1, 2, 3], 6);
// console.log(arr);

// function combineArray<T>(arr1: T[], arr2: T[]) : T[] {
//     return arr1.concat(arr2);
// }

// Type 'string' is not assignable to type 'number'.
// combineArray([1, 2, 3], ['a', 'b', 'c']);
// type numberAndString = number | string;
// combineArray<numberAndString>([1, 2, 3], ['a', 'b', 'c']);

// function f(n: number, dot?: number) {
//     console.log(n.toFixed(dot));
// }

// f(3.1415926)
// f(3.1415926, 2);

// type forEachCallbackFn = {
//     <T>(arg: T, index?: number): void;
// }

// type cbFn = <T>(arg: T, index?: number) => void;

// function myForEach<T>(arr: T[], callback: cbFn ): void {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// myForEach([1, 2, 3], (item, i) => {
//     // 'i' is possibly 'undefined'.
//     console.log(i.toFixed());
// });