const { Router } = require("express");

const router = Router();
const {
  getAll,
  getId,
  filterProduct,//
  createProduct,
  updateProduct,
  updateRecipes,
  removeRecipes,
  deleteProduct,
  //getProductsByCategory
} = require('../Controllers/Product.js');

router.get('/', getAll);
router.get('/id/:id', getId);
router.get('/filterBy', filterProduct);
router.post('/', createProduct);
router.put('/update/:_id', updateProduct);
router.put('/:_id', updateRecipes);
router.put('/removeCategory/:_id', removeRecipes);
router.delete('/:_id', deleteProduct);


module.exports = router;
