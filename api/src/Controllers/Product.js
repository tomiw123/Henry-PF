const Product = require("../Models/Product.js");

const getAll = async (req, res) => {
  //search and paginate
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
      const products = await Product.paginate({}, { limit, page });
      res.status(200).json(products);
    }
  } catch (err) {
    console.log(err);
  }
};
const getAllFilter = async (req, res) => {
  //filter: categorias(category) precio(price) alfabeticamente(alfa) 
  //category: categorias disponibles //price:1 y -1 //alfa:1 y -1
  const { filter, category, price, alfa } = req.query;
  const limit = req.query.limit || 8;
  const page = req.query.page || 1;

  try {
    if (filter) {
      if (filter == "category") {
        const products = await Product.paginate({ category }, { limit, page });
        res.status(200).json(products);
      }
      if (filter == "price") {
        const products = await Product.paginate({}, { limit, page, sort: { price } });
        res.status(200).json(products);
      }
      if (filter == "alfa") {
        const products = await Product.paginate({},{ limit, page, sort: { name: alfa } });
        res.status(200).json(products);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No hay productos para mostrar")
  }
};

// producto por id
const getId = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const products = await Product.findById(id);
    res.status(200).json(products);
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
  console.log(name);
  try {
    if (name) {
      var product = await Product.findByIdAndUpdate(_id, { $set: { name } });
    }
    if (price) {
      var product = await Product.findByIdAndUpdate(_id, { $set: { price } });
    }
    if (image) {
      var product = await Product.findByIdAndUpdate(_id, { $set: { image } });
    }
    if (description) {
      var product = await Product.findByIdAndUpdate(_id, {
        $set: { description },
      });
    }
    res.status(200).send(product);
  } catch (err) {
    console.error(err);
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

module.exports = {
  getAll,
  getId,
  createProduct,
  updateProduct,
  updateRecipes,
  removeRecipes,
  deleteProduct,
  getAllFilter,
};
