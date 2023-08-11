const estatusPedido= () => {
  const estatus = Math.random() < 0.8;
  return estatus; 
};

const miPedidoDePizza = new Promise ((resolve, reject) => {
  //Para simular que es asíncrono, usamos setTimeout
  setTimeout(()=> {
   if (estatusPedido()){
    resolve ("¡Pedido Exitoso, pizza en camino!");
   } else {
    reject ("Ocurrió un error. Intente nuevamente.");
   }
  },3000);
});

//Method Chaining (El método .then() te puede premitir encadenar métodos así)
miPedidoDePizza
  .then((mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError)=>{
    console.log(mensajeDeError);
  });

/* Alternativa
const manejarPedido = (mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
  };

const manejarRechazo = (mensajeDeError)=>{
    console.log(mensajeDeError);
  };

miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);

*/