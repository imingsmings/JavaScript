/* eslint-disable no-undef */
import './index.scss';
import { ThemeContext } from '../context/index.js';
class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <header className={`header ${theme}`}>{this.props.children}</header>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
