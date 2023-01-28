const express = require('express');
const { join } = require('path');

const app = express();

app.use('*', (req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  return res.json({
    name: 'Jason',
    age: 24,
  });
});

app.get('/html_text', (req, res) => {
  const title = 'This is a html title';
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
  res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>MVC</title>
          <link rel="stylesheet" href="./css/static.css" />
        </head>
        <body>
          <div id="app">
            <h1>${title}</h1>
            <ul>
              ${list
                .map(
                  (item) =>
                    `<li>
                      <p>${item.name}</p>
                      <p>${item.age}</p>
                  </li>
                  `
                )
                .join('')}
            </ul>
          </div>
          <script src="./js/static.js"></script>
        </body>
      </html>
  `);
});

app.listen(8080, (req, res) => console.log('ok'));
