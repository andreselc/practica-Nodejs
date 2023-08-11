const promesaCumplida= false;

const miPromesa = new Promise((resolve, reject)=> {
    setTimeout(()=>{
    if (promesaCumplida){
        resolve("¡Promesa Cumplida!");
    } else{
        reject("Promesa rechazada...");
    }
    },3000);
});

const manejarPromesaCumplida = (valor) => {
  //Conexión con el éxito de la promesa
   //El argumento de la promesa cumplida se pasa a "valor"
   //y se muestra el resultado ahí.
   //Lo mismo pasa con el rechazo.
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

//Con este método, asocias el éxito y fracaso, respectivamente.
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
  

