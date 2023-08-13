/* eslint-disable no-undef */
const { createElement, Component } = React;

class Son extends Component {
  render() {
    return <div>This is a son component.</div>;
  }
}

class App extends Component {
  state = {
    count: '',
  };

  render() {
    // return <div>{this.state.count && <Son />}</div>;
    return <div>{this.state.count.toString() && <Son />}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
