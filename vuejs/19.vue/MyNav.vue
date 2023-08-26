<template>
  <ul class="nav-list">
    <nav-item
      class="nav-item"
      v-for="item of navData"
      :key="item.id"
      :nav-item="item"
    />
  </ul>
</template>

<script>
import NavItem from './NavItem.vue';
export default {
  props: ['navData'],
  components: {
    NavItem,
  },
};
</script>

<style lang="scss" scoped>
.nav-list,
.nav-item {
  list-style: none;
  float: left;
  margin-right: 10px;
}
</style>
