const {Router} = require('express')
const router = Router();
const {
    getAllCategories,
    createCategory,
    deleteteCategory
}= require('../Controllers/Category')

router.get('/', getAllCategories)
router.get('/', createCategory)
router.get('/', deleteteCategory)


module.exports = router;