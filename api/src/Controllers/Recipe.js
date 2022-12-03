const Recipe = require('../Models/Recipe.js');

const getAllRecipe = async (req, res) => {
  //search by query, filter and paginate
  const {search, filter,  alfa, date } = req.query; //category, price,
  const limit = req.query.limit || 8;
  const page = req.query.page || 1;
 //filter: categorias(cat) precio(price) alfabeticamente(alfa) fecha creado(create)
 //category: categorias disponibles //price:1 y -1 //alfa:1 y -1 re 
  try{
    if (search){
      const re = await Recipe.paginate({ 
        name: { $regex: ".*" + search + ".*", $options: "i" },
      });
      res.status(200).json(re);
    }else if(filter){
      //if (filter == "cat") {
      //  const re = await Recipe.paginate({ category },{limit, page });
      //  res.status(200).json(re);
      //}
      //if (filter == "price") {
      //  const re = await Recipe.paginate({}, { sort: { price: 1 }, limit, page });
      //  res.status(200).json(re);
      //}
      if (filter == "alfa") {
        const re = await Recipe.paginate({},{sort: { name: 1 }, limit, page });
        res.status(200).json(re);
      }
    }else {
      const re = await Recipe.paginate({}, { limit, page });
      res.status(200).json(re);
    } 
  } catch (err) {
    console.log(err);
  }
};

//const getRecipes = async(req,res) => {
//    try{
//      const recipes = await Recipe.find();
//      res.status(200).json(recipes);
//    }catch(err){
//        res.status(404).send("No hay recetas")
//    }
//}

const getIdRecipes = async (req, res) => {
    const { _id } = req.params;
    
    try{
      const recipes = await Recipe.findById(_id)
      console.log(recipes)
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
    getIdRecipes,
    deleteRecipe,
    createRecipe
}