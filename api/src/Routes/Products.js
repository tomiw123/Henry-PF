const {Router} = require('express')
const router = Router();
const Product = require('../Models/Product.js');

router.get('/', async(req,res) =>{
    try{
      const products = await Product.find();
      res.status(200).json(products);
    }catch(err){
        console.log('no funco')
    }
})

module.exports = router;