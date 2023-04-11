const oInput = document.getElementById('msg');
const oBtn = document.getElementById('btn');
const oStop = document.getElementById('stop');
const oList = document.getElementById('list')
let timer = null;

const init = () => {
  bindEvent()
  startPolling()
}

init()

function bindEvent() {
  oBtn.addEventListener('click', postMsg, false);
  oStop.addEventListener('click', stopPolling, false);
}

function startPolling() {
  timer = setInterval(getMsg, 5000)
}

function stopPolling() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function renderMsg(list) {
  oList.innerHTML = ''
  const oFragment = document.createDocumentFragment();
  list.forEach(item => {
    const oLi = document.createElement('li');
    oLi.innerHTML = item.msg;
    oFragment.appendChild(oLi);
  })
  oList.appendChild(oFragment)
}

async function getMsg() {
  const result = await axios.get('http://localhost:8080/getData');
  renderMsg(result.data.data)
}

async function postMsg(e) {
  const { value } = oInput;

  if (!value) return

  const result  = await axios.post('http://localhost:8080/postData', {
    id: Date.now(),
    msg: value
  }) 

  if (result.data.code === 0) {
    oInput.value = ''
  }
}
