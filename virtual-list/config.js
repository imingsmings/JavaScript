export const ITEM_HEIGHT = 101;
export const MAX_ITEM_COUNT =
  Math.ceil(
    document.querySelector('#J_scrollWrapper').offsetHeight / ITEM_HEIGHT
  ) + 1;
export const TIME_PER_FPS = 1000 / 30;
