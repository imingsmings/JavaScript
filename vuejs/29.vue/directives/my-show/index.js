// export default {
//   mounted(el, bindings) {
//     el.style.display = bindings.value ? 'block' : 'none';
//   },
//   updated(el, bindings) {
//     el.style.display = bindings.value ? 'block' : 'none';
//   },
// };

export default (el, bindings) => {
  el.style.display = bindings.value ? 'block' : 'none';
};
