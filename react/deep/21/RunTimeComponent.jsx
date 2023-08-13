class Login extends React.Component {
  render() {
    return <div>Login</div>;
  }
}
class Info extends React.Component {
  render() {
    return <div>Info</div>;
  }
}
class RunTimeComponent extends React.Component {
  static components = {
    login: Login,
    info: Info,
  };

  render() {
    const { type, ...props } = this.props;
    const Component = RunTimeComponent.components['info'];
    return <Component {...props} />;
  }
}

export default RunTimeComponent;
