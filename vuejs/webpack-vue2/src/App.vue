<template>
  <!-- <h1>{{ title }}</h1> -->
  <div id="app">
    <!-- <home-list /> -->
    <!-- <about-list /> -->
    <!-- <step-container /> -->
    <!-- <my-model /> -->
    <!-- <fold-table /> -->
    <!-- <fold-table-advanced /> -->
    <!-- <fold-table-pro /> -->
    <!-- <fold-table-max /> -->
    <!-- <custom-directive /> -->
    <menu-container />
  </div>
</template>

<script>
// import HomeList from './components/HomeList.vue';
// import AboutList from './components/AboutList.vue';
// import StepContainer from './components/step/Main.vue';
// import MyModel from './components/model/MyModel.vue';
// import FoldTable from './components/table/FoldTable.vue';
// import FoldTableAdvanced from './components/table/FoldTableAdvanced.vue';
// import FoldTablePro from './components/table/FoldTablePro.vue';
// import FoldTableMax from './components/table/FoldTableMax.vue';
// import CustomDirective from './components/CustomDirective.vue';
import MenuContainer from './components/MenuContainer.vue';

export default {
  name: 'App',
  components: {
    // HomeList,
    // AboutList,
    // StepContainer,
    // MyModel,
    // FoldTable,
    // FoldTableAdvanced,
    // FoldTablePro,
    // FoldTableMax,
    // CustomDirective,
    MenuContainer,
  },
  mounted() {
    // console.log(this);
  },
  data() {
    return {
      title: 'hello future',
    };
  },
};
</script>

<style scoped></style>
