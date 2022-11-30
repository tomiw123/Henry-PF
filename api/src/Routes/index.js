//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const {Router} = require('express');
const product = require('./Products.js')
const categories = require ('./Categories')
const recipes = require ('./Recipes')
const users = require ('./Users')

const router = Router(); 
const Products = require('./Products')
const Payments = require ('./Payments')

router.use('/products', Products)

router.use('/products', product)
router.use ('/categories', categories)
router.use ('/recipes', recipes)
router.use ('/users', users)


module.exports = router;