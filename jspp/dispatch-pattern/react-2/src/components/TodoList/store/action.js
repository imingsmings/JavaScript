export default function (state) {
  const onAddTodo = (todo) => {
    // setTodoList(todoList => [ ...todoList, todo ]);
    // setAddCount(addCount + 1);

    return {
      ...state, 
      todoList: [ ...state.todoList, todo ],
      addCount: state.addCount + 1
    }
  }
  
  const onToggleTodo = (id) => {
    // setTodoList(todoList => {
    //   return todoList.map(item => {
    //     item.id === id && (item.completed = !item.completed);
    //     return item;
    //   })
    // })

    const todoList = state.todoList.map(item => {
      item.id === id && (item.completed = !item.completed);
      return item;
    });

    return {
      ...state,
      todoList
    }
  }
  
  const onRemoveTodo = (id) => {
    // setTodoList(todoList => 
    //   todoList.filter(item => item.id !== id)
    // );
    // setRemoveCount(removeCount + 1);

    return {
      ...state,
      todoList: state.todoList.filter(item => item.id !== id),
      removeCount: state.removeCount + 1
    }
  }

  return {
    onAddTodo,
    onToggleTodo,
    onRemoveTodo
  }
}