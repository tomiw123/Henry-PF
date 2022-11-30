const { Router } = require("express");

const router = Router();
const {
  getAll,
  filterProduct,//
  createProduct,
  updateCategory,
  removeCategory,
  deleteProduct,
} = require('../Controllers/Product.js');

router.get('/', getAll);
router.get('/filterBy', filterProduct);
router.post('/', createProduct);
router.put('/:_id', updateCategory);
router.put('/removeCategory/:_id', removeCategory);
router.delete('/:_id', deleteProduct);


module.exports = router;
