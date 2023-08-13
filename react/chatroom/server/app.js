const WebSocket = require('ws');
const { WebSocketServer } = WebSocket;
const dayjs = require('dayjs');

const wss = new WebSocketServer({ port: 9000 });

wss.on('open', function open() {
  console.log('open');
});

wss.on('error', function open() {
  console.log('error');
});

wss.on('close', function open() {
  console.log('close');
});

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    const msg = JSON.parse(data.toString());
    msg.time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(msg), { binary: false });
      }
    });
  });
});
