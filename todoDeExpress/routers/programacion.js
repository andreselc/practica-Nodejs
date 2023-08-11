const express = require ("express");

const {programacion} = require("../datos/cursos.js").infoCursos;

const routerProgramacion = express.Router();

//Esto procesa el cuerpo de la solicitud en formato JSON para trabajarlo en el código con el body
//Middleware
/*Las funciones del Middleware se ejecutan:
1-Después de recibir la solicitud.
2-Antes de enviar una respuesta.

Tienen acesso al objeto de la solicitud, al objeto de la respuesta y a next(), para ejecutar el próximo Middleware*/
routerProgramacion.use(express.json());

//Ruta 1. GET: Para obtener solamente los cursos de programación
routerProgramacion.get("/", (req, res) =>{
    res.json(programacion);
});

//Ruta 2. GET: Obtener solamente un curso de programación según un parámetro URL
routerProgramacion.get("/:lenguaje", (req, res) =>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length ===0){
        return res.status(404).send("No se encontraron cursos de "+lenguaje);
    }
    //console.log(req.query.ordenar);
    if (req.query.ordenar === "vistas"){
       return res.send(resultados.sort((a,b)=>a.vistas - b.vistas));
    } 
       res.json(resultados);
});

//Ruta 3. GET: Obtener solamente un curso de programación según dos parámetros URL
routerProgramacion.get("/:lenguaje/:nivel", (req, res) =>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel ===nivel);

    if (resultados.length ===0){
        return res.status(204).send("No se encontraron cursos de "+lenguaje+" de nivel "+nivel);
        //return res.status(404).end(); /*Por si quieres dejar el mensaje de error en blanco (solo el código)*/
      }
    res.json(resultados);
});

//Ruta 4. POST. Le falta  las validaciones, porque estás asumiendo que todas las solicitudes entran correctamente.
//Esto lo aplica el cliente, con React.js usarías el método FETCH().
routerProgramacion.post("/", (req,res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.json(programacion);
});

//Ruta 5. PUT. (Falta validaciones cuando índice no se encuentra en la b/d)

routerProgramacion.put ("/:id", (req, res) =>{
    const cursoActualizado = req.body;
    const id = req.params.id;
    // No coloques "===" (igualdad estricta), porque el curso.id y el id no son del mismo tipo de dato, y el resultado siempre daría falso
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >=0){
        programacion [indice] =cursoActualizado;
    }
    res.json(programacion);
});

// Ruta 6. PATCH(): Parecido al PUT(), solo que aquí sí se especifica a cuál clave se le va a cambiar el valor. 
//No tienes que pasarle todo el objeto
/*Es decir, no le pasas la entidad completa, solo las propiedades que quieres actualizar.

Falta Validaciones.*/ 

routerProgramacion.patch("/:id", (req,res)=>{
  const infoActualizada =req.body;
  const id = req.params.id; 

  //findIndex() me ayuda a encontrar el índice de un arreglo bajo ciertas condiciones
  const indice = programacion.findIndex (curso => curso.id ==id);

  if (indice >=0){
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar,infoActualizada);
  }
  res.json(programacion);
});

module.exports = routerProgramacion;

// Ruta 7. DELETE()
/*No se requiere pasar un cuerpo para este método HTTP
Simplemente necesitas el ID.*/
routerProgramacion.delete("/:id", (req,res)=>{
    const id =req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >=0){
      //Splice me ayuda a eliminar un elemento del arreglo
      programacion.splice(indice, 1);
    }
    res.json(programacion);
});
