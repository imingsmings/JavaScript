<template>
  <div>
    <div class="box" v-my-show="isShow"></div>
    <p><button @click="setShow">Show/Hide</button></p>
    <ul v-my-loading="list.length === 0">
      <li v-for="item of list" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import MyShow from '../directives/my-show';
import MyLoading from '../directives/my-loading';
const data = [
  {
    id: 1,
    title: 'This is title 1',
  },
  {
    id: 2,
    title: 'This is title 2',
  },
  {
    id: 3,
    title: 'This is title 3',
  },
];
export default {
  name: 'MyShow',
  directives: {
    MyShow,
    MyLoading,
  },
  mounted() {
    setTimeout(() => {
      this.list = data;
    }, 2000);
  },
  data() {
    return {
      isShow: false,
      list: [],
    };
  },
  methods: {
    setShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>
