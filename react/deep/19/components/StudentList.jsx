import ListHoc from './ListHoc';

class StudentList extends React.Component {
  render() {
    const { data, removeStudent } = this.props;
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.grade}</td>
              <td>
                <button onClick={() => removeStudent(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListHoc(StudentList);
