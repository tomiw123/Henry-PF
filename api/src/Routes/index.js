const {Router} = require('express');
const categories = require ('./Categories')
const recipes = require ('./Recipes')
const users = require ('./Users')
const Payments = require ('./Payments')
const Products = require('./Products')
const Pagos = require('./PagosExitoso')

const router = Router(); 


router.use('/products', Products)
router.use ('/categories', categories)
router.use ('/recipes', recipes)
router.use ('/users', users)
router.use ('/payments', Payments)
router.use ('/pagosExitoso', Pagos)



module.exports = router;