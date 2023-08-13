// interface SquareConfig {
//     color?: string;
//     width?: number;
//     // [propName: string]: any;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     return {
//         color: config.color || 'red',
//         area: config.width ? config.width * config.width : 20
//     };
// }

// // let res = createSquare({colour: 'red', width: 100} as SquareConfig);
// // let res = createSquare({colour: 'red', width: 100});
// const objOptions = { colour: 'red', width: 100 };
// const res = createSquare(objOptions);

// console.log(res);

interface Animal {
    name: string;
    age?: string;
}

interface Zoo {
    location: string;
}

interface Dog extends Animal, Zoo{
    breed: string;
}

const dogOpt: Dog = {
    name: 'dog',
    breed: 'dog',
    location: 'Apple Park'
} 
