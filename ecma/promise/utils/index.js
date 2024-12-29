export function isPromiseLike(x) {
  if (typeof x === 'object' && x != null) {
    return isFunction(x.then)
  }

  return isFunction(x) && isFunction(x.then)
}

export function isFunction(value) {
  return typeof value === 'function'
}

export function isObject(value) {
  return typeof value === 'object' && value !== null
}
