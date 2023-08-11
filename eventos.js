const EventEmitter = require('events');

//console.log(EventEmitter);

const emisorProductos = new EventEmitter();

emisorProductos.on("compra", (total, numProductos)=> {
    //Event Handlers (son quienes manejan los eventos)
    console.log("Número de productos: "+numProductos) 
    console.log("Total de la compra: $"+total);
});

emisorProductos.emit("compra", 500,5);