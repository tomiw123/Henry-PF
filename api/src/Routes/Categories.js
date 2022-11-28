const {Router} = require('express')
const router = Router();
const {
    getAllCategories,
    createCategory,
    deleteCategory
} = require('../Controllers/Category')

router.get('/', getAllCategories)
<<<<<<< HEAD
router.post('/', createCategory);
router.delete('/:_id', deleteCategory);

=======
router.get('/', createCategory)
router.get('/', deleteteCategory)
>>>>>>> 165c741e3b32e931ec3df6ae63ff6fe0a9da52d4


module.exports = router;