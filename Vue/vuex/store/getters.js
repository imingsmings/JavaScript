export default {
  getTodoList: state => state.todoList,
  getFilter: state => state.filter,
  getFilteredTodoList: state => {
    switch (state.filter) {
      case 'all':
        return state.todoList
      case 'active':
        return state.todoList.filter(todo => !todo.done)
      case 'completed':
        return state.todoList.filter(todo => todo.done)
    }
  }
}