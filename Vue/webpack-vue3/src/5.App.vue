<template>
  <p :title="a + b">{{ a + b }}</p>
  <p>{{ a > b ? a : b }}</p>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
};
</script>

<style></style>
