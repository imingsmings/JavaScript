<template>
  <input
    type="text"
    v-model="text"
    @input="(e) => $emit('handleChange', e.target.value)"
  />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(newValue) {
        // return this.value;
      },
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
