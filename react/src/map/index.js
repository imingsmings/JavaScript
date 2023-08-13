/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { bmapcfg } from './config';

const MapComponent = (props) => {
  window.bmapcfg = bmapcfg;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${bmapcfg.home}bmap_offline_api_v3.0_min.js`;
    document.head.appendChild(script);
    window.BMap_loadScriptTime = new Date().getTime();
    setTimeout(() => {
      createMap();
    }, 100);
  }, []);

  const createMap = () => {
    const map = new BMap.Map('container', {
      enableMapClick: true,
    });
    const point = new BMap.Point(108.948024, 34.263161);
    map.centerAndZoom(point, 6);
    map.addControl(
      new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      })
    );
    map.setCurrentCity('西安');
    map.enableScrollWheelZoom(true);
    map.addEventListener('click', function (e) {
      console.log(e);
      alert(e.point.lng + ',' + e.point.lat);
    });
  };

  return <div id="container" style={{ height: '900px' }}></div>;
};

export default MapComponent;
