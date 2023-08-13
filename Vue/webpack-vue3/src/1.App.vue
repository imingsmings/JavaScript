<template>
  <!-- 组件模板 -->
  <div class="article">
    <h1>{{ title }}</h1>
    <p>
      <span>{{ author }}</span>
      <span>{{ dateTime }}</span>
    </p>
    <p :title="content">
      {{ content }}
    </p>
    <p>
      <span>Like: {{ like }}</span>
      <button @click="handleLike">Like</button>
    </p>
  </div>
</template>

<script>
// 组件逻辑
export default {
  name: 'App',
  data() {
    return {
      title: 'Title',
      author: 'wxm',
      dateTime: '2022-09-04',
      content: 'Description',
      like: 0,
    };
  },
  methods: {
    handleLike() {
      this.like++;
    },
  },
};
</script>

<style scoped>
/* 组件样式 */
</style>
