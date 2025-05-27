import os from 'os';
// Obtener la arquitectura del sistema 
console.log("Arquitectura del sistema:", os.arch());
// Obtener la plataforma del sistema
console.log("Plataforma del sistema:", os.platform());
// Obtener la cantidad total de memoria  del sistema
console.log("Memoria total del sistema:", os.totalmem());
// Obtener la  memoria libre 
console.log("Memoria libre del sistema:", os.freemem());
// Obtener la información de la cpu
console.log("Información de la CPU:", os.cpus());
