// class Point {
//     x = 10;
//     y = 10;

//     scale(n: number): void {
//         this.x *= n;
//         this.y *= n;
//     }
// }

// let x: number = 10;

// class C {
//     x: string = 'hello';

//     m() {
//         x = 100
//     }
// }

// class C {
//     _length = 0;

//     get length() {
//         return this._length;
//     }
    
//     set length(value) {
//         this._length = value;
//     }
// }

// class Thing {
//     _size  = 0;

//     get size(): number {
//         return this._size;
//     }

//     set size(value: number | string | boolean) {
//         const num = Number(value);

//         if (!Number.isFinite(num)) {
//             this._size = num;
//             return;
//         }

//         this._size = num
//     }
// }

// const th = new Thing();
// console.log(th);

// class MyClass {
//     [key: string]: boolean | ((s: string) => boolean);

//     constructor() {
//         this.a = true
//         this.b = false
//     }

//     check(s: string): boolean {
//         return this[s] as boolean;
//     }
// }

// const o = new MyClass();
// console.log(o.check('a'));
// console.log(o.check('c')); // undefined

// class MyClass {
//     [key: string]: ((x: number) => number) | ((x: string) => string);
  
//     constructor() {
//       this.add = (x: number) => x + 1;
//       this.concat = (x: string) => x + " world";
//     }
  
//     callMethod(key: ): number {s
//       const method = this[key];
//       return method(arg);
//     }
//   }
  
//   const o = new MyClass();
//   console.log(o.callMethod("add", 1)); // 2
//   console.log(o.callMethod("concat", "hello")); // "hello world"
//   console.log(o.callMethod("add", "hello")); // TypeError: method is not a function

// class Example {
//     data: { [key: string]: string } = {};
  
//     public setData(key: string, value: string): void {
//       this.data[key] = value;
//     }
  
//     public getData(key: string): string {
//       return this.data[key];
//     }
// }
  
// const example = new Example();
// example.setData("key1", "value1");
// example.setData("key2", "value2");

// console.log(example.getData("key1")); // 输出: "value1"
// console.log(example.getData("key2")); // 输出: "value2"
// console.log(example.getData("key3")); // 输出: undefined

class MyClass {
  data: Map<string, boolean | ((s: string) => boolean)>;

  constructor() {
    this.data = new Map<string, boolean | ((s: string) => boolean)>();
    this.data.set("a", true);
    this.data.set("b", false);
  }

  check(s: string): boolean {
    const value = this.data.get(s);
    if (typeof value === "function") {
      return value(s);
    } else {
      return value as boolean;
    }
  }
}

const o = new MyClass();
o.data.set("c", (s: string) => s.length > 0);
console.log(o.check("a")); // true
console.log(o.check("b")); // false
console.log(o.check("c")); // false