<!-- <template>
  <button :class="['btn', type]"><slot></slot></button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  border: none;
  line-height: 30px;
  color: #fff;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.5s;
}

.btn.primary {
  background-color: skyblue;
  &:hover {
    border: 1px solid skyblue;
    color: skyblue;
    background: none;
  }
}
.btn.warning {
  background-color: orange;
  &:hover {
    border: 1px solid orange;
    color: orange;
    background: none;
  }
}
.btn.danger {
  background-color: red;
  &:hover {
    border: 1px solid red;
    color: red;
    background: none;
  }
}
</style> -->
<template>
  <div>
    <p>{{ $attrs.type }}</p>
    <BaseButton v-bind="$attrs"><slot></slot></BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'MyButton',
  components: {
    BaseButton,
  },
  // mounted() {
  //   console.log(this.$attrs);
  // },
  inheritAttrs: false,
  // props: {
  //   type: {
  //     type: String,
  //     default: '',
  //   },
  // },
  // mounted() {
  //   console.log(this.type);
  // },
};
</script>

<style></style>
