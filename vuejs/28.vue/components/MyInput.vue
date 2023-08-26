<template>
  <!-- <input type="text" v-model="modelValue" @input="handleChange" /> -->
  <!-- <input type="text" v-model="value" @input="handleChange" /> -->
  <input type="text" v-model="title" @input="handleChange" />
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    // modelValue: {
    //   type: String,
    //   default: '',
    // },
    title: {
      type: String,
      default: '',
    },
  },
  // emits: ['update:modelValue'],
  emits: ['update:title'],
  methods: {
    handleChange(e) {
      // this.$emit('update:modelValue', e.target.value);
      this.$emit('update:title', e.target.value);
    },
  },
  // computed: {
  //   value: {
  //     get() {
  //       return this.modelValue;
  //     },
  //     set(newValue) {
  //       this.$emit('update:modelValue', newValue);
  //     },
  //   },
  // },
};
</script>

<style></style>
