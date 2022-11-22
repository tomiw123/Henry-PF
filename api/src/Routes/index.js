const {Router} = require('express');
const router = Router(); 
const product = require('./Products.js')
const categories = require ('./Categories')
const recipes = require ('./Recipes')
const users = require ('./Users')
router.use('/products', product)
router.use ('/categories', categories)
router.use ('/recipes', recipes)
router.use ('/users', users)
module.exports = router;