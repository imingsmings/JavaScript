import { TIME_PER_FPS } from './config';

export function getData(init, count) {
  const arr = [];
  for (let i = init; i < count; i++) {
    arr.push(i);
  }
  return arr;
}

export function setAnimationFrame(callback) {
  const beginTime = Date.now();

  requestAnimationFrame(function cb() {
    const endTime = Date.now();
    callback();

    if (endTime - beginTime >= TIME_PER_FPS) {
      beginTime = endTime;
      requestAnimationFrame(cb);
    }
  });
}
