const {Router} = require('express')
const router = Router();
const {
    getRecipes,
    getIdRecipes,
    createRecipe,
    deleteRecipe,
} = require('../Controllers/Recipe')

router.get('/', getRecipes);
router.get('/id/:_id', getIdRecipes);
router.post('/', createRecipe);
router.delete('/:_id', deleteRecipe)



module.exports = router;