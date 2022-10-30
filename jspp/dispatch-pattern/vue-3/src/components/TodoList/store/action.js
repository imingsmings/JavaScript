import { addTodoService } from '../../../service/todoList';

export default function (state) {

  const onAddTodo = async (todo) => {
    
    try {
      const info = await addTodoService(todo);

      if (info.code !== 0) {
        // todo some error
        return;
      }
      
      state.todoList.push(todo);
      addCount();
    } catch (e) {
      // todo some error
    }
  }

  const onToggleTodo = (id) => {
    state.todoList = state.todoList.map(item => {
      item.id === id && (item.completed = !item.completed);
      return item;
    });
  }

  const onRemoveTodo = (id) => {
    state.todoList = state.todoList.filter(item => item.id !== id);
    removeCount();
  }

  function addCount () {
    state.addCount ++;
  }

  function removeCount () {
    state.removeCount ++;
  }

  return {
    onAddTodo,
    onToggleTodo,
    onRemoveTodo
  }
}