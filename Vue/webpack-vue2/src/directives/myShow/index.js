export default {
  bind(el, bindings) {
    // console.log(el);
    // console.log(bindings);
  },
  inserted(el, bindings) {
    // console.log(el);
    console.log(bindings);
    // if ()
    el.style.display = bindings.value ? 'block' : 'none';
  },
  update(el, bindings) {
    // console.log(el);
    // console.log(bindings);
    el.style.display = bindings.value ? 'block' : 'none';
  },
};
