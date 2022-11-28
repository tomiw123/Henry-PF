const {Router} = require('express')
const router = Router();
const {
<<<<<<< HEAD
    getRecipes,
    createRecipe,
    deleteRecipe,
} = require('../Controllers/Recipe')

router.get('/', getRecipes);
router.post('/', createRecipe);
router.delete('/:_id', deleteRecipe)

=======
  getRecipes,
  deleteRecipe,
  createRecipe
} = require('../Controllers/Recipe')

router.get('/',getRecipes )
router.get('/',deleteRecipe )
router.get('/',createRecipe )
>>>>>>> 165c741e3b32e931ec3df6ae63ff6fe0a9da52d4


module.exports = router;