<template>
  <div class="tab-search">
    <input
      type="text"
      placeholder="请输入关键字"
      v-model="value"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'TabSearch',
  props: ['searchValue'],
  data() {
    return {
      value: this.searchValue,
    };
  },
  watch: {
    searchValue(newValue) {
      this.value = newValue;
    },
  },
  methods: {
    onChange(e) {
      this.$emit('changeSearch', e.target.value);
    },
  },
};
</script>

<style lang="scss">
.tab-search {
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  input {
    width: 100%;
  }
}
</style>
