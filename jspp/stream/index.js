// 流 ？？

const {open}= require('fs/promises');  // File System;
//  const {promisify} = require('util')

// let res = fs.readFileSync('./buffer.js');  // 不同读取;
// console.log(res.toString());
// NodeJS 是单线程 还是多线程？  多线程; // NodeJs 的主线程是单线程;

// first error; 错误优先原则;
// 基于回调的异步api;
// fs.readFile('./buffer.js', function(err, data){
//   if(err)  console.log(err);
//   //  console.log(data.toString())

//  fs.writeFile('./copy.js', data, (err , data) => {
//     if(err)  console.log(err);
//     console.log('写入成功');
//   })
// })

// promisify
// let readFile = promisify(fs.readFile);

// readFile('./buffer.js')
// .then(res => {
//   console.log(res);
// })

// 异步读取文件在哪？  IO？  input(输入) output(输出);  // 内存;

// read （文件 => buffer）  write; (buffer => 文件)；

//   读取是  input操作;      //   写入是读取操作：output

// 一边读， 一边写;  // 流; =>  buffer ? 

// readFile   writeFile  => 一次性读取;
// flag (字符串)   权限; 0o777  0o666;
// fd 文件标识符; 3  setTimeout 的计时器标识 =>  t; 0, 1, 2

// let size = 3;
// let buffer = Buffer.alloc(3);

//fs.read(fd, buffer, offset, length, position, callback);

// 读取 io   input       写入 io 
// fs.open('./name.txt', 'r', 0o666, (err, fd) => {
//   fs.read(fd, buffer, 0, 3, 0, (err, bytesRead) => {
//     if(err) console.log(err);
//     console.log(bytesRead)
//     console.log(buffer.toString())
//   })
// })

// fs.open('./copy.txt', 'w', 0o666, (err, fd) => {
//   fs.write(fd, buffer, 0, 3, 0, (err, bytesWritten) => {
//     if(err) console.log(err);
//     console.log(bytesWritten);
//     console.log('写入成功');
//   })
// })

// 边读编写的方法;
copy('./name.txt' , './copy.txt', (err) => {
  console.log('写入成功');
})

async function copy(source, target, callback){

  const SIZE = 3;
  const buffer = Buffer.alloc(SIZE);

  let readOffset = 0;
  let writeOffset = 0;
  let rfd = await open(source, 'r', 0o666);
  let wfd = await open(target, 'w', 0o666);


  do{
    var {bytesRead} = await rfd.read(buffer, 0 , SIZE, readOffset);
   
    readOffset += bytesRead;
    console.log(bytesRead , 'bytesRead');
  
    var {bytesWritten, buffer: res} =  await wfd.write(buffer, 0, bytesRead, writeOffset);
    writeOffset += bytesWritten;
  
    console.log(res.toString());
    console.log('----------')
  }while(bytesRead === SIZE);
 

  // fs.open(source, 'r', 0o666, (err, rfd) => {
  //   if(err) callback(err);

  //   fs.open(target, 'w', 0o666, (err, wfd) => {
  //     if(err) callback(err);
  //     let next = () => {
  //       fs.read(rfd, buffer, 0, SIZE,readOffset, function(err, bytesRead){
  //         if(err) callback(err);
  //         readOffset += bytesRead;
  //         fs.write(wfd, buffer, 0, bytesRead, writeOffset, function(err, bytesWritten){
  //           if(err) callback(err);
  //           writeOffset += bytesWritten;

  //           if(bytesRead === SIZE){
  //             next();
  //           }else{
  //             fs.close(rfd, () => { console.log('关闭读取')});
  //             fs.close(wfd, () => { console.log('关闭写入')});
  //             callback();
  //           }
  //         })
  //       })
  //     }
  //     next();
  //   })
  // })
}

// d rwx r-x r-x   

// - rw- r-- r--   // 0o644
// - rw- r-- r--   //  0o644
// - rw- r-- r--  
// d rwx r-x r-x     // 文件夹; // 0o755

// d rwx rwx rwx    6 kuma  staff   192  8  5 21:16 .

// -rwxrwxrwx    1 kuma  staff  1908  8  5 20:46 buffer.js
// -rwxrwxrwx    1 kuma  staff  1140  8  5 21:22 index.js
// -rwxrwxrwx    1 kuma  staff    10  8  5 21:13 name.txt
// drwxrwxrwx    3 kuma  staff    96  8  5 21:16 static














