class Table extends React.Component {
  state = {
    headers: ['Name', 'ID', 'Age'],
    info: ['wxm', '1', 20],
  };
  render() {
    return (
      <table border="1">
        <caption>Personal Information</caption>
        <thead>
          <tr>
            <TableHeaders headers={this.state.headers} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCells info={this.state.info} />
          </tr>
        </tbody>
      </table>
    );
  }
}

class TableHeaders extends React.Component {
  render() {
    const { headers } = this.props;
    return (
      <React.Fragment>
        {headers.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </React.Fragment>
    );
  }
}

class TableCells extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <>
        {info.map((item, index) => (
          <td key={index}>{item}</td>
        ))}
      </>
    );
  }
}

export default Table;
