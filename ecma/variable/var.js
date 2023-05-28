// // var a;
// // console.log(a);

// // let b;
// // console.log(b);

// var a = 1;
// console.log(globalThis.a);
// console.log(window.a);
// console.log(a)
// globalThis

// console.log(a);
// var a = 1;

function test() {
    a  = 1;
    var b = 2;

    var c = d = 3;

    console.log(b);
}

test();

console.log(a);
console.log(d);