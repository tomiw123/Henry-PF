const {Router} = require('express')
const router = Router();
const {
  getRecipes
} = require('../Controllers/Recipe')

router.get('/', async(req,res) =>{
    try{
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    }catch(err){
        console.log('no hay recetas')
    }
})


module.exports = router;