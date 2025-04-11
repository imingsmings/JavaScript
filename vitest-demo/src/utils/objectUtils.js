export function merge(obj1, obj2) {
  return {
    ...obj1,
    ...obj2
  }
}

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}
