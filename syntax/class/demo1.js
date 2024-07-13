import ClassWithPrivate from './class.js'

const ins = new ClassWithPrivate({ a: 1 })

console.log(ins.getOptions())
