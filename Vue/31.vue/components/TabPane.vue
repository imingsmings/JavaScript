<template>
  <ul @click="onChange" class="tab">
    <li
      v-for="item of panes"
      :key="item.key"
      :data-key="item.key"
      :class="['tab-item', { active: item.key === current }]"
    >
      {{ item.title }}
    </li>
  </ul>
  <keep-alive>
    <component :is="currentComponent" class="container" />
  </keep-alive>
</template>

<script>
export default {
  name: 'TabPane',
  props: {
    current: {
      type: String,
      default: 'home',
    },
    panes: {
      type: Array,
      default: () => [],
    },
    currentComponent: {
      type: Object,
    },
  },
  emits: ['changeTab'],
  setup(props, ctx) {
    const onChange = (e) => {
      const key = e.target.dataset.key;
      ctx.emit('changeTab', key);
    };

    return {
      onChange,
    };
  },
};
</script>

<style scoped lang="scss">
.tab {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  .tab-item {
    padding: 0 10px;
    line-height: 30px;
    background: #f3f3f3;
    transition: all 0.5s;
    cursor: pointer;
    &.active {
      background-color: #2c2a2a;
      color: #fff;
    }
  }
}
</style>
