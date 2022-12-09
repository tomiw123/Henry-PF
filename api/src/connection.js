const mongoose = require('mongoose');
require ('dotenv').config();
const mercadopago = require('mercadopago')
const {
  MONGO_USER,
  MONGO_PASS,  
  MONGO_PROJECT,
  ACCESS_TOKEN
} = process.env;  

(async ()=> {
  const connectionStr = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.ppkazgd.mongodb.net/${MONGO_PROJECT}?retryWrites=true&w=majority`;
  try{  
    const db = await mongoose.connect(connectionStr); 
    console.log('BD conectada', db.connection.name)
    
  }catch(err){
    console.log('no funco BD')
  }
})() 

//mongoose.connection.on('error', err => {
//    console.log(err)
//  })

try{
  mercadopago.configure({
    access_token:`${ACCESS_TOKEN}`
  });
  console.log('MercadoPago Activo') 
}catch(err){
  console.log(err);
}
