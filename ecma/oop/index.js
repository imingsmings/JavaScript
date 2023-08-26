function People(options) {
  this.name = options.name;
  this.height = options.height;
  this.weight = options.weight;
}

People.prototype.intro = function () {
  console.log('I am ' + this.name);
};

var xm = new People({
  name: 'xiaoming',
  height: 175,
  weight: '62kg',
});

console.log(xm);

xm.intro();
