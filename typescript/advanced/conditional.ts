// interface Animal1 {
//     woof: () => void;
// }

// interface Dog1 extends Animal1{
//     live(): void;
// }

// // type TargetType = number
// type TargetType = Dog1 extends Animal1 ? number : string;

// SomeType extends OtherType ? TrueType : FalseType

// interface IdLabel {
//     id: number;
// }

// interface NameLabel {
//     name: string;
// }

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//     throw "unimplemented";
// }

// type IdOrName<T extends number | string> = T extends number ? IdLabel : NameLabel;

// function createLabel<T extends number | string>(idOrName: T): IdOrName<T> {
//     throw "unimplemented";
// }

// Type '"message"' cannot be used to index type 'T'.
// type MessageOf<T> = T['message']

// type MessageOf<T extends { message: unknown }> = T['message']
// type T1 = MessageOf<{ message: string }>

// type MessageOf<T> = T extends { message: unknown } ? T['message'] : never

// interface Email {
//     message: string
// }

// interface Address {
//     unit: string
// }

// type EmailContent = string
// type EmailContent = MessageOf<Email>

// type AddressContent = never
// type AddressContent = MessageOf<Address>

// type Flatten<T> = T extends unknown[] ? T[number] : T

// const arr = [1, 2, 'a', 'b']

// type Str = string | number
// type Str = Flatten<typeof arr>

// type Num = number
// type Num = Flatten<number>

// type Flatten<T> = T extends Array<infer Item> ? Item : T

// const arr = [1, 2, 'a', 'b']

// type Str = string | number
// type Str = Flatten<typeof arr>

// type GetReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never

// type Num = GetReturnType<() => number>
// type Str = GetReturnType<(x: string) => string>

// function stringOrNum(x: string): number;
// function stringOrNum(x: number): string;
// function stringOrNum(x: string | number): string | number;

// type T = ReturnType<typeof stringOrNum>

// type toArray<T> = T extends any ? T[] : never
type toArray<T> = [T] extends [any] ? T[] : never

// type MyArray = string[] | number[]
// type MyArray = (string | number)[]
// type MyArray = toArray<number | string>
/*
toArray<number | string>
toArray<number> | toArray<string>
number[] | string[]
*/

// type MyArray = (string | number)[]
type MyArray = toArray<number | string>