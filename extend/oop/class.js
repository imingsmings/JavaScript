// const Test = (() => {
//   const c = 3;

//   class Test {
//     constructor(a, b) {
//       this.a = a;
//       this.b = b;
//       this.add = () => {
//         console.log(this);
//       };
//     }

//     // 挂载在实例对象
//     plus = () => {
//       console.log(this);
//     };

//     // 挂载在原型
//     minus() {
//       console.log(this);
//     }

//     static toNumber() {}
//   }

//   return Test;
// })();

// const obj = new Test(1, 2);
// console.log(obj);
// obj.minus();
// obj.plus();
// obj.add();
// let this1 = null;
// let this2 = null;

class Compute {
  constructor() {
    this.c = 3;
    // this2 = this;
    // console.log(this);
  }

  static toNumber(value) {
    return Number(value);
  }

  plus(a, b) {
    return Compute.toNumber(a) + Compute.toNumber(b);
  }

  minus(a, b) {
    return Compute.toNumber(a) - Compute.toNumber(b);
  }
}

class Test extends Compute {
  constructor(a, b) {
    super();
    // console.log(this);
    // this1 = this;
    this.a = a;
    this.b = b;
    this.info = '';
  }

  get log() {
    return this.info;
  }

  set log(newValue) {
    this.info = newValue;
  }

  result(type) {
    switch (type) {
      case 'plus':
        return this.plus(this.a, this.b);
      case 'minus':
        return this.minus(this.a, this.b);
      default:
        break;
    }
  }
}

const obj = new Test(1, '2');
console.log(obj);
console.log(obj.result('plus'));

obj.info = '123';
console.log(obj.info);
