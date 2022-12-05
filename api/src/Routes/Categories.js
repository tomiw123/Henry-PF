const {Router} = require('express')
const router = Router();
const {
    getAllCategories,
    createCategory,
    deleteCategory
} = require('../Controllers/Category')

router.get('/', getAllCategories)
router.post('/', createCategory);
router.delete('/:_id', deleteCategory);


module.exports = router;
