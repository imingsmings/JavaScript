const go = new Go()

async function init() {
  const resp = await WebAssembly.instantiateStreaming(fetch('/main.wasm'), go.importObject)

  go.run(resp.instance)

  // document.getElementById('calc').onclick = () => {
  //   const a = Number(document.getElementById('a').value)
  //   const b = Number(document.getElementById('b').value)
  //   const sum = window.goAdd(a, b) // 调用 Go 导出函数
  //   document.getElementById('out').textContent = sum
  // }

  console.log(window.goAdd(1, 2))
}

init()
