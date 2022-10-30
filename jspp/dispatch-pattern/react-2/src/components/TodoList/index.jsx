import FormComp from './Form';
import ListComp from './List';
import { todoReducer } from './store';

const { createContext } = React;
export const ListContext = createContext({});

function TodoList () {

  const [
    {
      todoList,
      addCount,
      removeCount
    }, todoDispatch
  ] = todoReducer();

  return (
    <div>
      <FormComp
        dispatch={ todoDispatch }
      ></FormComp>
      <ListContext.Provider value={{
        dispatch: todoDispatch
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