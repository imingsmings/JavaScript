// declaration merging
// interface Box { 
//     type: string,
//     height: number;
// }
// interface Box {
//     type: number,
//     width: number;
// }
// const rect: Box = {
//     height: 5,
//     width: 6,
//     type: 'rect'
// }
// interface Cloner {
//     clone(animal: string): string;
// }
// interface Cloner { 
//     clone(animal: number): number;
// }
// interface Cloner { 
//     clone(animal: boolean): boolean;
// }
// interface Cloner {
//     clone(animal: boolean): boolean;
//     clone(animal: number): number;
//     clone(animal: string): string;
// }
// interface Document {
//     createElement(tagName: any): Element;
// }
// interface Document {
//     createElement(tagName: "span"): HTMLSpanElement;
// }
// interface Document {
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: "canvas"): HTMLCanvasElement;
// }
// interface Document {
//     createElement(tagName: "canvas"): HTMLCanvasElement;
//     createElement(tagName: "span"): HTMLSpanElement;
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: any): Element;
// }
// namespace Merging { 
//     export interface Box {
//         height: number;
//     }
// }
// const obj: Merging.Box = {
//     height: 5
// }
// namespace MyNamespace {
//     export function myFunction() {
//       console.log('Hello, world!');
//     }
// }
// namespace Animals {
//     export class Zebra {}
//     class Bird {}
// }
// namespace Animals {
//     export interface Legged {
//       numberOfLegs: number;
//     }
// }
// namespace Animals {
//     export interface Legged {
//       numberOfLegs: number;
//     }
//     export class Zebra {}
//     export class Dog {}
// }
// namespace MyFunSpace {
//     export function myFun() {
//         console.log('Hello, world! 1');
//     }
// }
// namespace MyFunSpace { 
//     export function myFun1() {
//         console.log('Hello, world! 2');
//     }
// }
// Animals.myFun1()
// namespace Animal {
//     let haveMuscles = true;
//     export function animalsHaveMuscles() {
//         return haveMuscles;
//     }
// }
// namespace Animal { 
//     export function doAnimalsHaveMuscles() {
//         // Error, because haveMuscles is not accessible here
//         return haveMuscles; 
//     }
// }
// class Album {
//     label: Album.AlbumLabel;
// }
// namespace Album { 
//     export class AlbumLabel {}
// }
// function buildLabel(name: string): string {
//     return buildLabel.prefix + name + buildLabel.suffix;
// }
// namespace buildLabel { 
//     export const suffix = "";
//     export const prefix = "Hello, ";
// }
// console.log(buildLabel("Sam Smith"));
// enum Color {
//     red = 1,
//     green = 2,
//     blue = 4,
// }
// namespace Color {
//     export function mixColor(colorName: string) {
//       if (colorName == "yellow") {
//         return Color.red + Color.green;
//       } else if (colorName == "white") {
//         return Color.red + Color.green + Color.blue;
//       } else if (colorName == "magenta") {
//         return Color.red + Color.blue;
//       } else if (colorName == "cyan") {
//         return Color.green + Color.blue;
//       }
//     }
// }
var Album = /** @class */ (function () {
    function Album() {
    }
    return Album;
}());
(function (Album) {
    var AlbumLabel = /** @class */ (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    }());
    Album.AlbumLabel = AlbumLabel;
    Album.num = 666;
})(Album || (Album = {}));
var obj = new Album();
console.log(obj);
console.log(Album.num);

console.log(Album);
