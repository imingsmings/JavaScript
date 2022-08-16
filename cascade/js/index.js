(function () {
  const oNe = document.getElementById('ne');
  const oCell = document.getElementById('cell');
  const data = {
    gNB: [
      {
        id: 1,
        cellName: '小区1',
        lng: '108.948024',
        lat: '34.263161',
      },
      {
        id: 2,
        cellName: '小区2',
        lng: '108.965836',
        lat: '34.225607',
      },
    ],
    ENB: [
      {
        id: 3,
        cellName: '小区3',
        lng: '108.764896',
        lat: '34.442494',
      },
      {
        id: 4,
        cellName: '小区4',
        lng: '108.984801',
        lat: '34.221661',
      },
    ],
  };

  function bindEvent() {
    oNe.addEventListener('change', handleNeChange, false);
    oCell.addEventListener('change', handleCellChange, false);
  }

  function initData() {
    const nes = Object.keys(data);
    const cells = data[nes[0]];

    render('ne', oNe, nes);
    render('cell', oCell, cells);
  }

  function handleNeChange(e) {
    const ne = e.target.value;
    const cells = data[ne];
    render('cell', oCell, cells);
  }

  function handleCellChange(e) {
    const ne = oNe.value;
    const cell = e.target.value;

    const list = data[ne];
    const selectedCell = list.find((c) => c.id == cell);

    console.log(selectedCell.lng);
    console.log(selectedCell.lat);
  }

  function render(type, ele, dataSource) {
    ele.innerHTML = '';

    const oFragment = document.createDocumentFragment();

    for (let i = 0; i < dataSource.length; i++) {
      const option = document.createElement('option');
      const item = dataSource[i];
      if (type === 'ne') {
        option.value = item;
        option.textContent = item;
      } else if (type === 'cell') {
        option.value = item.id;
        option.textContent = item.cellName;
      }

      if (i === 0) {
        option.selected = true;
      }
      oFragment.appendChild(option);
    }

    ele.appendChild(oFragment);
  }

  const init = () => {
    initData();
    bindEvent();
  };

  init();
})();
