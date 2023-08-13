<template>
  <div>
    <sub-app />
  </div>
</template>

<script>
import { injectionKey } from './keys.js';
import SubApp from './Sub.vue';
import { computed } from '@vue/reactivity';
export default {
  name: 'App',
  components: {
    SubApp,
  },
  // provide: {
  //   message: 'hello world',
  // },
  data() {
    return {
      message: 'hello fox',
    };
  },
  provide() {
    return {
      // message: this.message,
      // message: computed(() => this.message),
      // appIns: this,
      [injectionKey]: computed(() => this.message),
    };
  },
  mounted() {
    const _this = this;
    setTimeout(function () {
      _this.message = 'hello world';
    }, 1000);
  },
};
</script>

<style></style>
