const oBtn = document.createElement('button');
const app = document.getElementById('root');
oBtn.innerText = '导入';
oBtn.addEventListener('click', handleImport, false);
app.appendChild(oBtn);

async function handleImport() {
  // const module = await import('./13.1.module.js');
  // module.default();

  const test = await import('./13/13.1.module.js').then((res) => res.default);
  test();
}
