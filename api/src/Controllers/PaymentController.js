const { preferences } = require('mercadopago');
const mercadopago = require('mercadopago');


const Payment = (req, res)=>{
  const cosas = req.body;
  
  let preferences = {
    items: [],
    back_urls: {
        success: "https://henry-pf-iota.vercel.app",
        failure: "https://www.failure.com",
        pending: "https://henry-pf-iota.vercel.app",
    },
    //notification_url:'http://localhost:3001/pago/valido'
  }
cosas.map((i)=>{
  preferences.items.push({id:i.id, title:i.name, quantity:Number(i.cant), unit_price:Number(i.price)})
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

  module.exports = {
    Payment
  }