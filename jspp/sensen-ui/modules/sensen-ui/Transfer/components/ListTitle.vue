<template>
  <h1 class="list-title">
    <slot></slot>
  </h1>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .list-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 38px;
    background-color: #efefef;
    font-size: 14px;
    color: #666;
    font-weight: normal;
    border-bottom: 1px solid #ddd;
  }
</style>