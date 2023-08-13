<template>
  <!-- <p>{{ message }}</p>
  <p>{{ a }}</p>
  <p>{{ foo }}</p>
  <p>{{ baz }}</p> -->
  <p>{{ a }}</p>
</template>

<script>
import { inject, toRefs } from 'vue';
export default {
  name: 'Home',
  setup() {
    let message = inject('message');
    message = 123;

    const state = inject('state');
    state.a = 888;

    const foo = inject('foo', 'default value');

    const baz = inject('baz', () => []);

    const fn = inject('fn', () => {}, false);

    return {
      message,
      ...toRefs(state),
      foo,
      baz: baz(),
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
