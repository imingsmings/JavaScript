import ListHoc from './ListHoc';

class TeacherList extends React.Component {
  render() {
    const { data, likeTeacher } = this.props;
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Like</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.like}</td>
              <td>
                <button onClick={() => likeTeacher(item.id)}>Like</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListHoc(TeacherList);
