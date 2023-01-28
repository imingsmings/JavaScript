const title = 'This is a html title by dom';
const list = [
  {
    name: 'wxm',
    age: 23,
  },
  {
    name: 'jason',
    age: 19,
  },
];

(() => {
  const oApp = document.querySelector('#app');

  const init = () => {
    const node = render();
    oApp.appendChild(node);
  };

  init();

  function render() {
    const oFrag = document.createDocumentFragment();
    const oTitle = createTitle(title);
    const oList = createList(list);

    oFrag.appendChild(oTitle);
    oFrag.appendChild(oList);

    return oFrag;
  }

  function createTitle(title) {
    const oTitle = document.createElement('h1');
    oTitle.textContent = title;
    return oTitle;
  }

  function createList(list) {
    const oList = document.createElement('ul');
    const oFrag = document.createDocumentFragment();

    list.forEach((item) => {
      const oItem = document.createElement('li');
      oItem.innerHTML = `
        <p>${item.name}</p>
        <p>${item.age}</p>
      `;
      oFrag.appendChild(oItem);
    });

    oList.appendChild(oFrag);

    return oList;
  }
})();
