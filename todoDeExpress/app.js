//Aquí vas a crear tu primera API
const express = require ("express");
const app = express();

//Simular una base de datos (en la vida real no haces esto)
const {infoCursos} = require("./datos/cursos.js");
//1. Utilizas "./" cuando indicas un archivo relativo, si no lo colocas, node pensará que es un módulo principal que viene instalado.
//2. Se usó sintaxis de desestructuración para asignar la información de infoCursos directamente.

//Routers: Te ayuda a expandir la base del camino URL, de modo que no estés repitiendo código
const routerProgramacion= require ("./routers/programacion.js");
app.use("/api/cursos/programacion",routerProgramacion);

const routerMatematicas = require ("./routers/matematicas.js");
app.use("/api/cursos/matematicas",routerMatematicas);

//Implementar primeras Rutas(Routing)

//Ruta 1.
app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express. Cursos de program");
});

//Ruta 2.
app.get("/api/cursos", (req,res)=>{
    res.send(JSON.stringify(infoCursos));
});

//Para que nuestro servidor escuche las peticiones.

const PUERTO= process.env.PORT || 3000; 

app.listen(PUERTO, ()=> {
    console.log("El servidor esta escuchando en el puerto:"+PUERTO);
});