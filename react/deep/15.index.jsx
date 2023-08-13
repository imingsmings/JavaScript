/* eslint-disable no-undef */
const { Component } = React;

class BoundaryError extends Component {
  state = {
    hasError: false,
  };

  // 渲染备用UI
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
    };
  }

  // 处理错误信息
  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>This is Error UI</div>;
    }
    return this.props.children;
  }
}

class Test extends Component {
  render() {
    return <div>{data.title}</div>;
  }
}

class Sub extends Component {
  handleClick = () => {};

  render() {
    // return <p onClick={this.handleClick}>This is content</p>;
    return <p onClick={this.handleClick}>{data1.title}</p>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Sub />
        <BoundaryError>
          <Test />
          <Sub />
        </BoundaryError>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
