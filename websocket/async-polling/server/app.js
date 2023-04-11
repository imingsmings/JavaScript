const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const jsonParser = bodyParser.json();

app.use('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

  next()
})

app.get('/getData', (req, res) => {
  const resData = getData();
  return res.json({
    data: resData
  })
})

app.post('/postData', jsonParser, (req, res) => {
  const { id, msg } = req.body;
  setData({ id, msg })
  return res.json({
    code: 0
  })
})

app.listen(8080, () => {
  console.log('Server is running');
})

function getData(){
  const originData = fs.readFileSync(path.resolve(__dirname, './data/data.json'));
  return JSON.parse(originData);
}

function setData({id, msg}) {
  const originData = fs.readFileSync(path.resolve(__dirname, './data/data.json'));
  const data = JSON.parse(originData);
  data.push({ id, msg });
  fs.writeFileSync(path.resolve(__dirname, './data/data.json'), JSON.stringify(data));
}