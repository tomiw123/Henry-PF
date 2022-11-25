const {Router} = require('express')
const router = Router();
const {
    getAllCategories,
    createCategory,
    deleteteCategory
}= require('../Controllers/Category')

router.get('/', getAllCategories)



module.exports = router;