const Recipe = require('../Models/Recipe.js');

const getRecipes = async(req,res) =>{
    try{
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    }catch(err){
        res.status(404).send("No hay recetas")
    }
}
const deleteRecipe = async(req,res) =>{
    
}
const createRecipe = async(req,res) =>{
    
}


module.exports={
    getRecipes,
    deleteRecipe,
    createRecipe
}