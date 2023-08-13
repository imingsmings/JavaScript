const App = {
  // template: `
  //   <ul>
  //     <li
  //       v-for="todo of todoList"
  //       :key="todo.id"
  //     >
  //       {{ todo.content }}
  //     </li>
  //   </ul>
  // `,
  template: `
    <ul>
      <li
        v-for="todo of NotCompletedToDoList" 
        :key="todo.id"
      >
        {{ todo.content }}
      </li>
    </ul>
  `,
  data() {
    return {
      todoList: [
        {
          id: 1,
          content: 'content 1',
          completed: false,
        },
        {
          id: 2,
          content: 'content 2',
          completed: true,
        },
        {
          id: 3,
          content: 'content 3',
          completed: false,
        },
      ],
    };
  },
  computed: {
    NotCompletedToDoList() {
      return this.todoList.filter((todo) => !todo.completed);
    },
  },
};

export default App;
