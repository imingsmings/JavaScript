const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const runner = (() => {
  if (globalThis.window && isObject(window) && isFunction(queueMicrotask)) {
    return queueMicrotask
  }

  if (isObject(process) && isFunction(process.nextTick)) {
    return process.nextTick
  }

  return setTimeout
})()

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
      if (value instanceof MyPromise || value instanceof Promise) {
        value.then(resolve, reject)
        return
      }

      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value

        this.onFulfilledCallbacks.forEach((fn) => {
          fn()
        })
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach((fn) => {
          fn()
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
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : (value) => value
    onRejected = isFunction(onRejected)
      ? onRejected
      : (reason) => {
          throw reason
        }

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        runner(() => {
          try {
            const x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }

      if (this.state === REJECTED) {
        runner(() => {
          try {
            const x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }

      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          runner(() => {
            try {
              const x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })

        this.onRejectedCallbacks.push(() => {
          runner(() => {
            try {
              const x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })

    return promise2
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError(`Chaining cycle detected for promise #<MyPromise>`))
  }

  let isCalled = false

  if (isObject(x) || isFunction(x)) {
    try {
      const then = x.then
      if (isFunction(then)) {
        then.call(
          x,
          (y) => {
            if (isCalled) return
            isCalled = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (isCalled) return
            isCalled = true
            reject(r)
          }
        )
      } else {
        if (isCalled) return
        isCalled = true
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

function isFunction(value) {
  return typeof value === 'function'
}

function isObject(value) {
  return typeof value === 'object' && value !== null
}

MyPromise.defer = MyPromise.deferred = function () {
  const deferred = {}

  deferred.promise = new MyPromise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}

module.exports = MyPromise
