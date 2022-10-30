import { ListContext } from '.';
import { REMOVE_TODO, TOGGLE_TODO } from './store';
const { useContext } = React;

function ListItem ({ data }) {
  const { dispatch } = useContext(ListContext);

  return (
    <li>
      <input 
        type="checkbox" 
        checked={ data.completed } 
        onChange={ () => dispatch({
          type: TOGGLE_TODO,
          payload: data.id
        }) }
      />
      <span
        style={{
          textDecoration: data.completed ? 'line-through' : ''
        }}
      >{ data.content }</span>
      <button
        onClick={ () => dispatch({
          type: REMOVE_TODO,
          payload: data.id
        }) }
      >REMOVE</button>
    </li>
  );
}

export default ListItem;

/**
 * {
 *   id: number,
 *   content: string,
 *   completed: boolean
 * }
 * 
 * 
 */