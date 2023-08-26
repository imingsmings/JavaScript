// import { Observable } from "./observable";

// declare module "./observable" {
//   interface Observable<T> {
//     map<U>(f: (x: T) => U): U[];
//   }
// }

// Observable.prototype.map = function (f) {
//     return this.value.map(f);
// };

// const o: Observable<number> = new Observable([1, 2, 3]);
// const mapped = o.map(x => x + 1);
// console.log(mapped);

// class Observable<T> {
//     public value: T[] = [];
//     constructor(value: T[]) {
//         this.value = value;
//     }
// }

// interface Observable<T> {
//     map<U>(f: (x: T) => U): U[];
// }

// Observable.prototype.map = function (f) {
//     return this.value.map(f);
// }

// observable.ts
class Observable<T> {
    // public value: T[] = [];
    // constructor(value: T[]) {
    //     this.value = value;
    // }
}

declare global {
    interface Array<T> {
      toObservable(): Observable<T>;
    }
}
  
Array.prototype.toObservable = function () {
    return new Observable();
};

