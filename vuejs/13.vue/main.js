const App = {
  // template: `
  //   <ul>
  //     <li v-for="(item, index) of list" :key="item.id">
  //       <span>Index:{{index}}</span>
  //       <span>No.{{item.id}}</span>
  //       <span>Name:{{item.name}}</span>
  //       <span>Score:{{item.score}}</span>
  //     </li>
  //   </ul>
  // `,
  // template: `
  //   <ul>
  //     <li v-for="n in 10">{{ n }}</li>
  //   </ul>
  // `,
  // template: `
  //   <ul>
  //     <template v-for="item in list">
  //       <li>{{ item.name }}</li>
  //       <li>{{ item.score }}</li>
  //     </template>
  //   </ul>
  // `,
  template: `
    <div>
      <span 
        v-for="s in 5"
        :key="s"
        :style="{color: s <= starNum ? 'orange' : 'grey'}"
        @click="setStarNum(s)"
      >★</span>
    </div>
  `,
  data() {
    return {
      starNum: 3,
      list: [
        {
          id: 1,
          name: 'Mike',
          score: 89,
        },
        {
          id: 2,
          name: 'Jack',
          score: 90,
        },
        {
          id: 3,
          name: 'Tom',
          score: 59,
        },
      ],
    };
  },
  methods: {
    setStarNum(num) {
      this.starNum = num;
    },
  },
};

export default App;
