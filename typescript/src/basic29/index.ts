// abstract class User {
//     private username: string;
//     private password: string;
//     private userLevel: number;
//     private isValid: boolean;
// }

// interface User {
//     username: string;
//     password: string;
//     userLevel: number;
//     isValid: boolean;
//     checkUsername(): void;
//     checkPassword(): void;
// }

// const data = [
//     {
//         id: 1,
//         name: '11'
//     },
//     {
//         id: 2,
//         name: '22'
//     }
// ]

// function formatStrategicData<T extends { id: number }>(data: T[]){
//     return data.reduce((prev, current) => {
//         prev[current.id] = current
//         return prev
//     }, <{[key: number]: T}>{})
// }

// const res = formatStrategicData(data)
// console.log(res);

// interface ITodo {
//     id: number;
//     content: string;
//     completed: boolean;
// }

// type TodoArr = [ number, string, boolean];

// type TodoReturnType<T> = T extends any[] ? TodoArr : ITodo

// function getData(id: number):TodoReturnType<[]> {
//     return [1, 'a', false]
// }

// type Bool1 = 'a' extends 'a' ? true : false
// type Bool2 = 'a' | 'b' extends 'a' ? true : false
// type Bool3 = 'a' extends 'a' | 'b' ? true : false

// type Bool<T> = T extends 'a' ? string : number;
// type Bool2 = string | number
// type Bool2 = Bool<'a' | 'b'>

// type Bool = never extends 'a' ? string : number;
// type Bool2 = 'a' extends never ? string : number;

// type Bool<T> = T extends 'a' ? string : number;
// type Bool2 = never
// type Bool2 = Bool<never>

// type MyExclude<T, U> = T extends U ? never : T;
/**
type A = 'a' extends 'a' ? never : 'a';
type B = 'b' extends 'a' ? never : 'b';
type Res = never | 'b'
 */
// type Res1 = MyExclude<'a' | 'b', 'a'>

// type MyExtract<T, U> = T extends U ? T : never;
/**
type A = 'a' extends 'a' ? 'a' : never;
type B = 'b' extends 'a' ? 'b' : never;
type Res = 'a' | never
 */
// type Res1 = MyExtract<'a' | 'b', 'a'>

type MyRequired<T> = {
	[p in keyof T]-?: T[p];
}

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}