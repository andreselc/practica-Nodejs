const http = require("http");

const servidor = http.createServer((req,res)=> {
   console.log("===> res (respuesta)");
   //solicitudes
   /*console.log(req.url);
   console.log(req.method);
   console.log(req.headers);*/

   //respuestas
   res.setHeader("content-type", "application/json");
   console.log(res.getHeaders());
   //console.log(res.statusCode);
   res.end("Hola, Mundo");
});

const puerto =3000;

servidor.listen(puerto, ()=>{
    console.log("El servidor esta escuchando en http://localhost:"+puerto+" ...");
});