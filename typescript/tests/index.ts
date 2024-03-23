async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 5
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries > 0) {
      console.log("Retrying...");
      return await retry(fn, retries - 1);
    }
    throw err;
  }
}

const getString = () => Promise.resolve("hello");
const getNumber = () => Promise.resolve(42);

retry(getString).then((str) => {
  console.log(str);
});

retry(getNumber).then((num) => {
  console.log(num);
});