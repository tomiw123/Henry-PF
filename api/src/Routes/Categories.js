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

<<<<<<< HEAD


=======
 
>>>>>>> 313abb39a31d260c791f571526648877c5fd9461
module.exports = router;