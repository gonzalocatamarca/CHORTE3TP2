import {eventEmitter} from './eventEmitter.mjs';
// crear una instacia de EventEmitter
const emissor = new eventEmitter();
// definir un evento personalizado 
emissor.on('saludo ', (nombre) => {
    console.log("Evento personalizado recibido:", nombre);
});
// emitir el evento saludo 
emissor.emit('saludo', 'Mundo');