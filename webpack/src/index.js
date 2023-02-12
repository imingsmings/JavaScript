import life from './assets/life.jpg';
// import style from './css/index.css';
import scssStyle from './scss/index.scss';
// import lessStyle from './less/index.less';
// console.log(scssStyle);

const oApp = document.querySelector('#app');

// createImg(style.logo);
createImg(scssStyle.logo);
// createImg(lessStyle.logo);

function createImg(className) {
  const oImg = new Image();
  oImg.src = life;
  oImg.className = className;
  oApp.append(oImg);
}

Promise.resolve('hello').then((result) => {
  console.log(result);
});
