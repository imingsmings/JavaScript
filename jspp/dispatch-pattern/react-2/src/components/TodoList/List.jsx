import ListItem from './ListItem';

function List ({ todoList, addCount, removeCount }) {
  return (
    <div>
      <p>
        <span>已添加过{ addCount }条</span> /
        <span>已删除过{ removeCount }条</span>
      </p>
      <ul>
        {
          todoList.map(item => (
            <ListItem
              data={ item }
              key={ item.id }
            ></ListItem>
          ))
        }
      </ul>
    </div>
  );
}

export default List;