// const { readFileSync } = require('fs');
// const { resolve } = require('path');
const { readFile } = require('../libs/utils');

function getDataList() {
  // const data = JSON.parse(
  //   readFileSync(resolve(__dirname, '../data/data.json'), 'utf-8')
  // );
  const data = readFile('../data/data.json');

  const title = data.titles.index;
  const list = data.list.map(({ id, name }) => ({ id, name }));

  return {
    title,
    list,
  };
}

function getDetail(id) {
  // const data = JSON.parse(
  //   readFileSync(resolve(__dirname, '../data/data.json'), 'utf-8')
  // );
  const data = readFile('../data/data.json');

  const title = data.titles.detail;
  const student = data.list.find((item) => item.id == id);

  return {
    title,
    student,
  };
}

module.exports = {
  getDataList,
  getDetail,
};
