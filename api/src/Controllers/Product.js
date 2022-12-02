const Product = require("../Models/Product.js");

const getAll = async (req, res) => {
  //search by query

  const { search } = req.query;
  const limit = req.query.limit || 8;
  const page = req.query.page || 1;

  try {
    if (search) {
      const products = await Product.paginate({ 
        name: { $regex: ".*" + search + ".*", $options: "i" },
      });
      res.status(200).json(products);
    } else {
      //paginate
      const products = await Product.paginate({}, { limit, page });
      res.status(200).json(products);
    } 
  } catch (err) {
    console.log(err);
  }
};

const getId = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try{
    const products = await Product.findById(id)
    console.log(products)
    res.status(200).json(products);
  }catch(err){
    console.log(err);
  }
}

//filtros
const filterProduct = async (req, res) => {
 
  const { filter, category, price, recipes } = req.query;

  try {
    if (filter == "cat") {
      const products = await Product.paginate({ category });
      res.status(200).json(products);
    }
    if (filter == "price") {
      const products = await Product.paginate({}, { sort: { price: 1 } });
      res.status(200).json(products);
    }
    if (filter == "rec") {
      const products = await Product.paginate({ recipes });
      res.status(200).json(products);
    }
    /*  if(filter=="punt"){
      const products = await Product.paginate({ name: {} });
      res.status(200).json(products);
    } */
  } catch (err) {
    console.log(err);
  }
};
 

const createProduct = async (req, res) => {
  const { name, price, image, description } = req.body;
  console.log(name);
  try {
    const exist = await Product.findOne({ name });
    if (!exist) {
      const addProduct = await Product.create({
        name,
        price,
        image,
        description,
      });
      res.status(200).send(`Product ${name} created`);
    } else {
      res.status(404).send("El producto ya existe");
    }
  } catch (err) {
    console.log("no funco", err);
  }
};
const updateProduct = async (req, res) => {
  const { _id } = req.params;
  const { name, price, image, description } = req.body;
  
  try {
    const product = await Product.updateOne(
      {_id,},
      { $set: { name, price, image, description,} }
    );
    res.status(200).send(product);
  } catch (err) {
    console.log("no funco");
  }
};

const updateRecipes = async (req, res) => {
  const { _id } = req.params;
  const { recipe } = req.body;
  console.log(category);
  try {
    const product = await Product.findByIdAndUpdate(
      _id,
      { $push: { recipe } },
      { useFindAndModify: false }
    );
    res.status(200).send(product);
  } catch (err) {
    console.log("no funco", err);
  }
};
const removeRecipes = async (req, res) => {
  const { _id } = req.params;
  const { recipe } = req.body;
  try {
    const productUpdated = await Product.findByIdAndUpdate(
      _id,
      {
        $set: { recipe: [] },
      },
      {
        useFindAndModify: false,
      }
    );
    res.status(200).send(productUpdated);
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (req, res) => {
  const { _id } = req.params;

  try {
    const products = await Product.findByIdAndDelete(_id);
    res.status(200).send(products.name);
  } catch (err) {
    console.log(err);
  }
};

/* Const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryProd = Product.find({ category: { $set: [category] } });
    res.status(200).send(categoryProd);
  } catch (error) {
    res.status(404).send("No existe la categoria"); */

module.exports = {
  getAll,
  getId,
  filterProduct,
  createProduct,
  updateProduct,
  updateRecipes,
  removeRecipes,
  deleteProduct,
  //getProductsByCategory
};
