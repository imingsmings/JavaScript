<template>
  <div>
    <!-- <h1>{{ state.b.c }}</h1> -->
    <!-- <ul>
      <li v-for="item of list" :key="item">{{ item.content }}</li>
    </ul>
    <button @click="listAdd">Add</button> -->

    <p>{{ state.a }}</p>
    <!-- <p>{{ state.data.a }}</p> -->
    <p>{{ a }}</p>
  </div>
</template>

<script>
import { reactive, isReactive, shallowReactive } from 'vue';
export default {
  setup() {
    // const data = {
    //   a: 1,
    //   b: {
    //     c: 2,
    //   },
    // };

    // reactive深层的响应式
    // 代理对象与原对象不是同一个引用
    // reactive包装过的代理对象再次被包装,会返回第一次包装的代理对象
    // isReactive判断一个对象是不是经过reactive包装的
    // const state = reactive(data);
    // console.log(data === state); // false
    // console.log(state === reactive(state)); // true
    // console.log(isReactive(state)); // true
    // console.log(isReactive(data)); // false

    // shallowReactive浅层的响应式包装,只会包装一层
    // const state = shallowReactive({
    //   title: 'Title',
    //   content: 'Content',
    //   unwrapped: {
    //     author: 'Tom',
    //   },
    // });
    // console.log(isReactive(state));
    // console.log(isReactive(state.unwrapped)); // false

    /**
     * reactive只针对 Array Map Set Object
     */

    // const list = reactive([]);
    // const list = reactive(new Set());

    // const listAdd = () => {
    //   // list.push({
    //   //   id: Date.now(),
    //   //   content: Date.now(),
    //   // });
    //   console.log(list);
    //   list.add({
    //     id: Date.now(),
    //     content: Date.now(),
    //   });
    // };

    // 响应式丢失,不是同一个代理对象
    // let state = reactive({ a: 1 });
    // setTimeout(() => {
    //   state = reactive({ a: 2 });
    // }, 1000)
    // const state = reactive({ data: { a: 1 } });
    // setTimeout(() => {
    //   state.data = { a: 2 };
    //   console.log(state);
    // }, 1000);

    // 解构响应式丢失
    const state = reactive({ a: 1 });
    // 不会走setter
    // let { a } = state;
    let a = state.a;
    setTimeout(() => {
      a = 100;
    }, 1000);

    return {
      // state,
      // list,
      // listAdd,
      state,
      a,
    };
  },
};
</script>

<style></style>
