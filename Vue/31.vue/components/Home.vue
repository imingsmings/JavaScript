<template>
  <div class="home">Home</div>
</template>

<script>
import { onMounted, onActivated } from '@vue/runtime-core';
export default {
  name: 'Home',
  setup() {
    onActivated(() => {
      console.log('onActivated');
    });
  },
};
</script>

<style></style>
