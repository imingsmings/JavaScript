/* eslint-disable no-undef */
import Main from './17/demo/Main';
import ContextApi from './17/ContextApi'
import { ThemeContext } from './17/demo/context/index.js';

class App extends React.Component {
  state = {
    theme: 'orange',
  };

  changeTheme = (theme) => {
    this.setState({
      theme,
    });
  };

  render() {
    return (
      // <ThemeContext.Provider value={this.state.theme}>
      //   <Main changeTheme={this.changeTheme} />
      // </ThemeContext.Provider>
      <ContextApi></ContextApi>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
