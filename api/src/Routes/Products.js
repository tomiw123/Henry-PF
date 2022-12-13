const { Router } = require("express");

const router = Router();
const {
  getAll,
  getId,
  createProduct,
  updateProduct,
  updateRecipes,
  removeRecipes,
  deleteProduct,
  getAllFilter,
  reviewProduct
} = require('../Controllers/Product.js');

router.get('/', getAll);
router.get('/filter', getAllFilter);
router.get('/id/:id', getId);
router.post('/', createProduct);
router.post('/:id/review', reviewProduct)
router.put('/update/:_id', updateProduct);
router.put('/:_id', updateRecipes);
router.put('/removeRecipes/:_id', removeRecipes);
router.delete('/:_id', deleteProduct);


module.exports = router;
