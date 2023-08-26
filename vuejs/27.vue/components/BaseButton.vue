<template>
  <div>
    <button :class="['btn', $attrs.type]"><slot></slot></button>
    <!-- <p @click="$attrs.onClick">113</p> -->
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  // props: {
  //   type: {
  //     type: String,
  //     default: '',
  //   },
  // },
  mounted() {
    console.log(this.$attrs);
  },
};
</script>

<style scoped lang="scss">
.btn {
  border: none;
  line-height: 30px;
  color: #fff;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.5s;
}

.btn.primary {
  background-color: skyblue;
  &:hover {
    border: 1px solid skyblue;
    color: skyblue;
    background: none;
  }
}
.btn.warning {
  background-color: orange;
  &:hover {
    border: 1px solid orange;
    color: orange;
    background: none;
  }
}
.btn.danger {
  background-color: red;
  &:hover {
    border: 1px solid red;
    color: red;
    background: none;
  }
}
</style>
