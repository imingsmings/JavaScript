export default {
  addTodo: (state, text) => {
    state.todoList.push({
      id: state.id++,
      text,
      done: false
    })
  },
  removeTodo: (state, id) => {
    state.todoList = state.todoList.filter(todo => todo.id !== id)
  },
  toggleTodo: (state, id) => {
    state.todoList = state.todoList.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
  },
  setFilter: (state, filter) => {
    state.filter = filter
  }
}