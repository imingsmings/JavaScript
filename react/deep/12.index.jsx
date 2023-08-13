/* eslint-disable no-undef */
const { Component } = React;

class Header extends Component {
  render() {
    return <div>HEADER</div>;
  }
}

class Content extends Component {
  render() {
    return <div>CONTENT</div>;
  }
}

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">{this.props.header}</div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Container header={<Header />} content={<Content />} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
