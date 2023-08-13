// const canvas = <HTMLCanvasElement>document.getElementById("canvas");
// const canvas1 = document.getElementById("canvas") as HTMLCanvasElement;

// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.
// const x = "hello" as unknown;

// let x = 'hello' as const
// let y = [10, 20] as const
// let z = { text: 'hello' } as const

// function getShapes() {
//     let result = [
//         { kind: 'circle', radius: 100 },
//         { kind: 'square', sideLength: 50 },
//     ] as const;
    
//     return result
// }

// export const colors = {
//     red: 'red',
//     blue: 'blue',
//     green: 'green',
// } as const


// let num = 12 as any;
// num = '12';

let name1: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name1!.length;