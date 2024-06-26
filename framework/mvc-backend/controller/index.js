// const { readFileSync } = require('fs');
// const { resolve } = require('path');
const { getDataList, getDetail } = require('../models');

function IndexView(req, res) {
  // const data = JSON.parse(
  //   readFileSync(resolve(__dirname, '../data/data.json'), 'utf-8')
  // );

  // const title = data.titles.index;
  // const list = data.list.map(({ id, name }) => ({ id, name }));

  const { title, list } = getDataList();

  res.render('index.ejs', { title, list });
}

function DetailView(req, res) {
  const id = req.params.id;
  // const data = JSON.parse(
  //   readFileSync(resolve(__dirname, '../data/data.json'), 'utf-8')
  // );

  // const title = data.titles.detail;
  // const student = data.list.find((item) => item.id == id);

  const { title, student } = getDetail(id);

  res.render('detail.ejs', { title, student });
}

module.exports = {
  IndexView,
  DetailView,
};
