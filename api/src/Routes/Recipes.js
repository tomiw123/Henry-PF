const {Router} = require('express')
const router = Router();
const {
  getRecipes,
  deleteRecipe,
  createRecipe
} = require('../Controllers/Recipe')

router.get('/',getRecipes )
router.get('/',deleteRecipe )
router.get('/',createRecipe )


module.exports = router;