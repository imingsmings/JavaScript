/* eslint-disable no-undef */
const { createElement, Component } = React;

class App extends Component {
  doSth(e, a, b) {
    console.log(e, a, b);
    console.log('Something is done');
  }

  doSth1(a, b, e) {
    console.log(a, b, e);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.doSth(e, 1, 2)}>点击</button>
        <button onClick={this.doSth1.bind(this, 1, 2)}>点击</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
