const axios = require("axios");

class PaymentService {
    constructor() {
        
    }    

  async createPayment(req,res) {
    const cosas = req.body; 
    //name = parrilla, disco, cuchullo
    //quantity = 1
    //unit_price = total [{},{}]

    //let items = []
    //cosas.map((i)=>{
    //    items.push({id:i.id, title:i.name, quantity:Number(i.cant), unit_price:Number(i.price)})
    //  })

    //console.log(body.items)

    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      items: [ //[{}]

        

        //{
        //  id: id,
        //  title: name,
        ////   description: "Dummy description",
        ////  picture_url: "https://c8.alamy.com/compes/pc6wkr/dos-fotos-vector-icono-simbolo-del-fotografo-pc6wkr.jpg",
        ////   category_id: "cat123",
        //  quantity: Number(cant),
        //  unit_price: Number(price),
        //}, 
        // 
       ],
      back_urls: {
        success: "https://henry-pf-iota.vercel.app",
        failure: "https://www.failure.com",
        pending: "https://henry-pf-iota.vercel.app",
      },
      notification_url: "http://localhost:3001",
    };
    cosas.map((i)=>{
      body.items.push({id:i.id, title:i.name, quantity:Number(i.cant), unit_price:Number(i.price)})
    })
    

    const payment = await axios.post(url, body, { 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    });
    
    res.send(payment.data.init_point)//
    //return payment.data;
  }
}

 module.exports = PaymentService;
