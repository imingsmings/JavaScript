// let changeString = 'hello';
// changeString = 'world'

// const constantString = 'hello world'

// let xc: "hello" = "hello";
// OK
// xc = "hello";
// Type '"howdy"' is not assignable to type '"hello"'.
// xc = "howdy";

// function printText(s: string, alignment: 'left' | 'center' | 'right') {
    // ...
// }

// printText('text-align', 'left')
// Argument of type '"middle"' is not assignable to parameter of type '"left" | "center" | "right"'.
// printText('text-align', 'middle')

// interface Options {
//     width: number;
// }
// function configure(x: Options | "auto") {
//   // ...
// }
// configure({ width: 100 });
// configure("auto");
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
// configure("automatic");

// const objs = {
//     counter: 1
// }

// if (true) {
//     objs.counter = 2
// }

// function handleRequest(url: string, method: 'GET' | 'POST') {
//     console.log(method);
    
    // Fetching data
// }

// const req = {
//     url: 'https://www.test.com',
//     method: 'POST'
// } as const

// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'
// handleRequest(req.url, req.method)

// type hello = 'hello'
// type Greeting = "hello world"
// type Greeting = `${hello} world`

// type locale = 'zh' | 'en'
// type info = 'name' | 'address'

// type UserInfo = "user_zh" | "user_en" | "user_name" | "user_address"
// type UserInfo = `user_${locale | info}`

// type PropEventSource<T> = {
//     on: (eventName: `${string & keyof T}Change`, cb: (newValue: unknown) => void ) => void 
// }
// type PropEventSource<T> = {
//     on<Key extends string & keyof T>(eventName: `${Key}Change`, cb: (newValue: T[Key]) => void): void
// }

// declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

// const person = makeWatchedObject({
//     firstName: 'Tom',
//     lastName: 'Jason',
//     age: 12
// })

// person.on('firstNameChange', (newValue) => {
//     console.log(newValue);
// })

// type IteratorType<T> = T & { next: IteratorType<T> }
type IteratorType<T> = {
    value: T,
    next: IteratorType<T> | null
}

const list: IteratorType<number> = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}

console.log(list);
