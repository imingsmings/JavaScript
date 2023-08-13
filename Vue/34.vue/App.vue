<script>
// function test(a, b, callback) {
//   const res = a + b;
//   typeof callback === 'function' && callback(res);
// }

// test(1, 2, function (res) {
//   console.log(res);
// });

/**
 * 侦听器 -> 监听依赖 -> 响应式数据值变化时能监听到这个变化，从而提供给开发者一个API接口,完成接下来的自定义任务
 *
 * watch
 *  懒执行 -> 依赖是否变化 -> 回调是否执行
 *  必须明确数据源 可以明确拿到新值和旧值
 *
 * watchEffect
 *  侦听依赖,执行回调
 *  effect 副作用 异步请求 异步任务
 *  侦听器被创建与依赖的数据变更的时候都会执行 -> 收集依赖 -> 自动追踪依赖
 *  拿不到旧值, 不能在回调内拿到新值引用
 */
import { on } from 'stream';
import { ref, watch, watchEffect } from 'vue';
import { useState, useReactive } from './hooks';
export default {
  setup() {
    // const title = ref('This is title');

    // const setTitle = (text) => {
    //   title.value = text;
    // };
    // const [title, setTitle] = useState('This is title');
    // const [content, setContent] = useState('This is content');

    // title.value -> 改变 -> callback
    // 监听ref -> source -> 数据源
    // watch(title, (newValue, oldValue) => {
    // console.log(newValue);
    // console.log(oldValue);
    // });

    // getter函数
    // 结果作为第二个参数参数
    // watch(
    //   () => {
    //     return `${title.value}-${content.value}`;
    //   },
    //   (text) => {
    //     console.log(text);
    //   }
    // );

    const [title, setTitle] = useState('This is title');
    const [content, setContent] = useState('This is content');

    // 监听reactive
    const [state, refState] = useReactive({
      name: 'wxm',
      age: 19,
      article: {
        author: 'Tom',
      },
    });

    // 侦听getter函数,默认不深度,若要深度,开启 deep: true
    // watch(
    //   () => state.article,
    //   (newValue, oldValue) => {
    //     // 不深度的情况下 newValue与oldValue 为相同引用
    //     console.log(newValue);
    //     console.log(oldValue);
    //   },
    //   {
    //     deep: true,
    //   }
    // );

    // state.article.author = 'Tim';

    const titleRef = ref(null);

    // 同时监听多个
    // watch(
    //   [title, content, () => state.article],
    //   (newValue, oldValue) => {
    //     console.log(newValue);
    //     console.log(oldValue);
    //     // 默认情况下,callback组件更新之前被调用
    //     console.log(titleRef.value.innerText);
    //   },
    //   {
    //     深度监听
    //     deep: true,
    //   }
    // );

    // watch(
    //   [title],
    //   (newValue, oldValue) => {
    //     console.log(titleRef.value.innerText);
    //   },
    //   {
    //     // 组件更新之后执行callback
    //     flush: 'post',
    //     // 组件创建后立即执行一次
    //     // immediate: true,
    //   }
    // );

    watch(
      title,
      (cur, prev) => {
        console.log(cur);
        console.log(prev);
      },
      {
        // 侦听器被创建的时候
        onTrack(e) {
          // console.log(e);
        },
        // 依赖被修改的时候
        onTrigger(e) {
          // console.log(e);
        },
      }
    );

    /**
     * pre: 组件挂载或更新前执行的副作用回调,缓存副作用回调,异步执行
     *      改变多个依赖,只会调用一次副作用
     * post: 组件更新后执行的副作用回调,缓存副作用回调,异步执行
     *      改变多个依赖,只会调用一次副作用
     * sync: 组件挂载或组件更新前执行的副作用回调,不缓存副作用回调,同步执行
     *      同时改变多个依赖,多次调用副作用函数回调
     *
     * 返回stop函数 可停止监听
     */
    // const stop = watchEffect(
    //   () => {
    //     console.log(title.value);
    //   },
    //   {
    //     pre: true, // 默认
    //     flush: 'post', // 组件更新执行后
    //     // flush: 'sync'
    //   }
    // );

    // stop();

    let t = null;
    let count = 0;

    function getData(title) {
      t = setTimeout(() => {
        console.log('网络请求成功' + count);
      }, 2000);
    }

    // useEffect和watchEffect的区别?
    watchEffect((onCleanup) => {
      getData(title.value);

      // 清除上一次的副作用
      onCleanup(() => {
        count++;
        console.log('onCleanup');
        clearTimeout(t);
      });
    });

    return {
      title,
      setTitle,
      content,
      setContent,
      // ...state,
      ...refState,
      titleRef,
    };
  },
};
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <button @click="setTitle('标题')">Change</button>
    <button @click="setContent('内容')">Change</button>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="setName('王晓明')">SET NAME</button>
    <button @click="setAge(20)">SET AGE</button>
    <h1 ref="titleRef">{{ title }}</h1>
  </div>
</template>

<style></style>
