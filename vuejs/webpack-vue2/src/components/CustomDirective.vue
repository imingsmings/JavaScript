<template>
  <div>
    <div class="box" v-my-show="1 + 1"></div>
    <p><button @click="handleShow">Show/Hide</button></p>
  </div>
</template>

<script>
export default {
  name: 'CustomDirective',
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
</style>
