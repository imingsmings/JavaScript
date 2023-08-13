// (() => {
//     // let x: number
//     let x = 3;

//     function test() {
//         return x
//     }
// })

// (number | null)[]
// let xx = [1, 2, {}]; 

// let yy = [1, 2, 'a', {a: 1}]
// let zz = [1, 2, 'a', {}] // the result of type inference is {}[], why ?

// let xx = [1, 2, null] // (number | null)[]
// let yy = [1, 2, 'a', {a: 1}] // (string | number | {a: number})[]
// let zz = [{}, 1, 2, 'a'] // {}[]

// let aaa = 1;
// let obj111 = {}

// obj111 = aaa

// class Zoo {}
// class Rhino extends Zoo{}
// class Elephant extends Zoo{}
// class Snake extends Zoo{}

// const zoo: Zoo[] = [new Rhino(), new Elephant(), new Snake()]

// window.addEventListener('mousedown', (event) => {
//     console.log(event.button);
//     // Property 'buton' does not exist on type 'MouseEvent'. Did you mean 'button'?
//     console.log(event.buton);
// }, false)

// window.addEventListener('scroll', (event) => {
//     // Property 'button' does not exist on type 'Event'.
//     console.log(event.button); //<- OK
// }, false)

window.addEventListener('scroll', handler, false)

function handler(e) {
    console.log(e);
}