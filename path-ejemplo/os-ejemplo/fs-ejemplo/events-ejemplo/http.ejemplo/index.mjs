import http from 'http';
// crear un servidor HTTP basico
const server = http.createServer((req, res) => {
    res.statusCode = 200; // establecer el codigo de estado
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Hola, Mundo!'); 
});
// configurar el servidor para escuchar en el puerto 3000
server.listen(3000, 127.0.0.1() => {
    console.log('Servidor corriendo en http://localhost:3000/');
});