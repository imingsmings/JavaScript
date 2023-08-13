/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import Loading from './14/14.loading.jsx';

const Home = React.lazy(() => import('./14/14.home.jsx'));

class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <div>
          <Home />
        </div>
      </React.Suspense>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
