<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount">Add</button>
    <button @click="subCount">Minus</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  expose: ['addCount'],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
    subCount() {
      this.count--;
    },
  },
};
</script>

<style></style>
