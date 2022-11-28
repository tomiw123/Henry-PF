const Recipe = require('../Models/Recipe.js');

const getRecipes = async(req,res) => {
    try{
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    }catch(err){
        res.status(404).send("No hay recetas")
    }
}
const deleteRecipe = async(req,res) => {
    const {_id} = req.params;
    try {
        const recipes = await Recipe.findByIdAndDelete(_id);
        res.status(200).send(recipes)
        } catch (error) {
        res.status(404).send(`No existe esa receta`)
        }
    }
    
const createRecipe = async (req, res) => {
    const { name, image, ingridients, description } = req.body;
    console.log(name);
    try {
        const exist = await Recipe.findOne({ name });
        if (!exist) {
        const addRecipe = await Recipe.create({
            name,
            image,
            ingridients,
            description,
        });
        res.status(200).send(`Receta ${name} creada.`);
        } else {
        res.status(404).send("Esta receta ya fue creada, intenta una nueva.");
        }
        } catch (err) {
        console.log(err);
        }
};


module.exports={
    getRecipes,
    deleteRecipe,
    createRecipe
}