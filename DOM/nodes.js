// var a = document.getElementsByTagName('a')[0];
// console.log(a.parentNode);
// console.log(document.parentNode);

// var li = document.getElementsByTagName('li')[0];
// console.log(li.childNodes);

// var li = document.getElementsByTagName('h2')[0];
// console.log(li.previousSibling);
// console.log(li.nextSibling);

// var li = document.getElementsByTagName('li')[0];
// console.log(li.parentElement); // ul
// console.log(document.parentElement); // null
// console.log(li.children);
// console.log(li.childElementCount);

var li = document.getElementsByTagName('li')[0];
// console.log(li.firstElementChild);
// console.log(li.lastElementChild);
var a = li.getElementsByTagName('a')[0];
console.log(a.nextElementSibling);
console.log(a.previousElementSibling);
