<template>
  <tab-pane
    :panes="tabList"
    :current="current"
    :currentComponent="currentComponent"
    @changeTab="changeTab"
  />
</template>

<script>
import TabPane from './components/TabPane.vue';
import { tabConfig } from './config';
import { useTab } from './hooks';
export default {
  name: 'App',
  components: {
    TabPane,
  },
  setup(props, ctx) {
    const { current, tabList, changeTab, currentComponent } = useTab(
      tabConfig.initial,
      tabConfig.panes
    );

    return {
      current,
      tabList,
      changeTab,
      currentComponent,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
}
</style>
