const {Router} = require('express');
const router = Router(); 
const Products = require('./Products')

router.use('/products', Products)

module.exports = router; 