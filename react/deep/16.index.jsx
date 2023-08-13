/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import BoundaryError from './16/16.ErrorBoundary.jsx';
import Loading from './16/16.loading.jsx';

const { Component } = React;

const Home = React.lazy(() => import('./16/16.home.jsx'));
const About = React.lazy(() => import('./16/16.about.jsx'));

class App extends Component {
  render() {
    return (
      <div>
        {/* 子组件发生错误，会全部替换 */}
        <BoundaryError>
          <React.Suspense fallback={<Loading />}>
            <About></About>
            {/* home返回错误会替换home渲染 */}
            {/* <BoundaryError> */}
            <Home></Home>
            {/* </BoundaryError> */}
          </React.Suspense>
        </BoundaryError>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
