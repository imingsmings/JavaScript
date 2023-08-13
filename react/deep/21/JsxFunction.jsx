import Http from './Http';
class JsxFunction extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <Http.Get
            url={'http://localhost:8080/getStudents'}
            loading={
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            }
          >
            {(data) => {
              return data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.grade}</td>
                  </tr>
                );
              });
            }}
          </Http.Get>
        </tbody>
      </table>
    );
  }
}

export default JsxFunction;
