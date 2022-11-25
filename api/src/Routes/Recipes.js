const {Router} = require('express')
const router = Router();
const Recipe = require('../Models/Recipe.js');

router.get('/', async(req,res) =>{
    try{
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    }catch(err){
        console.log('no hay recetas')
    }
})//post / delete

module.exports = router;