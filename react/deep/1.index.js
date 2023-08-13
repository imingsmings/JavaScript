class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openStatus: false,
    };
  }

  render() {
    const oP = React.createElement(
      'p',
      {
        className: 'text',
        key: 1,
      },
      this.state.openStatus ? '打开状态' : '关闭状态'
    );

    const oBtn = React.createElement(
      'button',
      {
        key: 2,
        onClick: () =>
          this.setState({
            openStatus: !this.state.openStatus,
          }),
      },
      this.state.openStatus ? '关闭' : '打开'
    );

    const wrapper = React.createElement(
      'div',
      {
        className: 'wrapper',
      },
      [oP, oBtn]
    );

    return wrapper;
  }
}

ReactDOM.render(React.createElement(MyButton), document.getElementById('root'));

// const oSpan = React.createElement(
//   'span',
//   {
//     className: 'o-span',
//     key: 1,
//   },
//   'This is a span'
// );

// ReactDOM.render(
//   // 根容器
//   React.createElement(
//     // 元素类型
//     'div',
//     // 元素属性
//     {
//       title: 'div title',
//       style: {
//         width: '200px',
//         height: '200px',
//         backgroundColor: 'red',
//       },
//     },
//     // 元素文本节点
//     'This is a div element',
//     // 子元素列表
//     [oSpan]
//   ),
//   document.getElementById('root')
// );
