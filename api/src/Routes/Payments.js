const {Router} = require('express')
const router = Router();

const PaymentController = require('../Controllers/PaymentController.js');
const PaymentServices= require('../Services/PaymentsServices.js'); 

const PaymentInstance= new PaymentController( new PaymentServices()); 

router.post('/', (req, res, next)=>{
    PaymentInstance.getPaymentLink(req,res)
});
module.exports = router;