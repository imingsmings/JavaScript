function deepClone(origin, target) {
  var target = arguments[1] || {};
  var arrayType = '[object Array]';
  for (var k in origin) {
    if (origin.hasOwnProperty(k)) {
      var property = origin[k];
      if (typeof property === 'object' && property !== null) {
        target[k] =
          Object.prototype.toString.call(property) === arrayType ? [] : {};
        deepClone(origin[k], target[k]);
      } else {
        target[k] = origin[k];
      }
    }
  }

  return target;
}

function deepClonePro(origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  const hashKey = hashMap.get(origin);
  if (hashKey) {
    return hashKey;
  }

  const target = new origin.constructor();

  hashMap.set(origin, target);

  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClonePro(origin[k], hashMap);
    }
  }

  console.log(hashMap);

  return target;
}
