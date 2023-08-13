const ColorSystem = {
  success: 'green',
  warning: 'orange',
  danger: 'red',
};

const MyUI = {
  MyButton: class extends React.Component {
    render() {
      const { type, children } = this.props;
      return (
        <div>
          <button
            style={{
              color: '#fff',
              backgroundColor: ColorSystem[type],
              border: 'none',
            }}
          >
            {children}
          </button>
        </div>
      );
    }
  },
};

export default MyUI;
