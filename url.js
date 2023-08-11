const miURL = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");

console.log(miURL.hostname); //www.ejemplo.com
console.log(miURL.pathname); // cursos/programacion
console.log(miURL.searchParams); //Esto es un objeto que muestra la cñave y el valor
console.log(miURL.searchParams.get("ordenar"));
console.log(miURL.searchParams.get("nivel"));
