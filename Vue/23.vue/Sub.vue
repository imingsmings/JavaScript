<template>
  <!-- <div>{{ appIns.message }}, {{ globalMessage }}</div> -->
  <div>
    {{ localMessage }}, {{ globalCount }}, {{ user.name }}, {{ user.age }}
  </div>
</template>

<script>
import { injectionKey } from './keys.js';
export default {
  name: 'Sub',
  // inject: ['appIns', 'globalMessage'],
  inject: {
    localMessage: {
      // from: 'message',
      from: injectionKey,
    },
    globalCount: {
      default: 'default global count value',
    },
    user: {
      default: () => ({ name: 'Tom', age: 13 }),
    },
  },
  mounted() {
    console.log(this.localMessage);
  },
};
</script>

<style></style>
