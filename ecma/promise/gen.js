function generator(iterable) {
  var ctx = {
    current: 0,
    next: 0,
    done: false,
    finish: function () {
      this.done = true
    }
  }

  return {
    next: function () {
      return {
        value: generator$(ctx),
        done: ctx.done
      }
    }
  }
}

function generator$(ctx) {
  while (1) {
    switch ((ctx.current = ctx.next)) {
      case 0:
        ctx.next = 1
        return 1
      case 1:
        ctx.next = 2
        return 2
      case 2:
        ctx.next = 3
        return 3
      case 3:
        ctx.finish()
        return 4
    }
  }
}

// var iter = generator([1, 2, 3, 4])
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

function* gen() {
  let r = yield Promise.resolve(1)
  console.log(r)
  r = yield Promise.resolve(2)
  console.log(r)
  r = yield Promise.resolve(3)
  console.log(r)
  return 4
}

var iter = gen()
// let { value, done } = iter.next()
// value.then((v) => {
//   let { value, done } = iter.next(v)
//   value.then((v) => {
//     let { value, done } = iter.next(v)
//     value.then((v) => {
//       let { value, done } = iter.next(v)
//     })
//   })
// })

function co(iterable) {
  return new Promise((resolve, reject) => {
    function walk(data) {
      const { value, done } = iterable.next(data)
      if (!done) {
        Promise.resolve(value).then(walk, reject)
      } else {
        resolve(value)
      }
    }

    walk()
  })
}

co(iter).then(
  (v) => {
    console.log(v)
  },
  (e) => {
    console.log(e)
  }
)
