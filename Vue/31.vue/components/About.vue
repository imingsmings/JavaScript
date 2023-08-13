<template>
  <div class="about">About</div>
</template>

<script>
import { onMounted, onActivated } from '@vue/runtime-core';
export default {
  name: 'About',
  setup() {
    onActivated(() => {
      console.log('onActivated');
    });
  },
};
</script>

<style></style>
