<template>
  <div class="btn-container" @click="handleDivClick"><slot></slot></div>
</template>

<script>
export default {
  name: 'ButtonContainer',
  components: {},
  methods: {
    handleDivClick(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
