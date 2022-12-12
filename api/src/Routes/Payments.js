const {Router} = require('express');
const router = Router();
const { Payment } = require('../Controllers/PaymentController.js')

router.post('/', Payment);
module.exports = router;