import React from 'react';
import TabPanes from '../tabs';

const Table1 = React.lazy(() => import('./Table1'));
const Table2 = React.lazy(() => import('./Table2'));
const Table3 = React.lazy(() => import('./Table3'));

const Table = () => (
  <TabPanes defaultTab={1}>
    <Table1></Table1>
    <Table2 title={'table2'}></Table2>
    <Table3 key={3}></Table3>
    <Table3 key={4} title={'table4'}></Table3>
  </TabPanes>
);

export default Table;
