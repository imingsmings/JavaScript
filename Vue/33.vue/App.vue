<template></template>

<script>
import { getCurrentInstance, inject, onBeforeMount } from 'vue';
export default {
  setup(props, ctx) {
    // console.log(props);
    // console.log(ctx);
    // const instance = getCurrentInstance();
    // console.log(instance.appContext.app.config.globalProperties.$msg);
    // const globalData = inject('globalMessage');
    // console.log(globalData);
    const globals = inject('globalProperties');
    console.log(globals);

    // onBeforeMount(() => {

    // })
  },
  mounted() {
    // console.log(this.$.appContext.app.config.globalProperties);
    console.log(this);
  },
  beforeMount() {
    console.log(this.$el);
  },
};
</script>

<style></style>
