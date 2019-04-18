const app = require('express')();
const cors = require('cors');
const io = require('socket.io');
app.use(cors)

const server = require('http').Server(app);

const clientSocket = io(server);

server.listen(3001);

clientSocket.on('connection', (socket) => {
  const webSocket = io('wss://api-pub.bitfinex.com/ws/2', { transports: ['websocket']})
  let msg = JSON.stringify({ 
    event: 'subscribe', 
    channel: 'ticker', 
    symbol: 'tBTCUSD' 
  })
  webSocket.send(msg, (data) => {
    socket.emit('ticker', data)
  })
})




