import { reactive } from 'vue';

const state = reactive({
  a: 1,
  b: 2,
});

export default {
  install(app) {
    app.provide('globalProperties', state);
  },
};
