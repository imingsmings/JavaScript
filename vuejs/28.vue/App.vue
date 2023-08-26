<template>
  <div class="app">
    <!-- <my-button @handle-click="handleClick">按钮</my-button> -->
    <!-- <my-button @handle-click.once="handleClick">按钮</my-button> -->
    <!-- <my-button @click="handleClick">按钮</my-button> -->
    <my-button>按钮</my-button>
    <my-input v-model:title="searchValue" />
    <input type="text" :value="searchValue" />
    <p>{{ searchValue }}</p>
    <!-- <input type="text" v-model="searchValue" /> -->
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue';
import MyInput from './components/MyInput.vue';
export default {
  name: 'App',
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      searchValue: 'hello',
    };
  },
  methods: {
    handleClick(e) {
      console.log(e.target);
    },
    updateSearchValue(value) {
      // console.log(value);
      this.searchValue = value;
    },
  },
};
</script>

<style></style>
