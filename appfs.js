const fs = require("fs");

//Recuerda que son métodos asíncronos (pueden ejecutarse en paralelo)
//Leer archivo

console.log ("Antes de leer el archivo...");

const archivo = fs.readFileSync("index.html",'utf-8');
console.log(archivo);
console.log ("Despues de leer el archivo...");


//Cambiar el nombre de un archivo
fs.renameSync("index.html","main.html");

console.log ("Despues de cambiar el nombre...");

//Agregar Contenido al final de un archivo

fs.appendFileSync("main.html","<p>Hola<p>", (err)=> {
  if (err){
    throw err;
  }
  console.log("Archivo actualizado");
});

console.log ("Despues de agregar contenido al archivo...");

//Reemplazar todo el contenido del archivo
fs.writeFileSync ("main.html","Contenido nuevo", (err)=> {
  if (err){
    throw err;
  }
  console.log ("Contenido reemplazado exitosamente");
});

console.log ("Despues de reemplazar todo el contenido del archivo...");
//Eliminar Archivo

fs.unlinkSync("main.html", (err)=>{
if (err){
  throw err;
}
 console.log ("archivo eliminado");
});

console.log ("Despues de eliminar el archivo...");