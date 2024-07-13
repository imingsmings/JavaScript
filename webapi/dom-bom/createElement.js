// var div = document.createElement('div');
// div.innerHTML = '123';
// var res = document.body.appendChild(div);
// document.body.appendChild(div);

// var text = document.createTextNode('456');
// document.body.appendChild(text);

// var comment = document.createComment('我是comment');
// var res = document.body.appendChild(comment);
// document.body.appendChild(comment);
// var res = document.body.appendChild(text);
// console.log(res);

var div = document.getElementsByTagName('div')[0];
var p = div.getElementsByTagName('p')[0];
var a = document.createElement('a');
div.insertBefore(a, p);

var h = document.createElement('h1');
// div.appendChild(h);
div.replaceChild(h, a);

// div.innerText

div.setAttribute('id', 'box');
