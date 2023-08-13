import { IS_UNDEFINED, IS_ARRAY, IS_OBJECT } from './constant';

const _childrenType = (children) => {
  const types = {
    [IS_UNDEFINED]: IS_UNDEFINED,
    [IS_ARRAY]: IS_ARRAY,
    [IS_OBJECT]: IS_OBJECT,
  };

  if (typeof children === IS_UNDEFINED) {
    return types[IS_UNDEFINED];
  } else {
    return types[Object.prototype.toString.call(children)];
  }
};

const _generateChild = (item, index) => {
  const {
    key,
    props: { title },
  } = item;
  if (key === null) {
    console.warn('The every child component should have a unique key prop.');
  }
  return {
    title: title || `Tab ${index}`,
    key: key || `${index}`,
    content: item,
  };
};

const _pushChild = (tabs, child, index) => {
  const item = _generateChild(child, index);
  tabs.push(item);
};

const generateTabs = (children) => {
  const tabs = [];
  const type = _childrenType(children);
  switch (type) {
    case IS_UNDEFINED:
      break;
    case IS_OBJECT:
      _pushChild(tabs, children, 1);
      break;
    case IS_ARRAY:
      children.forEach((child, index) => {
        _pushChild(tabs, child, index + 1);
      });
      break;
    default:
      break;
  }
  return tabs;
};

export { generateTabs };
