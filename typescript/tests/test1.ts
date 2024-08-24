// // const tuple = [
// //     'tesla',
// //     'model 3',
// //     'model X',
// //     'model Y'
// // ] as const

// // type TupleToObject<
// //     T extends ReadonlyArray<string | number>
// // > = {
// //     [k in T[number]]: k
// // }

// // type r1 = TupleToObject<typeof tuple>

// interface Todo {
//     title: string
//     description: string
//     completed: boolean
// }

// type TodoPreview = MyOmit<Todo, 'description' | 'title'>
// type T1 = MyOmit<Todo, 'description' | 'title'>

// // const todo: TodoPreview = {
// //     completed: false
// // }

// type MyExclude<A, B> = A extends B ? never : A

// type MyOmit<T, K extends keyof T> = {
//     [S in MyExclude<keyof T, K>]: T[S]
// }

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     readonly [key in K]: T[key]
// } & MyOmit<T, K>

// interface Todo {
//     title: string
//     description: string
//     completed: boolean
// }

// const todo: MyReadonly2<Todo> = {
//     title: 'Hey',
//     description: 'foobar',
//     completed: false
// }

// todo.title = 'Hello'
// todo.description = 'barFoo'
// todo.completed = true

type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

// type Expected = {
//     readonly x: {
//         readonly a: 1
//         readonly b: 'hi'
//     }
//     readonly y: 'hey'
// }

// type DeepReadonly<T> = {
//     readonly [K in keyof T]: T[K] extends object
//         ? DeepReadonly<T[K]>
//         : T[K]
// }

type DeepReadonly<T> = {
    readonly [k in keyof T]: T[k] extends Record<any, any>
        ? T[k] extends Function
            ? T[k]
            : DeepReadonly<T[k]>
        : T[k]
}

type Todo = DeepReadonly<X> //

const td: Todo = {
    x: {
        a: 1,
        b: 'hi'
    },
    y: 'hey'
}

// td.x = 1
// td.x.a = 2

type Arr = ['1', '2', '3']

type TupleToUnion<T> = T extends Array<infer K> ? K : never

type Test = TupleToUnion<Arr>

type Name = `Mr. ${string}`

// let name: Name = `Mr. Smith` // ok
// let name: Name = `Mrs. Smith` // error
