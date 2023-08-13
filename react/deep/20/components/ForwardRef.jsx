// 3. 通过forwardRef向input转发ref属性
const MyInput = React.forwardRef((props, ref) => {
  // 5. ref参数只能用forwardRef定义的组件内可接受
  return <input type="text" placeholder={props.placeholder} ref={ref} />;
});

class ForwardRef extends React.Component {
  constructor(props) {
    super(props);

    // 1. 创建ref对象
    this.myInputRef = React.createRef();
  }

  inputOperate = (e) => {
    // 4. 指向input节点
    const oInput = this.myInputRef.current;

    oInput.value = '';
    oInput.focus();
  };

  render() {
    return (
      <div>
        {/* 2. 给组件赋值ref */}
        <MyInput ref={this.myInputRef} placeholder={'Please input ...'} />
        <button onClick={this.inputOperate}>回车</button>
      </div>
    );
  }
}

export default ForwardRef;
