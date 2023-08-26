<template>
  <div>
    <!-- <input type="text" ref="inputRef" /> -->
    <h1 ref="titleRef">{{ state.title }}</h1>
    <button @click="setTitle">Change</button>
  </div>
</template>

<script>
import { ref, onMounted, reactive, nextTick } from 'vue';

function myNextTick(callback) {
  return Promise.resolve().then(callback);
}
export default {
  setup(props, ctx) {
    // const inputRef = ref(null);
    // onMounted(() => {
    //   console.log(inputRef);
    // });
    const titleRef = ref(null);
    const state = reactive({
      title: 'This is title',
    });

    const setTitle = () => {
      state.title = '这是标题';
      /**
       * DOM更新和状态的改变是非同步的，把DOM更新的任务缓存到一个队列当中
       * 等待状态全部更新完成以后一次性更改DOM
       */
      console.log(titleRef.value.innerHTML);

      // nextTick在状态更改完成以后立即执行，等待DOM更新完毕后，执行回调函数
      // nextTick(() => {
      //   console.log(titleRef.value.innerHTML);
      // });
      myNextTick(() => {
        console.log(titleRef.value.innerHTML);
      });
    };

    return {
      // inputRef,
      titleRef,
      state,
      setTitle,
    };
  },
};
</script>

<style></style>
