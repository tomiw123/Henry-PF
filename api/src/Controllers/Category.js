const Category = require('../Models/Category');

const getAllCategories = async(req,res)=>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
      } catch (err) {
        console.log(err);
      }
    };


const createCategory = async (req,res)=> {
    const {name} = req.body;
    console.log(name);
    try {
        const exist = await Category.findOne({ name });
        if (!exist) {
        const addCategory = await Category.create({
              name,
        });
        res.status(200).send(`Categoría ${name} creada`);
        } else {
        res.status(404).send("La categoría ya existe");
        }
        } catch (err) {
        console.log("Intenta de nuevo");
        }
      };

const deleteCategory = async (req,res)=> {
    const {_id}=req.params
      
        try {
          const categories = await Category.findByIdAndDelete(_id);
          res.status(200).send(categories.name);
          
        } catch (err) {
          console.log(err);
        }
      }; 


module.exports={
    getAllCategories,
    createCategory,
    deleteCategory
}