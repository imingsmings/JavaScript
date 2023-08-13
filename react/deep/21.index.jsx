import MyUI from './21/MyUI';
import RunTimeComponent from './21/RunTimeComponent';
import JsxFunction from './21/JsxFunction';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MyUI.MyButton type={'warning'}>Click</MyUI.MyButton>
        <RunTimeComponent type="login" />
        <JsxFunction />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
