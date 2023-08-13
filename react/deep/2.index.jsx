/* eslint-disable no-undef */
const { createElement, Component } = React;
// const el = <h1>This is jsx</h1>;
// const eEl = createElement('h1', {}, 'This is jsx');

// ReactDOM.render(el, document.getElementById('root'));

// class MyButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openStatus: false,
//     };
//   }

//   toggleStatus() {
//     this.setState({
//       openStatus: !this.state.openStatus,
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <p className="text">
//           {this.state.openStatus ? '打开状态' : '关闭状态'}
//         </p>
//         <button onClick={this.toggleStatus.bind(this)}>
//           {this.state.openStatus ? '关闭' : '打开'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<MyButton />, document.getElementById('root'));

const rEl = <h1 className="title">This is a H1</h1>;
// console.log(rEl);
ReactDOM.render(rEl, document.getElementById('root'));
