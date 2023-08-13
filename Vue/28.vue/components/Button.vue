<template>
  <button @click="handleBtnClick" class="btn">按钮</button>
</template>

<script>
export default {
  methods: {
    handleBtnClick(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
