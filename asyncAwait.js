function ordenarProducto(producto){
  return new Promise((resolve, reject) => {
    console.log ("Ordenando: "+ producto+" de andresCompnay");
    setTimeout(()=>{
        if (producto=== "taza"){
          resolve("Ordenando una taza con el logo de andresCompany...");
        } else {
          reject("Este producto no está disponible actualmente...");
        }
    },2000);
  });
}

function procesarPedido(respuesta) {
  //No necesariamente tienes que rodear el parámetro (si es uno solo)...
  //con paréntesis cuando usas la función.
  return new Promise(resolve=> {
    console.log ("Procesando respuesta...");
    console.log ("La respuesta fue: "+respuesta);
    setTimeout(()=> {
      resolve("Gracias por tu compra. Disfruta tu producto de andresCompany.");
    },4000);
  });
}

//No tiene lógica procesar un pedido antes de ordenar un producto.
//Como son dos procesos asíncronos, es dificil asegurar un orden de ejecución.
//Se puede asegurar de la siguiente manera:

 
/*ordenarProducto("lapiz")
  .then(respuesta => {
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log (respuestaProcesada);
  })
  .catch(error => {
    console.log(error);
  });*/

  //Se aplicó Chaining Promises

  //En la vida real no se sabe cuánto puede durar un proceso asíncrono...
  //pero se sabe que se va a respetar el orden de ejecución entre ambas promesas.


  //Aplica Async Await (para hacer más conciso el código en caso de que la cadena se haga muy larga).
  //Nota: Todas las funciones Async retornan una promesa.
  async function realizarPedido(producto){
    try{
      const respuesta= await ordenarProducto(producto);
      console.log("Respuesta Recibida");
      console.log(respuesta);
      const respuestaProcesada = await procesarPedido(respuesta);
      console.log(respuestaProcesada);
    }catch (error){
      console.log(error);
    }
  }

  realizarPedido("taza");
//Fuciones asíncronas: Retornan promesas
//Async Await: Te ayuda a hacer el código más conciso y te ayuda a ejecutar los eventos asíncronos en orden. 