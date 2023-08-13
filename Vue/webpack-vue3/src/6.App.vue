<template>
  <div>
    <p>
      <a :href="href">Jump</a>
    </p>
    <div v-if="isShow">Show Time</div>
    <p>
      <button @[eventName]="handleClick">Click</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      href: 'https://www.imings.cn/',
      eventName: 'click',
    };
  },
  methods: {
    handleClick() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style></style>
