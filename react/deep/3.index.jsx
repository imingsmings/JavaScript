/* eslint-disable no-undef */
const { createElement, Component } = React;

// const rEl = <p>This is a p element</p>;
/**
 * @param ReactElement -- React元素
 * @param rootNode -- 根节点
 */
// ReactDOM.render(rEl, document.getElementById('root'));

// function update() {
//   const rEl = (
//     <div>
//       <h1>This is a title</h1>
//       <h2> {new Date().toString()}</h2>
//     </div>
//   );

//   ReactDOM.render(rEl, document.getElementById('root'));
// }

// setInterval(update, 1000);

class Title extends Component {
  render() {
    return <h1>This is a title.</h1>;
  }
}

const title = new Title();

// ReactDOM.render(title.render(), document.getElementById('root'));
// ReactDOM.render(<Title />, document.getElementById('root'));
ReactDOM.render(createElement(Title), document.getElementById('root'));
