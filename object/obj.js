// var obj = {
//   name: '张三',
//   sex: 'male'
// }

// obj.name = '李四';

// var obj = new Object();
// obj.name = '张三';
// obj.sex = '男士';

// function Teacher() {
//   this.name = '张三';
//   this.sex = '男士';
//   this.smoke = function () {
//     console.log('I am smoking');
//   };
// }

// var teacher = new Teacher();
// console.log(teacher);

function Numbers() {
  this.numbers = arguments;
  this.sum = 0;

  this.add = function () {
    this.sum = 0;
    for (var i = 0; i < this.numbers.length; i++) {
      this.sum += this.numbers[i];
    }
    return this.sum;
  };
  this.times = function () {
    this.sum = 1;
    for (var i = 0; i < this.numbers.length; i++) {
      this.sum *= this.numbers[i];
    }
    return this.sum;
  };
}

var num = new Numbers(-1, 1, 2, 3, 4, 5);
console.log(num);
console.log(num.add()); // 14
console.log(num.times()); // -120

function Car(options) {
  this.brand = options.brand;
  this.color = options.color;
  this.volume = options.volume;
}

var car = new Car({
  brand: 'BYD',
  color: 'White',
  volume: '1.5L',
});
console.log(car);

function Consumer(options) {
  this.name = options.name;
  this.age = options.age;
  this.income = options.income;

  this.select = function (carOptions) {
    this.car = new Car(carOptions);
  };
}

var consumer = new Consumer({
  name: 'wxm',
  age: 25,
  income: 16000,
});
consumer.select(car);

console.log(consumer);
