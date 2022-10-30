import { ListContext } from '.';
const { useContext } = React;

function ListItem ({ data }) {
  const { toggleTodo, removeTodo } = useContext(ListContext);

  return (
    <li>
      <input 
        type="checkbox" 
        checked={ data.completed } 
        onChange={ () => toggleTodo(data.id) }
      />
      <span
        style={{
          textDecoration: data.completed ? 'line-through' : ''
        }}
      >{ data.content }</span>
      <button
        onClick={ () => removeTodo(data.id) }
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