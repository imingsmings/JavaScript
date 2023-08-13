import { Suspense } from 'react';
import { Tabs } from 'antd';
import { generateTabs } from './utils';
const { TabPane } = Tabs;

const TabPanes = (props) => {
  const { children, defaultTab = 1 } = props;

  const tabs = generateTabs(children);

  const _onChange = (key) => {
    console.log(key);
  };

  return (
    tabs.length !== 0 && (
      <Tabs defaultActiveKey={`${defaultTab}`} onChange={_onChange}>
        {tabs.map((item) => {
          return (
            <TabPane tab={item.title} key={item.key}>
              <Suspense fallback={<div>Loading...</div>}>
                {item.content}
              </Suspense>
            </TabPane>
          );
        })}
      </Tabs>
    )
  );
};

export default TabPanes;
