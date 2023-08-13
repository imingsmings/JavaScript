/* eslint-disable no-undef */
import { nanoid } from 'nanoid';
const { Component } = React;

class App extends Component {
  state = {
    arr: [1, 2, 3, 4, 5],
  };

  render() {
    const { arr } = this.state;
    return (
      <div>
        {arr.map((item, index) => {
          const key = nanoid();
          return (
            <p key={key} data-key={key}>
              {item}
            </p>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
