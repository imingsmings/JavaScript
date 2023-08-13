import { wsAddress } from '../config';

export default function useWebSocket() {
  const socket = new WebSocket(wsAddress);

  socket.addEventListener('open', function () {
    console.log('WebSocket has connected');
  });

  socket.addEventListener('close', function () {
    console.log('WebSocket has closed');
  });

  socket.addEventListener('error', function () {
    console.log('WebSocket occurs error');
  });

  return socket;
}
