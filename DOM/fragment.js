// var oUl = document.getElementById('list');
// var oFrag = document.createDocumentFragment();

// for (var i = 0; i < 10000; i++) {
//   var oLi = document.createElement('li');
//   oLi.innerHTML = i;
//   oLi.className = 'list-item';
//   oFrag.appendChild(oLi);
// }

// oUl.appendChild(oFrag);

var oUl = document.getElementById('list');
// console.log(oUl.hasChildNodes());

function hasChildren(node) {
  var children = node.childNodes;

  for (var i = 0; i < children.length; i++) {
    if (children[i].nodeType === 1) {
      return true;
    }
  }
  return false;
}

console.log(hasChildren(oUl));