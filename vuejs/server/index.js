const express = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');

  next();
});

app.get('/getTeachers', (req, res) => {
  const data = JSON.parse(
    readFileSync(resolve(__dirname, './data/teacher.json'))
  );
  res.send(data);
});

app.get('/getStudents', (req, res) => {
  const data = JSON.parse(
    readFileSync(resolve(__dirname, './data/student.json'))
  );
  res.send(data);
});

app.listen(9080, () => {
  console.log('Welcome');
});
