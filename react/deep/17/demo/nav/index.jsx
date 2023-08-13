/* eslint-disable no-undef */
import NavItem from './NavItem';
import './index.scss';

class BottomNav extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="bottom-nav">
        {data.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </div>
    );
  }
}

export default BottomNav;
