<template>
  <div class="my-model">
    <my-input v-model="searchValue" @handleChange="handleChange" />
    <p>{{ searchValue }}</p>
  </div>
</template>

<script>
import MyInput from './MyInput.vue';
export default {
  name: 'MyModel',
  components: {
    MyInput,
  },
  data() {
    return {
      searchValue: 'hello',
    };
  },
  methods: {
    handleChange(value) {
      // console.log(value);
      this.searchValue = value;
    },
  },
};
</script>

<style></style>
