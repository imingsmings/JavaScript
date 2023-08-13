/* eslint-disable no-undef */
const { Component } = React;

class App extends Component {
  state = {
    username: '',
  };

  handleUserNameChange = (e) => {
    this.setState({
      // username: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username } = this.state;

    return (
      <p>
        用户名:
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={this.handleUserNameChange}
        />
      </p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
