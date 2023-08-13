/* eslint-disable no-undef */

import { ThemeContext } from '../context/index.js';

class NavItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ThemeContext>
        {(theme) => <div className={`nav-item active-${theme}`}>{item}</div>}
      </ThemeContext>
    );
  }
}

export default NavItem;
