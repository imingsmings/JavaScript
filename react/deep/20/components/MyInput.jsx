// class MyInput extends React.Component {
//   render() {
//     return <input type="text" ref={this.props.inputRef} />;
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.inputRef = React.createRef();
//   }

//   componentDidMount() {
//     console.log(this.inputRef);
//   }

//   render() {
//     return <MyInput inputRef={this.inputRef} />;
//   }
// }

// export default App;

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  setInputRef = (el) => {
    this.inputRef = el;
  };

  focusInput = () => {
    this.inputRef.value = '';
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref={this.setInputRef} /> */}
        {/* <input type="text" ref={(el) => (this.inputRef = el)} /> */}
        <input type="text" ref={this.props.inputRef} />
        <button onClick={this.focusInput}>Click</button>
      </div>
    );
  }
}

class App extends React.Component {
  componentDidMount() {
    console.log(this.oInput);
  }

  render() {
    return <MyInput inputRef={(el) => (this.oInput = el)} />;
  }
}

export default App;
