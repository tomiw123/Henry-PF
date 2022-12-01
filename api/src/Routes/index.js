const {Router} = require('express');
const product = require('./Products.js')
const categories = require ('./Categories')
const recipes = require ('./Recipes')
const users = require ('./Users')
const Payments = require ('./Payments')

const router = Router(); 
const Products = require('./Products')


router.use('/products', Products)

router.use('/products', product)
router.use ('/categories', categories)
router.use ('/recipes', recipes)
router.use ('/users', users)
router.use ('/payments', Payments)



module.exports = router;