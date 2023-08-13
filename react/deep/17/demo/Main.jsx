/* eslint-disable no-undef */
import Header from './header';
import BottomNav from './nav';
class Main extends React.Component {
  state = {
    navData: ['第1', '第2', '第3', '第4'],
  };

  render() {
    const { changeTheme } = this.props;
    return (
      <div>
        <Header>这是标题</Header>
        <div style={{ marginTop: 88 + 'px' }}>
          <button onClick={() => changeTheme('black')}>Black</button>
          <button onClick={() => changeTheme('blue')}>Blue</button>
          <button onClick={() => changeTheme('orange')}>Orange</button>
          <button onClick={() => changeTheme('purple')}>Purple</button>
        </div>
        <BottomNav data={this.state.navData}></BottomNav>
      </div>
    );
  }
}

export default Main;
