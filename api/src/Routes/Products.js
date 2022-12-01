const { Router } = require("express");

const router = Router();
const {
  getAll,
  createProduct,
  updateCategory,
  removeCategory,
  deleteProduct,
  getProductsByCategory
} = require('../Controllers/Product.js');

router.get('/', getAll);
router.get('/:category', getProductsByCategory)
router.post('/', createProduct);
router.put('/:_id', updateCategory);
router.put('/removeCategory/:_id', removeCategory);
router.delete('/:_id', deleteProduct);


module.exports = router;
