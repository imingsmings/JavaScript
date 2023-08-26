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
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = [];
        this.value = value;
    }
    return Observable;
}());
Observable.prototype.map = function (f) {
    return this.value.map(f);
};
