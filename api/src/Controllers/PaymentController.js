const { preferences } = require('mercadopago');
const mercadopago = require('mercadopago');
const ControlVentas =  require('../Models/ControlVentas.js')
const date = new Date();


const Payment = (req, res)=>{
  const cosas = req.body;
  console.log(cosas);
  let preferences = {
    items: [],
    back_urls: {
        success: `${process.env.URL}/Felicidades`,
        failure: "https://www.failure.com",
        pending: "https://henry-pf-iota.vercel.app",
    },
    //notification_url:'http://localhost:3001/pago/valido'
  }
cosas.map((i)=>{
  preferences.items.push({id:i.id, title:i.name, quantity:Number(i.cantidad), unit_price:Number(i.precioUnitario)})
  })

mercadopago.preferences
  .create(preferences)
  .then (function(respuesta){
    res.send(respuesta.body.init_point)
  })
  .catch (function(err){
    console.log(err)
  })
}

const PagoExitoso = async(req, res)=>{
  const {name, direccion, contacto, products} = req.body;
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const fechaStr = `${day}/${month}/${year}`
  try{

    const controlVentas = await ControlVentas.create({
      name,
      direccion, 
      contacto,
      fecha:fechaStr,
      products
    })
    res.status(200).json(controlVentas);

  }catch(err){
    console.log(err)
  }
}

const TotalVentas = async(req, res) => {
  try{
    const total = await ControlVentas.find()
    res.status(200).json(total)
  }catch(err){
    console.log(err);
  }
}


  module.exports = {
    TotalVentas,
    Payment,
    PagoExitoso
  }