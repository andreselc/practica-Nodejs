const http = require ("http");
const {infoCursos} = require ("./cursos.js");
//Arriba se hizo en desestructuración

const servidor = http.createServer((req, res)=>{
  const metodo =req.method;
  //const {method} =req;  Otra forma para definir la constante en español
  switch(metodo){
    case "GET":
       return manejarSolicitudGET(req, res);
    case "POST":
       return manejarSolicitudPOST (req, res);
    default:
      res.statusCode =501;
      console.log("El metodo usado no puede ser manejado por el servidor:" +metodo);
  }
});

function manejarSolicitudGET(req, res) {
 const path = req.url;

 if (path === "/"){
  //Por defecto, el res.statusCode es 200 cuando todo ocurre exitosamente en GET (ok)
  //res.writeHead(200, {"Content-Type": "application/json"});
  return res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
 } else if (path === "/cursos"){
  return res.end(JSON.stringify(infoCursos));
 } else if (path =="/cursos/programacion"){
  return res.end(JSON.stringify(infoCursos.programacion));
 } else{
  res.statusCode =404;
  res.end("El recurso solicitado no existe...");
 }
}

function manejarSolicitudPOST(req,res){
  const camino = req.url;

  if (camino ==="/cursos/programacion"){

    /* Se crea una variable para guardar los datos.
    Luego se conveirte en cadena de caracteres,
    y se agrega a "cuerpo".
    Cuando se termine el proceso (end), entonces
    se muestra el cuerpo y se retorna la cadena de caracteres*/ 
      let cuerpo = "";
      req.on("data", contenido => {
        cuerpo += contenido.toString();
      });
      
      //Normalmente, la información no se envía en cadena de caracteres, se envía como objeto JS.
      //Para eso usas parseJSON
      req.on("end", ()=> {
        console.log (cuerpo);
        console.log(typeof cuerpo);

        //Convertir a un objeto de JavaScript.
        cuerpo= JSON.parse(cuerpo);
        console.log(typeof cuerpo);
        console.log(cuerpo.titulo);
        res.end ("El servidor recibio una solicitud POST para /cursos/programacion");
      });


    //return res.end ("El servidor recibio una solicitud POST para /cursos/programacion");
  } else{
    res.statusCode =404;
    res.end("El recurso solicitado no existe...");
   }
}

const PUERTO =3000;

servidor.listen(PUERTO, () => {
  console.log("El servidor esta escuchando en el puerto..."+PUERTO);
});