const App = {
  template: `
   <div>
    <ul>
      <li v-for="(item, index) of list" :key="item.id">
        <span>{{ item.value}}</span>
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
    <div v-if="isLogin">
      <span>欢迎</span>
      <a href="#">Jason</a>
    </div>
    <div v-else>
      <a href="javascript:;" @click="isLogin = true">登录</a>
      <a href="#">注册</a>
    </div>
  </div>
  `,
  data() {
    return {
      list: [
        {
          id: 1,
          value: 'item-1',
        },
        {
          id: 2,
          value: 'item-2',
        },
        {
          id: 3,
          value: 'item-3',
        },
      ],
      isLogin: false,
    };
  },
  methods: {
    deleteItem(index) {
      this.list.splice(index, 1);
    },
  },
};

export default App;
