const axios = require("axios");

class PaymentService {
    constructor() {
        
    }    

  async createPayment(req,res) {
    const {price, cant, name} = req.body; 


    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      items: [
        {
          title: name,
        //   description: "Dummy description",
        //  picture_url: "https://c8.alamy.com/compes/pc6wkr/dos-fotos-vector-icono-simbolo-del-fotografo-pc6wkr.jpg",
        //   category_id: "cat123",
          quantity: Number(cant),
          unit_price: Number(price),
        },
      ],
      back_urls: {
        success: "https://henry-pf-iota.vercel.app",
        failure: "https://www.failure.com",
        pending: "https://henry-pf-iota.vercel.app",
      },
      notification_url: "https://www.your-site.com/ipn",
    };
    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    });
    
    res.send(payment.data.init_point)
    //return payment.data;
  }
}

 module.exports = PaymentService;
