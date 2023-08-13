/**
- 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧
- HOC自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式
- 高阶组件是参数为组件，返回值为新组件的函数
- HOC不能修改参数组件，只能传入组件所需要的`props`
- HOC是一个没有副作用的纯函数
- HOC除了必须填入被包裹的组件参数以外，其余参数根据需求增加
- HOC不关心数据如何使用，包裹组件不关心数据从哪来来
- HOC和包裹组件唯一直接的契合点是`props`
 */

function EnhancedComponent(WrappedComponent) {
  return function (fetchDataList) {
    return class extends React.Component {
      state = {
        listData: [],
      };

      async componentDidMount() {
        const result = await fetchDataList(this.props.field);
        this.setState({
          listData: result.data,
        });
      }

      removeStudent = (id) => {
        this.setState({
          listData: this.state.listData.filter((item) => item.id !== id),
        });
      };

      likeTeacher = (id) => {
        this.setState({
          listData: this.state.listData.map((item) => {
            if (item.id === id) {
              item.like += 1;
            }
            return item;
          }),
        });
      };

      render() {
        return this.props.field === 'student' ? (
          <WrappedComponent
            data={this.state.listData}
            removeStudent={this.removeStudent}
          />
        ) : (
          <WrappedComponent
            data={this.state.listData}
            likeTeacher={this.likeTeacher}
          />
        );
      }
    };
  };
}

export default EnhancedComponent;
