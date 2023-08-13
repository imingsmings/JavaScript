/* eslint-disable no-undef */
const { Component } = React;

class App extends Component {
  constructor(props) {
    super(props);
    // 创建ref引用
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.genderRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.refs获取ref集合对象
    // console.log(this.refs);

    console.log(this.usernameRef);
    console.log(this.passwordRef);
    console.log(this.genderRef.current.value);
  };

  handleReset = (e) => {
    e.preventDefault();
    // this.refs.usernameRef.value = ''
    // this.refs.passwordRef.value = ''
  };

  render() {
    return (
      <form>
        <p>
          {/* 用户名: <input type="text" placeholder="username" ref="usernameRef" /> */}
          用户名:{' '}
          <input type="text" placeholder="username" ref={this.usernameRef} />
        </p>
        <p>
          {/* 密码:
          <input
            type="password"
            placeholder="password"
            ref="passwordRef"
            autoComplete="off"
          /> */}
          密码:
          <input
            type="password"
            placeholder="password"
            ref={this.passwordRef}
            autoComplete="off"
          />
        </p>
        <p>
          <select defaultValue="female" ref={this.genderRef}>
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </p>
        <p>
          <button onClick={this.handleSubmit}>提交</button>
          <button onClick={this.handleReset}>重置</button>
        </p>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
