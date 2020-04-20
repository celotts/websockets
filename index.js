const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bievenido');
})
setInterval(() => {
    io.emit('Mensaje', 'Hola le escribo a todos')
}, 3000);

server.listen(8080, () => {
    console.log('Servidor iniciado en http://localhost:8080');
});