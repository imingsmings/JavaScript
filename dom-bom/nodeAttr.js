var box = document.getElementsByClassName('box')[0];
var h = box.getElementsByTagName('h1')[0];

// console.log(box.nodeName);
// console.log(h.nodeName);
// console.log(box.nodeValue);
// console.log(box.firstChild.nodeValue);

// console.log(box.nodeType); // 1

function elementChildren(node) {
  var arr = [];
  var children = node.childNodes;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.nodeType === 1) {
      arr.push(child);
    }
  }

  return arr;
}

// console.log(elementChildren(box));
// console.log(box.attributes);
console.log(box.getAttributeNode('class'));
console.log(box.getAttribute('class'));
console.log(box.hasChildNodes());

// console.log(document.__proto__ === HTMLDocument.prototype);

console.log(Object.prototype.toString.call(box));
