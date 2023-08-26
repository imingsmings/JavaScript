const { createApp, ref } = Vue;

// const App = {
//   data() {
//     return {
//       text: 'hello world',
//     };
//   },
//   template: `
//     <div>
//       <h1>{{ text }}</h1>
//       <button @click="change">Change</button>
//     </div>
//   `,
//   methods: {
//     change() {
//       this.text = 'hello vite';
//     },
//   },
// };

const App = {
  template: `
      <div>
        <h1>{{ text }}</h1>
        <button @click="change">Change</button>
      </div>
    `,
  setup() {
    const text = ref('hello world');

    const change = () => {
      text.value = 'hello vite';
    };

    return {
      text,
      change,
    };
  },
};

createApp(App).mount('#app');

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');
