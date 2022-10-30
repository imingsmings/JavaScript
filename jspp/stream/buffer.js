// Buffer 是核心模块;

// let buf1 = Buffer.allocUnsafe(10);  // 不安全，未经初始化的一段内存空间;
// let buf2 = Buffer.alloc(10);  // 经初始化的一段内存空间;

// //console.log(buf1, buf2);

// buf1.fill(10);

// buf2.fill(11);
// console.log(buf1, buf2);  // 16进制来表现的;  utf-8   utf-16；2- 4 字节;

// let buf3 = Buffer.from([1,2,3])
// let buf4 = Buffer.from('你好');
// console.log(buf3.length);
// console.log(buf4.length) ;

// let buf5 = Buffer.from('nihao');
// console.log(buf5);
// console.log(parseInt('6e', 16));
// console.log((110).toString(16));

// 截取， 拼接, 拷贝;

// let buf6 = buf5.slice(0, 2); // 
// console.log(buf6);
// buf6[0] = 1;
// console.log(buf5, buf6); // 同一个引用;  // buf 本身就是内存;  浅拷贝;

// let arr = [[1,2,3], 4,5];
// let arr1 = arr.slice();
// arr1[0].push(4);
// console.log(arr, arr1);

let buf1 = Buffer.from('js');
let buf2 = Buffer.from('++');

let buf3 = Buffer.alloc(4);

// console.log(buf3);
// buf1.copy(buf3, 0, 0, 2); // target[, targetStart[, sourceStart[, sourceEnd]]]
// console.log(buf3.toString('utf8'));
// buf2.copy(buf3, 2);
// console.log(buf3.toString('utf-8'));

// let buf4 = Buffer.concat([buf1, buf2], 5);
// console.log(buf4.toString());

// Buffer.alloc Buffer.from   Buffer.concat
// copy   slice  toString   length  index；

Buffer.prototype.myCopy = function(target,  targetStart = 0, sourceStart  = 0, sourceEnd = this.length){
  for(var i = sourceStart;  i < sourceEnd; i++){
    target[targetStart++] = this[i]
  }
};

Buffer.MyConcat  =  function(bufferList, length = bufferList.reduce((a ,b) => {
  return a + b.length;
}, 0)){

  let buffer = Buffer.alloc(length);
  let offset = 0;

  bufferList.forEach(buf => {
    buf.copy(buffer, offset);
    offset += buf.length;
  })
  return buffer.slice(0, offset);
}
// // MyConcat;

// console.log(buf3);
// buf1.myCopy(buf3, 0, 0, 2); // target[, targetStart[, sourceStart[, sourceEnd]]]
// console.log(buf3.toString());
// buf2.myCopy(buf3, 2);
// console.log(buf3.toString());

let buf4 = Buffer.MyConcat([buf1, buf2], 2);
console.log(buf4.toString());
















