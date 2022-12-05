const {Router} = require('express')
const router = Router();
const {
    getRecipes,
    getIdRecipes,
    createRecipe,
    deleteRecipe,
    updateRecipes
} = require('../Controllers/Recipe')

router.get('/', getRecipes);
router.get('/id/:_id', getIdRecipes);
router.post('/', createRecipe);
router.delete('/:_id', deleteRecipe);
router.put('/:_id', updateRecipes);



module.exports = router;