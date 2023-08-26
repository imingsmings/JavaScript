<template>
  <!-- <button @click="count++">{{ count }}</button>
  <p>{{ countValue }}</p> -->
  <!-- <v-setup v-bind="newsInfo" @change="change" >
    <template v-slot:header>Slots </template>
  </v-setup> -->
  <v-setup ref="vSetupRef" />
</template>

<script>
import { ref, h } from 'vue';

import vSetup from './components/vSetup.vue';

export default {
  nma: 'App',
  components: {
    vSetup,
  },
  setup(props, ctx) {
    const vSetupRef = ref(null);

    return {
      vSetupRef,
    };

    // ctx.expose({
    //   vSetupRef,
    // });

    // return () => h('div', null, '123');
  },
  mounted() {
    // console.log(this.$refs);
    this.$refs.vSetupRef.test();
  },
  // data() {
  //   return {
  //     newsInfo: {
  //       title: 'This is news information',
  //       author: 'Tom',
  //       content: 'This is news content',
  //     },
  //   };
  // },
  // methods: {
  //   change() {
  //     console.log('change');
  //   },
  // },

  // setup() {
  //   console.log(this); // undefined

  //   // 响应式API
  //   const count = ref(0);
  //   // 暴露属性
  //   return {
  //     count,
  //   };
  // },

  // computed: {
  //   countValue() {
  //     // 访问setup暴露的状态
  //     return this.count;
  //   },
  // },

  // mounted() {
  //   console.log(this.count);
  // },
};
</script>
