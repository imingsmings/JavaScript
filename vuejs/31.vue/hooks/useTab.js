import { reactive, computed, toRefs, shallowRef } from 'vue';

export default function (initialTab, panes) {
  const tabs = panes.map((item) => {
    item.component = shallowRef(item.component);
    return item;
  });

  const state = reactive({
    current: initialTab,
    tabList: tabs,
  });

  const changeTab = (key) => {
    state.current = key;
  };

  const currentComponent = computed(() => {
    return state.tabList.find((pane) => pane.key == state.current).component;
  });

  return {
    ...toRefs(state),
    changeTab,
    currentComponent,
  };
}
