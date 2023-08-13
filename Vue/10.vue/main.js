// const App = {
//   name: 'App',
//   template: `
//     <p>{{ result }}</p>
//     <button @click="addCount">ADD</button>
//   `,
//   data() {
//     return {
//       count: 0,
//       state: {
//         stu: {
//           name: 'wxm',
//         },
//       },
//     };
//   },
//   computed: {
//     result: {
//       get() {
//         console.log('called');
//         return this.count;
//       },
//     },
//   },
//   watch: {
//     result(newValue, oldValue) {
//       console.log(newValue, oldValue);
//     },
//     // 'state.stu.name'(newValue) {
//     //   console.log(newValue);
//     // },
//     state(newValue) {
//       console.log(newValue);
//     },
//   },
//   methods: {
//     addCount() {
//       this.count++;
//       // this.state.stu.name = '123';
//       // this.state = {};
//       // this.state.stu = {};

//     },
//   },
// };

// export default App;

export default {
  template: `
    <p class='text'>{{state.stu.name}}</p>
    <button @click="changeState">Change</button>
  `,
  data() {
    return {
      state: {
        stu: {
          name: 'Tim',
        },
      },
    };
  },
  // watch: {
  // state内部嵌套属性变化不会触发侦听器
  // state(newValue) {
  //   console.log(newValue);
  // },
  // state: {
  //   handler(newValue, oldValue) {
  //     const oP = document.getElementsByClassName('text')[0];
  //     console.log(oP.innerHTML); //
  //     console.log(newValue, oldValue);
  //   },
  //   deep: true,
  //   // immediate: true,
  //   flush: 'post',
  // },
  // },
  mounted() {
    this.unwatch = this.$watch(
      'state',
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true }
    );
  },
  methods: {
    changeState() {
      // 默认不会触发侦听器 开启深度监听后会触发
      this.state.stu.name = 'Tony';

      // 触发侦听器
      // this.state = {};

      // const unwatch = this.$watch(
      //   'state.stu',
      //   (newValue) => {
      //     console.log(newValue);
      //   },
      //   { deep: true }
      // );
      this.unwatch();
      console.log(this.unwatch);
    },
  },
};
