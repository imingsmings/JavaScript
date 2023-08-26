<template>
  <div>
    <input type="text" ref="inputRef" />
    <input type="text" :ref="(el) => (oInput = el)" />
    <ul @click="handleClick">
      <template v-for="item of list" :key="item.id">
        <li ref="items" v-if="item.id !== 1">
          {{ item.title }}
        </li>
      </template>
    </ul>
    <p class="text" :ref="bindRef" v-if="show">Hello World</p>
    <button @click="handleShow">隐藏/显示</button>
    <hr />
    <Home ref="child" />
  </div>
</template>

<script>
import Home from './Home.vue';
export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      oInput: null,
      list: [
        {
          id: 1,
          title: 'title-1',
        },
        {
          id: 2,
          title: 'title-2',
        },
        {
          id: 3,
          title: 'title-3',
        },
      ],
      pRef: null,
      show: true,
    };
  },
  mounted() {
    console.log(this.$refs);
    // console.log(this.oInput);
  },
  methods: {
    handleClick(e) {
      const index = Array.prototype.indexOf.call(this.$refs.items, e.target);
      console.log(index);
    },
    handleShow() {
      this.show = !this.show;
      this.$refs.child.addCount();
      // this.$refs.child.subCount();
    },
    bindRef(el) {
      // console.log(el);
      this.pRef = el;
    },
  },
};
</script>

<style></style>
