// 返回类型默认是 vod
function noop1() {}
function noop2() {
  return;
}

type voidFunc = () => void;

const f1: voidFunc = () => {
  return 1 + 1;
};

const v1 = f1();
console.log(v1);

// Type 'boolean' is not assignable to type 'void'
function f2(): void {
  // return false;
}

console.log(f2());
