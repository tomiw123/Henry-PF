const {Router} = require('express');
const product = require('./Products.js')
const categories = require ('./Categories')
const recipes = require ('./Recipes')
const users = require ('./Users')

const router = Router(); 
const Products = require('./Products')

router.use('/products', Products)

router.use('/products', product)
router.use ('/categories', categories)
router.use ('/recipes', recipes)
router.use ('/users', users)


module.exports = router;