var oBox = document.getElementsByClassName('box')[0],
  oBox1 = document.getElementsByClassName('box1')[0],
  overCount = 0,
  outCount = 0;

oBox.onmouseover = function () {
  overCount++;
  console.log('overCount', overCount);
  oBox.style.backgroundColor = 'red';
};

oBox.onmouseout = function () {
  outCount++;
  console.log('outCount', outCount);
  oBox.style.backgroundColor = 'yellow';
};
