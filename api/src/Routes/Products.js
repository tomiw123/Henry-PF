const { Router } = require("express");

const router = Router();
const {
  getAll,
  filterProduct,//
  createProduct,
  updateRecipes,
  removeRecipes,
  deleteProduct,
  //getProductsByCategory
} = require('../Controllers/Product.js');

router.get('/', getAll);
router.get('/filterBy', filterProduct);
router.post('/', createProduct);
router.put('/:_id', updateRecipes);
router.put('/removeCategory/:_id', removeRecipes);
router.delete('/:_id', deleteProduct);


module.exports = router;
