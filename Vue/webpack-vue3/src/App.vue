<template>
  <h1>{{ title }}</h1>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const title = ref('hello vue 3');

    return {
      title,
    };
  },
};
</script>

<style scoped></style>
