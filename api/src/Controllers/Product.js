const Product = require("../Models/Product.js");

const getAll = async (req, res) => {
    try {
      const products = await Product.find();
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
const removeCategory =  async (req, res) => {
    const { _id } = req.params;
    const { catego } = req.body;
    try {
      const productUpdated = await Product.findByIdAndUpdate(_id, {
      $set: { category: []}
    },{
      useFindAndModify:false
    });
    res.status(200).send(productUpdated);
    } catch (error) {
      console.log(error);
    } 
  };
const deleteProduct = async (req, res) => {
    const {_id}=req.params
  
    try {
      const products = await Product.findByIdAndDelete(_id);
      res.status(200).send(products.name);
      
    } catch (err) {
      console.log(err);
    }
  }; 
  module.exports={ 
    getAll,
    createProduct,
    updateCategory,
    removeCategory,
    deleteProduct,}

