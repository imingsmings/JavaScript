<template>
  <li
    :class="['nav-item', { active: initialIndex === currentIndex }]"
    @click="changeIndex(currentIndex)"
  >
    {{ navItem.navTitle }}
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: ['navItem', 'initialIndex', 'currentIndex'],
  methods: {
    changeIndex(index) {
      this.$emit('changeIndex', index);
    },
  },
};
</script>

<style lang="scss">
.nav-item {
  width: 25%;
  text-align: center;
  &.active {
    background-color: black;
    color: #fff;
    transition: all 0.75s;
  }
}
</style>
