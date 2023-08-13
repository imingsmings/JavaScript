/* eslint-disable no-undef */
const { Component } = React;

class InputComponent extends Component {
  render() {
    const { num, value, onChange } = this.props;
    return (
      <p>
        <span>{num}:</span>
        <input type="text" value={value} onChange={onChange} />
      </p>
    );
  }
}

class App extends Component {
  state = {
    value: '',
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <InputComponent num={1} value={value} onChange={this.onChange} />
        <InputComponent num={2} value={value} onChange={this.onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
