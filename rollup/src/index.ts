// import { chunk } from 'lodash-es'

// console.log(chunk([1, 2, 3, 4, 5], 2))
const fn = (str: string) => {
    console.log(str)
}

fn('hello')

Promise.resolve().then(() => {
    console.log(123)
})

const arr = [1, 2, 3, 4].map((item) => item * item)
console.log('arr:', arr)
