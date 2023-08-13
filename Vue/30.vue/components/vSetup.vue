<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ author }}</h3>
    <slot name="header"></slot>
  </div>
  <!-- <h4>{{ content }}</h4> -->
</template>

<script>
import { toRefs } from 'vue';
export default {
  name: 'vSetup',
  props: {
    title: String,
    author: String,
    // content: String,
  },
  emits: ['change'],

  setup(props, ctx) {
    // const { title, author } = toRefs(props);
    // ctx.emit('change');
    // console.log(ctx);
    // return {
    // title,
    // author,
    // content,
    // };
    ctx.expose({
      test() {
        console.log('test');
      },
    });
  },
};
</script>

<style></style>
