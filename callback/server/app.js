const express = require('express');

const app = express();

app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');

  next();
});

app.get('/getData', (req, res) => {
  return res.json({
    name: 'Jason',
    age: 24,
  });
});

app.listen(3000, () => {
  console.log('Running on 3000');
});
