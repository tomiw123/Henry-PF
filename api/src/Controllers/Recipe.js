const Recipe = require('../Models/Recipe.js');


const getRecipes = async (req, res) => {
  //search by query, filter and paginate
  const {search, filter} = req.query;
  const limit = req.query.limit || 8;
  const page = req.query.page || 1;

 
  try {
    if (search){
      const recipes = await Recipe.paginate({ 
        name: { $regex: ".*" + search + ".*", $options: "i" },
      });
      res.status(200).json(recipes);
    }else if(filter){
      if (filter == "alfa") {
        const recipes = await Recipe.paginate({},{sort: { name: 1 }, limit, page });
        res.status(200).json(recipes);
      }
    }else {
      const recipes = await Recipe.paginate({}, { limit, page });
      res.status(200).json(recipes);
    } 
  } catch (err) {
    console.log(err);
  }
};

const getIdRecipes = async (req, res) => {
    const { _id } = req.params;
    
    try{
      const recipes = await Recipe.findById(_id)
      //console.log(recipes)
      res.status(200).json(recipes);
    }catch(err){
      console.log(err);
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
    const { name, image, ingredients, description } = req.body;
    //console.log(name);
    try {
        const exist = await Recipe.findOne({ name });
        if (!exist) {
        const addRecipe = await Recipe.create({
            name,
            image,
            ingredients,
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


const updateRecipes = async (req, res) => {
  const { _id } = req.params;
  const {name, image, ingredients, description } = req.body;
  
  try {
    if (name){
      var recipes = await Recipe.findByIdAndUpdate(_id,{
        $set: {name}
      })
    }
    if (image){
      var recipes = await Recipe.findByIdAndUpdate(_id,{
        $set: {image}
      })
    }
    if (ingredients){
      var recipes = await Recipe.findByIdAndUpdate(_id,{
        $set: {ingredients}
      })
    }
    if (description){
      var recipes = await Recipe.findByIdAndUpdate(_id,{
        $set: {description}
      })
    }

    res.status(200).send(recipes);
  } catch (err) {
    console.log("no funco");
  }
};


module.exports={
    getRecipes,
    getIdRecipes,
    deleteRecipe,
    createRecipe,
    updateRecipes,
}
