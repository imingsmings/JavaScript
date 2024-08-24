import './index.scss';

import { setCurrentData, setDataSource, reactive } from './reactive';
import { render } from './render';
import { ITEM_HEIGHT } from './config';
import { setAnimationFrame } from './utils';

(() => {
  const oScroller = document.querySelector('#J_scrollWrapper');
  const oList = oScroller.querySelector('.list-wrapper');
  const $state = reactive(oList);

  const init = () => {
    initData(1, 20);
    render($state.currentData, $state.paddingSet, oList);
    bindEvent();
  };

  function initData(init, count) {
    setDataSource(init, count);
    setCurrentData();
  }

  function bindEvent() {
    oScroller.addEventListener('scroll', handleScroll, false);
  }

  function handleScroll() {
    setAnimationFrame(() => {
      $state.startIndex = Math.floor(this.scrollTop / ITEM_HEIGHT);
    });
  }

  init();
})();
