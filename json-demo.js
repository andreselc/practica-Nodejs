/*const curso = require ("./curso.json");
//Cuando importamos el archivo JSON, JS lo convierte en un objeto automáticamente

console.log(curso.temas);*/

let infoCurso= {
    "titulo":"Aprende Node.js",
    "numVistas":45642,
    "numeLikes":21123,
    "temas":[
     "JavaScript",
     "Node.js"
    ],
    "esPublico":true  
   };

   //Objeto -> Cadena de Caracteres
  //Cadena de caracteres en formato JSON
   let infoCursoJSON = JSON.stringify(infoCurso);
   console.log (infoCursoJSON);
   console.log (typeof infoCursoJSON);

   //Cadena de carcateres ->Objeto 
   let infoCursoObjeto= JSON.parse(infoCursoJSON);

   console.log(infoCursoObjeto);
   console.log(typeof infoCursoObjeto);

   console.log (infoCurso.titulo);