// const obj1 = {
//     x: 1,
//     y:
// }
// console.log(obj?.y);

// const arr = [
//     {
//         id: 1,
//         name: 'zs',
//     },
//     {
//         id: 2,
//         name: 'ww'
//     }
// ]

// const tar = arr.find((item) => item.id === 3)

// console.log(tar?.name);
/**
 if (tar) {
    console.log(tar.name)
 } else {
    console.log(undefined)
 }
 */

//  let a = 1 as string
// const aaa = (1 as unknown) as string

const objss = {
    a: 1,
    b: 2
}

type TypeKey = keyof typeof objss

for (let key in objss) {
    console.log(objss[<TypeKey>key]);
}