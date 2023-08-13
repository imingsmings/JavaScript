<template>
  <a-collapse
    class="box"
    accordion
    expandIconPosition="right"
    @change="onChange"
  >
    <!-- 自定义图标 -->
    <template v-slot:expandIcon="props">
      <a-icon :type="props.isActive ? 'minus' : 'plus'" />
    </template>
    <!-- 渲染折叠面板 -->
    <a-collapse-panel
      v-for="panel of panels"
      :key="panel.key"
      :header="panel.header"
    >
      <!-- 动态切换组件 -->
      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
import ComponentOne from './collapse/ComponentOne.vue';
import ComponentTwo from './collapse/ComponentTwo.vue';
import ComponentThree from './collapse/ComponentThree.vue';
export default {
  data() {
    return {
      currentPanel: '1',
      panels: [
        {
          key: '1',
          header: '运营商1',
          content: ComponentOne,
        },
        {
          key: '2',
          header: '运营商2',
          content: ComponentTwo,
        },
        {
          key: '3',
          header: '运营商3',
          content: ComponentThree,
        },
      ],
    };
  },
  computed: {
    // 根据面板切换组件
    currentComponent() {
      return this.panels.find((item) => item.key == this.currentPanel).content;
    },
  },
  methods: {
    onChange(key) {
      if (!key) return;
      this.currentPanel = key;
    },
  },
};
</script>

<style>
.box {
  width: 300px;
}
</style>
