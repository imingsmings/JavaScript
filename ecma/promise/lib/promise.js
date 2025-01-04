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

        this.onFulfilledCallbacks.forEach((fn) => fn())

        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach((fn) => fn())

        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
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

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        return MyPromise.resolve(onFinally()).then(() => {
          return value
        })
      },
      (reason) => {
        return MyPromise.resolve(onFinally()).then(() => {
          throw reason
        })
      }
    )
  }

  static resolve(value) {
    return new MyPromise((resolve, _) => {
      resolve(value)
    })
  }

  static reject(resson) {
    return new MyPromise((_, reject) => {
      reject(resson)
    })
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (!isIterable(promises)) {
        let text = typeof promises

        if (!(text === 'symbol' || text === 'undefined' || text === 'function')) {
          text += ` ${promises}`
        }

        throw new TypeError(
          `${text} is not iterable (cannot read property Symbol(Symbol.iterator))`
        )
      }

      const promiseArr = Array.from(promises)

      if (promiseArr.length === 0) {
        resolve(promiseArr)
        return
      }

      const resolves = []
      let currentIndex = 0

      promiseArr.forEach((promise, index) => {
        if (isPromise(promise)) {
          promise.then((value) => {
            resolver(value, index)
          }, reject)
        } else {
          resolver(promise, index)
        }
      })

      function resolver(value, index) {
        resolves[index] = value

        currentIndex++

        if (currentIndex === promiseArr.length) {
          resolve(resolves)
        }
      }
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      if (!isIterable(promises)) {
        let text = typeof promises

        if (!(text === 'symbol' || text === 'undefined' || text === 'function')) {
          text += ` ${promises}`
        }

        throw new TypeError(`${text} is not iterable (cannot read property Symbol(Symbol.iterator)`)
      }

      const promiseArr = Array.from(promises)

      if (promiseArr.length === 0) {
        reject(`AggregateError: All promises were rejected`)
      }

      let reasons = []
      let currentIndex = 0

      promiseArr.forEach((promise) => {
        if (isPromise(promise)) {
          promise.then(resolve, (reason) => {
            reasons[currentIndex] = reason
            currentIndex++
            if (currentIndex === promiseArr.length) {
              reject({
                error: `AggregateError: All promises were rejected`,
                reasons: reasons
              })
            }
          })
        } else {
          resolve(promise)
        }
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (!isIterable(promises)) {
        let text = typeof promises

        if (!(text === 'symbol' || text === 'undefined' || text === 'function')) {
          text += ` ${promises}`
        }

        throw new TypeError(`${text} is not iterable (cannot read property Symbol(Symbol.iterator)`)
      }

      const promiseArr = Array.from(promises)

      promiseArr.forEach((promise) => {
        if (isPromise(promise)) {
          promise.then(resolve, reject)
        } else {
          resolve(promise)
        }
      })
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      if (!isIterable(promises)) {
        let text = typeof promises

        if (!(text === 'symbol' || text === 'undefined' || text === 'function')) {
          text += ` ${promises}`
        }

        throw new TypeError(`${text} is not iterable (cannot read property Symbol(Symbol.iterator)`)
      }

      const promiseArr = Array.from(promises)

      if (promiseArr.length === 0) {
        resolve(promiseArr)
        return
      }

      const resolves = []
      let currentIndex = 0

      promiseArr.forEach((promise, index) => {
        if (isPromise(promise)) {
          promise.then(
            (value) => {
              resolver(value, index, FULFILLED)
            },
            (reason) => {
              resolver(reason, index, REJECTED)
            }
          )
        } else {
          resolver(promise, index, FULFILLED)
        }
      })

      function resolver(value, index, status) {
        if (status === FULFILLED) {
          resolves[index] = {
            status,
            value
          }
        } else {
          resolves[index] = {
            status,
            reason: value
          }
        }

        currentIndex++

        if (currentIndex === promiseArr.length) {
          resolve(resolves)
        }
      }
    })
  }

  static try(callback, ...args) {
    return new MyPromise((resolve, reject) => {
      try {
        const ret = callback(...args)
        if (isPromise(ret)) {
          ret.then(resolve, reject)
        } else {
          resolve(ret)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  static withResolvers() {
    let resolve = null
    let reject = null

    const promise = new MyPromise((_resolve, _reject) => {
      resolve = _resolve
      reject = _reject
    })

    return {
      promise,
      resolve,
      reject
    }
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

function isIterable(value) {
  return (
    typeof value == 'string' ||
    (value && value[Symbol.iterator] && isFunction(value[Symbol.iterator]))
  )
}

function isString(value) {
  return typeof value === 'string'
}

function isPromise(value) {
  return value instanceof MyPromise || value instanceof Promise
}

// MyPromise.defer = MyPromise.deferred = function () {
//   const deferred = {}

//   deferred.promise = new MyPromise((resolve, reject) => {
//     deferred.resolve = resolve
//     deferred.reject = reject
//   })

//   return deferred
// }

// module.exports = MyPromise
