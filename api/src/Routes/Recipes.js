const {Router} = require('express')
const router = Router();
const {
    getAllRecipe,
    getIdRecipes,
    createRecipe,
    deleteRecipe,
} = require('../Controllers/Recipe')

router.get('/', getAllRecipe);
router.get('/id/:_id', getIdRecipes);
router.post('/', createRecipe);
router.delete('/:_id', deleteRecipe)



module.exports = router;