<template>
  <Home :num="num" @set-num="setNum" />
</template>

<script>
import Home from '././components/Home.vue';
export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    setNum() {
      console.log(this);
      this.num++;
    },
  },
};
</script>

<style></style>
