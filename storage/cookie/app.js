const express = require('express');
const { resolve } = require('path');

const app = express();

app.use(express.static(resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/cookie', (req, res) => {
    // Set-Cookie => 告诉客户端设置本地cookie信息
    res.cookie('server_name', 'Crystal');

    res.json({
        msg: "Cookie设置成功"
    })
})

app.get('/info', (req, res) => {
   const { cookie } = req.headers;

   const cookieInfo = formatCookie(cookie);

   res.json({
       data: cookieInfo
   })
})

app.listen(8080, () => {
    console.log('Server is running on PORT 8080');
});

function formatCookie (cookie) {
    const parts = cookie.split('; ');
    
    return parts.reduce((o, part) => {
       const [ k, v ] = part.split('=');
       o[k] = v;
       return o;
    }, {});
}