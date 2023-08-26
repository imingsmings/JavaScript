<template>
  <div class="tab-nav">
    <ul class="nav">
      <nav-item
        v-for="(item, index) of navData"
        :key="item.id"
        :nav-item="item"
        :initialIndex="initialIndex"
        :currentIndex="index"
        @changeIndex="changeIndex"
      />
    </ul>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';
export default {
  name: 'TabNav',
  components: {
    NavItem,
  },
  props: ['navData', 'initialIndex'],
  methods: {
    changeIndex(index) {
      this.$emit('changeIndex', index);
    },
  },
};
</script>

<style lang="scss">
.tab-nav {
  .nav {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    line-height: 30px;
    background-color: antiquewhite;
    cursor: pointer;
  }
}
</style>
