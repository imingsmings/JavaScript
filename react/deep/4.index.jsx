/* eslint-disable no-undef */
const { createElement, Component } = React;

// 组件类 -> 类组件
// class Test extends Component {
//   // 属性 -> 配置 -> props保存
//   constructor(props) {
//     super(props);
//     // 数据 -> 内部数据 -> state
//     this.state = {
//       title: this.props.title,
//     };
//   }

//   // 逻辑
//   handleBtnClick() {
//     this.setState({
//       title: 'This is my Component',
//     });
//   }

//   render() {
//     // 视图标记
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         {/* 事件 */}
//         <button onClick={this.handleBtnClick.bind(this)}>点我</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Test title={'I am title'}></Test>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   createElement(Test, {
//     title: 'I am title',
//   }),
//   document.getElementById('root')
// );

// class Title extends Component {
//   render() {
//     return <h1>{this.props.title}</h1>;
//   }
// }

// class Author extends Component {
//   render() {
//     return <span>{this.props.author}</span>;
//   }
// }

// class Para extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.para}</p>
//         {/* 嵌套组件 */}
//         {/* <Author></Author> */}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     title: 'This is a title',
//     author: 'Jason Wang',
//     para: 'This is a paragraph',
//   };

//   render() {
//     return (
//       <div>
//         <Title title={this.state.title} />
//         <Author author={this.state.author} />
//         <Para para={this.state.para} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

class App extends Component {
  state = {
    content: this.props.content,
  };

  handleClick = () => {
    this.setState({
      content: '123456',
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App content={'This is content'} />,
  document.getElementById('root')
);
