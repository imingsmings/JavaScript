// interface ITodoObj {
//     [key: string]: any
//     id: number,
//     content: string,
//     completed: boolean
// }

// const todoObj: ITodoObj = {
//     id: 1,
//     content: '',
//     completed: false
// }

// type TypeTodoArr = [number, string, boolean]

// const todoArr: TypeTodoArr = [1, 'todo', false]

// function setTodo<V extends ITodoObj[K], K extends keyof ITodoObj>(value: V, key: K): void
// function setTodo<V extends ITodoObj[keyof ITodoObj], K extends undefined>(): void

// function setTodo<V, K>(value: V, key: K) {

// }

// function test1(a: number, b: number): number {
//     return a + b
// }

// type TypeTestReturn = ReturnType<typeof test1>
// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any
// type TypeTestReturn = MyReturnType<typeof test1>

// type Flatten<T> = T extends Array<infer Item> ? Item : T
// type Flatten1 = Flatten<Array<number>>

// type TypeArr<T> = T extends number | string ? T[] : never
// type MyArr1 = TypeArr<number | string>

type toArray<T> = [T] extends [number] | [string] ? T[] : never

// type MyArray = never
type MyArray = toArray<number | string>