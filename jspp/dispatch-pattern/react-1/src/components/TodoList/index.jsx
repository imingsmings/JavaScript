import FormComp from './Form';
import ListComp from './List';

const { useState, createContext } = React;
export const ListContext = createContext({});

function TodoList () {

  const [ addCount, setAddCount ] = useState(0);
  const [ removeCount, setRemoveCount ] = useState(0);
  const [ todoList, setTodoList ] = useState([]);

  const onAddTodo = (todo) => {
    setTodoList(todoList => [ ...todoList, todo ]);
    setAddCount(addCount + 1);
  }

  const onToggleTodo = (id) => {
    setTodoList(todoList => {
      return todoList.map(item => {
        item.id === id && (item.completed = !item.completed);
        return item;
      })
    })
  }

  const onRemoveTodo = (id) => {
    setTodoList(todoList => 
      todoList.filter(item => item.id !== id)
    );
    setRemoveCount(removeCount + 1);
  }

  return (
    <div>
      <FormComp
        addTodo={ onAddTodo }
      ></FormComp>
      <ListContext.Provider value={{
        toggleTodo: onToggleTodo,
        removeTodo: onRemoveTodo
      }}>
        <ListComp
          addCount={ addCount }
          removeCount={ removeCount }
          todoList={ todoList }
        ></ListComp>
      </ListContext.Provider>
    </div>
  );
}

export default TodoList;