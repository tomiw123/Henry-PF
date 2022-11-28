const {Router} = require('express')
const router = Router();
const {
    getRecipes,
    createRecipe,
    deleteRecipe,
} = require('../Controllers/Recipe')

router.get('/', getRecipes);
router.post('/', createRecipe);
router.delete('/:_id', deleteRecipe)



module.exports = router;