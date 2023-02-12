import life from './assets/life.jpg';
import scssStyle from './scss/index.scss';
import { add } from './utils';
// import './App.jsx';

const oApp = document.querySelector('#app');
createImg(scssStyle.logo);

function createImg(className) {
  const oImg = new Image();
  oImg.src = life;
  oImg.className = className;
  oApp.append(oImg);
}

Promise.resolve('hello').then((result) => {
  console.log(result);
});

function createElement() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(
    ({ default: _ }) => {
      const result = _.join(['t1', 't2', 't3'], '-');
      const oDiv = document.createElement('div');
      oDiv.innerText = result;
      return oDiv;
    }
  );
}
const createElementPromise = createElement();
createElementPromise.then((div) => {
  document.body.append(div);
});

add(1, 2);
