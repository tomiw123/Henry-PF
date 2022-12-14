const {Router} = require('express');
const router = Router();
const { Payment, PagoExitoso, TotalVentas } = require('../Controllers/PaymentController.js')

router.get('/totalVentas', TotalVentas)

router.post('/', Payment);
//mandart a la bd
router.post('/pagoExitoso', PagoExitoso)
//traer de la bd
module.exports = router;