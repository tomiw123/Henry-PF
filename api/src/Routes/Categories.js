const {Router} = require('express')
const router = Router();
const Category = require('../Models/Category.js');

router.get('/', async(req,res) =>{
    try{
      const categories = await Category.find();
      res.status(200).json(categories);
    }catch(err){
        console.log('no hay categorias')
    }
})

module.exports = router;