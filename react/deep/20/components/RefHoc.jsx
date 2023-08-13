class MyInput extends React.Component {
  render() {
    return <input type="text" placeholder={this.props.placeholder} />;
  }
}

function InputHoc(WrappedComponent) {
  class Input extends React.Component {
    render() {
      const { forwardedRef, ...props } = this.props;
      return <WrappedComponent ref={forwardedRef} {...props} />;
    }
  }

  function forwardRef(props, ref) {
    return <Input {...props} forwardedRef={ref} />;
  }
  return React.forwardRef(forwardRef);
}

const InputRefHoc = InputHoc(MyInput);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  render() {
    return (
      <div>
        <InputRefHoc ref={this.inputRef} placeholder="Please input" />
      </div>
    );
  }
}

export default App;
