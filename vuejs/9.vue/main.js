// const App = {
//   data() {
//     return {
//       count: 1,
//     };
//   },
//   template: `
//     <h1>{{ studentCountInfo }}</h1>
//     <h1>{{ studentCountInfo }}</h1>
//     <button @click="addStudentCount">ADD</button>
//   `,
//   computed: {
//     studentCountInfo() {
//       return this.count > 0 ? '学生数:' + this.count : '暂无学生';
//     },
//   },
//   methods: {
//     addStudentCount() {
//       this.count++;
//     },
//   },
// };
const App = {
  name: 'App',
  template: `
    <p>{{firstName}} {{lastName}}</p>
    <p>{{ fullName }}</p>
    <button @click="changeName">Change Name</button>
  `,
  data() {
    return {
      firstName: 'Jason',
      lastName: 'Wang',
    };
  },
  computed: {
    fullName: {
      get() {
        console.log('called get');
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue) {
        console.log('called set');
        [this.firstName, this.lastName] = newValue.split(' ');
      },
    },
  },
  methods: {
    changeName() {
      this.fullName = 'Wang Jason';
    },
  },
};

export default App;
