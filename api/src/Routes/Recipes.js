const {Router} = require('express')
const router = Router();
const {
  getRecipes
} = require('../Controllers/Recipe')

router.get('/', getRecipes )

module.exports = router;