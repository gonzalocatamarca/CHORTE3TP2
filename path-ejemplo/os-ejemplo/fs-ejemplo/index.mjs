import fs from 'fs';
// leer un  acricvo de manera asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
     {
       console.log("Contenido del archivo:", data);
       }  
  });   
   // escribir  un nuevo archivo 
   fs.writeFile('./data/newfile.txt', 'contenido nuevo .', (err) => 
    {
    if (err) throw err;
    console.log("Archivo creado y escrito .");


   
    });
    // renombrar un archivo
    fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
        if (err) throw err;
        console.log("Archivo renombrado.");
    });
