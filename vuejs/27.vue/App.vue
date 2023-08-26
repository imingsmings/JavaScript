<template>
  <div>
    <my-button type="primary" @click="handleClick">Primary</my-button>
    <my-button type="warning">Warning</my-button>
    <my-button type="danger">Danger</my-button>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue';
export default {
  name: 'App',
  components: {
    MyButton,
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
