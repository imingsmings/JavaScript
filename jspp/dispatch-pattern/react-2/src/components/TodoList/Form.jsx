import { ADD_TODO } from "./store";

const { useState } = React;

function Form ({ dispatch }) {

  const [ todoText, setTodoText ] = useState('');

  const onAddTodo = () => {
    if (!todoText.length) {
      return;
    }

    dispatch({
      type: ADD_TODO,
      payload: {
        id: new Date().getTime(),
        content: todoText,
        completed: false
      }
    });

    setTodoText('');
  }

  return (
    <div>
      <input 
        type="text" 
        value={ todoText }
        onChange={ (e) => setTodoText(e.target.value) }
        placeholder="Please input something..."
      />
      <button
        onClick={ onAddTodo }
      >ADD</button>
    </div>
  );
}

export default Form;