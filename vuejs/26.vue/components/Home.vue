<template>
  <div>
    <p>{{ num }}</p>
    <button @click="changeNum">+</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    num: Number,
    // setNum: Function,
  },
  emits: ['setNum'],
  methods: {
    changeNum() {
      // this.setNum();
      this.$emit('setNum');
    },
  },
};
</script>

<style></style>
