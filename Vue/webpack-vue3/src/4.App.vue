<template>
  <div class="mustache">
    <p v-once>{{ title }}</p>
    <p>{{ htmlContent }}</p>
    <p v-html="htmlContent"></p>
    <p v-html="htmlTitle"></p>
    <button @click="changeTitle">Change</button>
  </div>
</template>

<script>
// import { h } from 'vue';
export default {
  data() {
    return {
      show: false,
      title: 'Mustache',
      htmlContent: '<span style="color:red;">123</span>',
      htmlTitle: '<h1 v-if="show">This is a title</h1>',
    };
  },
  // render() {
  //   return h('div', { class: 'mustache' }, [h('p'), null, this.title]);
  // },
  methods: {
    changeTitle() {
      this.title = '123';
    },
  },
};
</script>

<style scoped></style>
