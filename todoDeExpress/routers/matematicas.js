const express = require ("express");
const {matematicas} = require ("../datos/cursos.js").infoCursos;
const routerMatematicas = express.Router();

//Ruta 1. Para obtener solamente los cursos de matemáticas
routerMatematicas.get("/", (req, res) =>{
    res.send(JSON.stringify(matematicas));
});

//Ruta 2. Obtener solamente un curso de matemáticas según un parámetro URL
routerMatematicas.get("/:tema", (req, res) =>{
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    if (resultados.length ===0){
        return res.status(404).send("No se encontraron cursos de "+tema);
    }

    res.send(JSON.stringify(resultados));
});

module.exports = routerMatematicas;