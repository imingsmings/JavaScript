<template>
  <h1 class="list-title">{{ title }}</h1>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '列表'
    }
  })
</script>

<style lang="scss" scoped>
  .list-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    font-weight: normal;
    margin: 0;
    color: #666;
    border-bottom: 1px solid #ddd;
    background-color: #efefef;
    font-size: 14px;
      }
</style>