import { isFunction, isObject } from '../utils/index.js'

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    if (!isFunction(executor)) {
      throw new TypeError(`MyPromise resolver ${executor} is not a function`)
    }

    this.state = PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value

        this.onFulfilledCallbacks.forEach((fn) => {
          setTimeout(fn, 0, this.value)
        })
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach((fn) => {
          setTimeout(fn, 0, this.reason)
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            if (isFunction(onFulfilled)) {
              const x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } else {
              resolve(this.value)
            }
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            if (isFunction(onRejected)) {
              const x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } else {
              reject(this.reason)
            }
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            if (isFunction(onFulfilled)) {
              const x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } else {
              resolve(this.value)
            }
          } catch (e) {
            reject(e)
          }
        })

        this.onRejectedCallbacks.push(() => {
          try {
            if (isFunction(onRejected)) {
              const x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } else {
              resolve(this.value)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
    })

    return promise2
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError(`Chaining cycle detected for promise #<MyPromise>`))
  }

  let isCalled = false

  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    if (isObject(x) || isFunction(x)) {
      try {
        const then = x.then
        if (isFunction(then)) {
          then.call(
            x,
            (y) => {
              if (isCalled) return
              isCalled = true
              resolve(y)
            },
            (r) => {
              if (isCalled) return
              isCalled = true
              reject(r)
            }
          )
        } else {
          resolve(x)
        }
      } catch (e) {
        if (isCalled) return
        isCalled = true
        reject(e)
      }
    } else {
      resolve(x)
    }
  }
}

const p = new MyPromise((resolve, reject) => {
  // resolve('MyPromise fulfilled')
  // reject('MyPromise rejected')
  setTimeout(resolve, 1000, 456)
})

const p2 = p.then((value) => {
  throw new Error('unknow err')
  // return 1
  return new MyPromise((resolve) => {
    setTimeout(resolve, 1000, value)
  })
  // return p2
}, null)

p2.then(
  (v) => {
    console.log(v)
  },
  (e) => {
    console.log(e)
  }
)

export default MyPromise
