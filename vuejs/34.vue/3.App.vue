<template>
  <div>
    <!-- <p>{{ a }}</p> -->
    <!-- <p>{{ state.a }}</p> -->
    <input type="text" placeholder="username" v-model="formData.username" />
    <input
      type="password"
      placeholder="password"
      autocomplete
      v-model="formData.password"
    />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import {
  ref,
  isRef,
  toRef,
  toRefs,
  shallowRef,
  unref,
  toRaw,
  reactive,
} from 'vue';
export default {
  setup() {
    // ref -> reference -> 针对所有值的定制化的引用包装 -> 深层包装
    // 保证响应式的同时还可进行响应式操作
    // const count = ref(0);
    // RefImpl -> reference implement
    // count.value = 1;
    // console.log(count);
    // 判断是否是ref
    // console.log(isRef(count)); // trues

    // const state = reactive({
    //   a: 1,
    //   b: 2,
    // });
    // const a = toRef(state, 'a');
    // ObjectRefImpl -> 1 -> ref -> { value: 1, state} -> state.a = 3, value = 3
    // console.log(a);
    // const refObj = toRefs(state);
    // console.log(refObj);

    // setTimeout(() => {
    //   state.a = 100;
    // }, 1000);
    // setTimeout(() => {
    //   refObj.a.value = 1000;
    // }, 2000);

    // 自动解包
    // reactive响应式数据的属性是ref的话,会自动解包
    // const count = ref(0);
    // const state = reactive(count);
    // console.log(state.value);

    // 浅层响应式
    // const sRef = shallowRef({
    //   a: 1,
    // });
    // console.log(sRef);

    const formData = ref({
      username: '',
      password: '',
    });

    const submit = () => {
      console.log(formData);
      console.log(unref(formData)); // formData.value -> proxy
      console.log(toRaw(formData.value));
      console.log(formData._rawValue);
      console.log(toRaw(unref(formData)));
    };

    // console.log(data);

    /**
     * 多个数据 -> reactive
     * 单个数据、原始值-> ref
     */

    return {
      // states
      // a: toRef(state, 'a'),
      // ...refObj,
      // state,
      formData,
      submit,
    };
  },
};
</script>

<style></style>
