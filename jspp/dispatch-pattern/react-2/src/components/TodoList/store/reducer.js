import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType';
import initialState from './state';
import action from './action';

const { useReducer } = React;

function reducer (state, { type, payload }) {
  
  const {
    onAddTodo,
    onToggleTodo,
    onRemoveTodo
  } = action(state);

  switch (type) {
    case ADD_TODO:
      return onAddTodo(payload);
    case TOGGLE_TODO:
      return onToggleTodo(payload);
    case REMOVE_TODO:
      return onRemoveTodo(payload);
    default:
      break;
  }
}

export default function () {
  return useReducer(reducer, initialState);
  /**
   * 
   * todoDispatch({
   *   type,
   *   payload
   * })
   * 
   */
}