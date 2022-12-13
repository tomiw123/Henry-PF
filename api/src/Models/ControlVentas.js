const {Schema, model} = require('mongoose');

const ControlVentasSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    contacto:{
        type: String,
        required: true 
    },
    fecha:{
        type: String,
        required: true
    },
    products:{
        type: Array,
    }
    
})

const ControlVentas = model("ControlVentas", ControlVentasSchema);
module.exports = ControlVentas;

/*"id":8,
"name":"Elm
"direccion"
"contacto":
"fecha":"10
"products": 
"name":"Fogonero
"cantidad":1,
"pricioUnitario"*/