const AContext = React.createContext('default a');

AContext.displayName = 'MyAContext';

class App extends React.Component {
  state = {
    a: 'a context',
  };

  render() {
    return (
      // <AContext.Provider value={this.state.a}>
      <Sub></Sub>
      // </AContext.Provider>
    );
  }
}

class Sub extends React.Component {
  render() {
    return (
      <AContext.Consumer>{(value) => <div>{value}</div>}</AContext.Consumer>
    );
  }
}

export default App;
