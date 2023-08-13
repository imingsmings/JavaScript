import React from 'react';
// import Login from '../components/login';
// import List from '../components/list';

const Login = React.lazy(() => import('../components/login'));
const List = React.lazy(() => import('../components/list'));

const routes = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Login />
      </React.Suspense>
    ),
    exact: true,
  },
  {
    path: '/login',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Login />
      </React.Suspense>
    ),
    exact: true,
  },
  {
    path: '/list',
    element: (
      <React.Suspense fallback={<>...</>}>
        <List />
      </React.Suspense>
    ),
    exact: true,
  },
];

export default routes;
