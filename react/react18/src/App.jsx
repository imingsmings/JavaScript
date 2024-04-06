import React, { useEffect } from "react";
import Icon from './components/icon'

export default function App() {

  const onClick = (e) => {
    console.log(e);
  }

  const onMouseEnter = (e) => {
    console.log('onMouseEnter', e);
  }

  return <div>
    <Icon type='plus' onClick={onClick} onMouseEnter={onMouseEnter} />
    <Icon type='activity' />
  </div>;
}
