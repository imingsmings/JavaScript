<template>
  <div class="tab-content">
    <h2>{{ contentData.title }}</h2>
    <p>{{ contentData.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'TabContent',
  props: ['navContent', 'initialIndex'],
  computed: {
    contentData() {
      return this.navContent.find((item, index) => index == this.initialIndex);
    },
  },
};
</script>

<style></style>
