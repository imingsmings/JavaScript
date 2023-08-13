<template>
  <!-- <div class="btn-container" @click="handleDivClick"> -->
  <!-- <button @click="$emit('handle-click', $event)" class="btn">
      <slot></slot>
    </button> -->
  <!-- <button @click="handleClick" class="btn">
      <slot></slot>
    </button> -->
  <!-- <button @click="handleClickOK" class="btn">
      <slot></slot>
    </button> -->
  <button-container>
    <!-- <button @click="handleBtnClick" class="btn">按钮</button> -->
    <Button />
  </button-container>
  <!-- </div> -->
</template>

<script>
import ButtonContainer from './ButtonContainer.vue';
import Button from './Button.vue';
export default {
  name: 'MyButton',
  components: {
    ButtonContainer,
    Button,
  },
  // inheritAttrs: false,
  // emits: ['handleClick'],
  // emits: ['click'],
  methods: {
    // handleClickOK(e) {
    //   console.log(e.target);
    //   this.$emit('click', e);
    // },
    // handleBtnClick(e) {
    //   console.log(e.target);
    // },
    // handleDivClick(e) {
    //   console.log(e.target);
    // },
  },
};
</script>

<style lang="scss" scoped>
.btn-container {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
.btn {
  border: none;
  background-color: orange;
  color: #fff;
  line-height: 28px;
  padding: 0 10px;
}
</style>
