var win,
  oStatus = document.getElementById('status'),
  oOpen = document.getElementById('open'),
  oClose = document.getElementById('close');

oOpen.addEventListener(
  'click',
  function () {
    win = window.open(
      'https://www.google.com',
      'google',
      'width=500,height=400',
      false
    );
    checkStatus();
  },
  false
);
oClose.addEventListener(
  'click',
  function () {
    win.close();
    checkStatus();
  },
  false
);

function checkStatus() {
  if (win.closed) {
    oStatus.innerText = '关闭';
  } else {
    oStatus.innerText = '打开';
  }
}
