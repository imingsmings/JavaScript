const express = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-methods', '*');
  next();
});

app.get('/getTeachers', (req, res) => {
  const teacherData = JSON.parse(
    readFileSync(resolve(__dirname, './data/teachers.json'))
  );
  res.send(teacherData);
});

app.get('/getStudents', (req, res) => {
  const studentData = JSON.parse(
    readFileSync(resolve(__dirname, './data/students.json'))
  );
  res.send(studentData);
});

app.listen(8080, () => {
  console.log('Running');
});
