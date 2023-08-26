<template>
  <Home />
  <p>{{ state.a }}</p>
</template>

<script>
import { provide, readonly, reactive } from 'vue';
import Home from './components/Home.vue';
export default {
  name: 'App',
  components: {
    Home,
  },
  setup() {
    const state = reactive({
      a: 1,
      b: 2,
    });

    provide('message', 'hello world');
    provide('state', state);

    return {
      state,
    };
  },
};
</script>

<style></style>
