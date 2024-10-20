<template>
  <div class="row">
    <next-button>按钮</next-button>
    <next-button type="primary">primary按钮</next-button>
    <next-button type="success">success按钮</next-button>
    <next-button type="info">info按钮</next-button>
    <next-button type="danger">danger按钮</next-button>
    <next-button type="warning">warning按钮</next-button>
  </div>
  <div class="row">
    <next-button plain>按钮</next-button>
    <next-button plain type="primary">primary按钮</next-button>
    <next-button plain type="success">success按钮</next-button>
    <next-button plain type="info">info按钮</next-button>
    <next-button plain type="danger">danger按钮</next-button>
    <next-button plain type="warning">warning按钮</next-button>
  </div>
  <div class="row">
    <next-button plain round>按钮</next-button>
    <next-button plain round type="primary">primary按钮</next-button>
    <next-button plain round type="success">success按钮</next-button>
    <next-button plain round type="info">info按钮</next-button>
    <next-button plain round type="danger">danger按钮</next-button>
    <next-button plain round type="warning">warning按钮</next-button>
  </div>
  <div class="row">
    <next-button plain round circle>好</next-button>
    <next-button plain round circle type="primary">好</next-button>
    <next-button plain round circle type="success">学</next-button>
    <next-button plain round circle type="info">习</next-button>
    <next-button plain round circle type="danger">前</next-button>
    <next-button plain round circle type="warning">端</next-button>
  </div>
  <div class="row">
    <next-button disabled>按钮</next-button>
    <next-button disabled type="primary">primary按钮</next-button>
    <next-button disabled type="success">success按钮</next-button>
    <next-button disabled type="info">info按钮</next-button>
    <next-button disabled type="danger">danger按钮</next-button>
    <next-button disabled type="warning">warning按钮</next-button>
  </div>
  <div class="row">
    <next-button icon="milk-tea"></next-button>
    <next-button type="primary" icon="camera">照相机</next-button>
    <next-button type="success" icon="coffee"></next-button>
    <next-button type="info" icon="orange"></next-button>
    <next-button type="danger" icon="goblet"></next-button>
    <next-button type="warning" icon="cloudy"></next-button>
  </div>
  <div class="row">
    <next-button type="primary" @click="clickHandle">点击</next-button>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// const visible = ref(false)
// function closeDialog() {
//   visible.value = false
// }

// function clickHandle() {
//   visible.value = true
// }
</script>

<style scoped>
.row {
  margin-bottom: 20px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-java {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>