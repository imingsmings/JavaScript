// interface Todo {
//     title: string;
//     description: string;
// }

// // Partial -> type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
// }

// const todo1 = {
//     title: 'organize desk',
//     description: 'clear clutter',
// }

// const todo2 = updateTodo(todo1, {
//     description: 'throw out trash',
// })

// type MyPartial<T> = {
//     [P in keyof T]?: T[P] | undefined;
// }

// type MyToDo = MyPartial<Todo>;

// interface Props {
//     x?: number;
//     y?: number;
// }

// type RequiredProps = Required<Props>;

// const obj1 = { x: 5 };
// // Property 'y' is missing in type '{ x: number; }' but required in type 'Required<Props>'.
// const obj2: RequiredProps = {
//     x: 5,
//     y: 5,
// };

// type MyRequired<T> = {
//     [P in keyof T]-?: T[P];
// }

// type MyRequiredProps = MyRequired<Props>;

// interface Todo {
//     title: string;
//     description: string;
// }

// const todo: Readonly<Todo> = {
//     title: 'Delete inactive users',
//     description: 'clear out inactive users',
// }
// todo.description1 = 'hello'
// Cannot assign to 'description' because it is a read-only property.

// type MyReadonly<T> = {
//     readonly [P in keyof T]: T[P];
// }

// interface AnimalInfo {
//     age: number;
//     breed: string;
// }

// type CatName = 'cat' | 'dog';

// const animal: Record<CatName, AnimalInfo> = {
//     cat: { age: 5, breed: 'persian' },
//     dog: { age: 10, breed: 'german' },
// }

// type MyRecord<K extends keyof any, T> = {
//     [P in K]: T;
// }

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }

// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P];
// }

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Omit<Todo, 'description'>;

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }

// type TO = "b" | "c"
// type TO = Exclude<'a' | 'b' | 'c', 'a'>;

// type T1 = string | number
// type T1 = Exclude<string | number | (() => void), Function>

// type ShapeOptions = { kind: 'circle', radius: number } | { kind: 'square', sideLength: number };

// type T3 = {
//     kind: 'square';
//     sideLength: number;
// }
// type T3 = Exclude<ShapeOptions, { kind: 'circle' }>;

// type TO = "a"
// type TO = Extract<'a' | 'b' | 'c', 'a'>;

// type T1 = () => void
// type T1 = Extract<string | number | (() => void), Function>

// type ShapeOptions = { kind: 'circle', radius: number } | { kind: 'square', sideLength: number };

// type T3 = {
//     kind: 'circle';
//     radius: number;
// }
// type T3 = Extract<ShapeOptions, { kind: 'circle' }>;

// type T0 = string | number
// type T0 = NonNullable<string | number | undefined>;

// type T1 = string[]
// type T1 = NonNullable<string[] | null | undefined>;

// declare function f11(arg: { a: number, b: string }): void;
// type T0 = []
// type T0 = Parameters<() => string>;
// type T1 = [s: string]
// type T1 = Parameters<(s: string) => void>;
// type T2 = [arg: unknown]
// type T2 = Parameters<<T>(arg: T) => T>;
// type T3 = [arg: { a: number, b: string; }]
// type T3 = Parameters<typeof f11>;
// type T4 = unknown[]
// type T4 = Parameters<any>;
// type T5 = never
// type T5 = Parameters<never>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T6 = Parameters<string>;

// type T0 = ConstructorParameters<ErrorConstructor>;
// type T1 = ConstructorParameters<ArrayConstructor>;

// class Base {
    // constructor(a: number, b: number) { }
// }

// type T0 = [a: number, b: number]
// type T0 = ConstructorParameters<typeof Base>;

// type T1 = [pattern: string | RegExp, flags?: string | undefined]
// type T1 = ConstructorParameters<RegExpConstructor>;

// type T2 = unknown[]
// type T2 = ConstructorParameters<any>;

// type T0 = string
// type T0 = ReturnType<() => string>;
// type T1 = void
// type T1 = ReturnType<(s: string) => void>;
// type T2 = unknown
// type T2 = ReturnType<<T>() => T>;
// type T3 = number[]
// type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T4 = any
// type T4 = ReturnType<any>;
// type T5 = never
// type T5 = ReturnType<never>;

// class C {
//     x = 0;
//     y = 0;
// }

// type T = InstanceType<typeof C>;
// type T1 = InstanceType<any>;
// type T2 = InstanceType<never>;

// function toHex(this: Number) {
//     return this.toString(16);
// }

// function numberToString(n: ThisParameterType<typeof toHex>) {
//     return toHex.apply(n);
// }

// numberToString(123);

// function toHex(this: Number) {
//     return this.toString(16);
// }

// const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

// console.log(fiveToHex()); // 5

// type MyFunction = (this: string, num: number) => void;

// type UpdatedFunction = OmitThisParameter<MyFunction>;

// const myFunction: UpdatedFunction = function (num) {
//   console.log(num);
// };

// myFunction(42);

// type ObjectDescriptor<D, M> = {
//     data?: D;
//     methods?: M & ThisType<D & M>;
// }

// function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
//     let data: object = desc.data || {};
//     let methods: object = desc.methods || {};
//     return { ...data, ...methods } as D & M;
// }

// let objs = makeObject({
//     data: { x: 0, y: 0 },
//     methods: {
//         moveBy(dx: number, dy: number) {
//             this.x += dx;
//             this.y += dy;
//         }
//     }
// })

// 举例说明 Uppercase<StringType>

// type MyString = 'hello' | 'world';
// type MyUppercaseString = Uppercase<MyString>;

// type MyString = 'HELLO' | 'WORLD';
// type MyUppercaseString = "hello" | "world"
// type MyUppercaseString = Lowercase<MyString>;

// type MyString = 'hello' | 'world';
// type MyUppercaseString = "Hello" | "World"
// type MyUppercaseString = Capitalize<MyString>;

// type MyString = 'HELLO' | 'WORLD';
// type MyUppercaseString = "hELLO" | "wORLD"
// type MyUppercaseString = Uncapitalize<MyString>

// type PA = string
// type PA = Awaited<Promise<string>>;
// type PB = number
// type PB = Awaited<Promise<Promise<number>>>;
// type PC = null | boolean
// type PC = Awaited<null | Promise<Promise<Promise<boolean>>>>;

async function fetchData(): Promise<string> {
  return "Data has been fetched!";
}

type Result = Awaited<ReturnType<typeof fetchData>>;

async function main() {
  const result: Result = await fetchData();
  console.log(result); 
}

main();
