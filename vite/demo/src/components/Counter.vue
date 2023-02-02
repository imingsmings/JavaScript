<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="compute('plus')">+</button>
    <button @click="compute('minus')">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    compute(type) {
      switch (type) {
        case '+':
          this.count++;
          break;
        case '-':
          this.count--;
        default:
          break;
      }
    },
  },
};
</script>
