import { StringValidator } from './demo.ts'

class Validator implements StringValidator {
    isAcceptable(s: string) {
        return typeof s === 'string'
    }
} 

const vv = new Validator()
console.log(vv.isAcceptable('hello'));