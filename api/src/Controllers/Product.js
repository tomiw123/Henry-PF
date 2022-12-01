const Product = require("../Models/Product.js");

const getAll = async (req, res) => {
  //search by query

  const { search } = req.query;
  const limit = req.query.limit || 10;
  const page = req.query.limit || 1;

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

//filtros
const filterProduct = async (req, res) => {
  const { filter } = req.query;
  try {
    if (filter) {
      const products = await Product.paginate({ name: {} });
      res.status(200).json(products);
    }
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
    console.log("no funco");
  }
};
const updateCategory = async (req, res) => {
  const { _id } = req.params;
  const { category } = req.body;
  console.log(category);
  try {
    const product = await Product.findByIdAndUpdate(
      _id,
      { $push: { category } },
      { useFindAndModify: false }
    );
    res.status(200).send(product);
  } catch (err) {
    console.log("no funco");
  }
};
const removeCategory = async (req, res) => {
  const { _id } = req.params;
  const { catego } = req.body;
  try {
    const productUpdated = await Product.findByIdAndUpdate(
      _id,
      {
        $set: { category: [] },
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
const getProductsByCategory = async (req, res) => {


}

/* Const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryProd = Product.find({ category: { $ne: [category] } });
    res.status(200).send(categoryProd);
  } catch (error) {
    res.status(404).send("No existe la categoria"); */
    
  module.exports={ 
    getAll,
    filterProduct,
    createProduct,
    updateCategory,
    removeCategory,
    deleteProduct,
    //getProductsByCategory

  }

