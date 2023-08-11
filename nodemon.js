const http = require('http');
const servidor = http.createServer((req,res)=> {
    res.end("Hola, Andres Lopez. Estoy aprendiendo Node.js");
});

const puerto= 3000;

servidor.listen(puerto, ()=> {
    console.log("El servidor esta escuchando en http://localhost:"+puerto);
});
