const {Router} = require('express');
const router = Router();
const { Payment, PagoExitoso, TotalVentas, Estado } = require('../Controllers/PaymentController.js')

router.get('/totalVentas', TotalVentas)

router.post('/', Payment);
//mandart a la bd
router.post('/pagoExitoso', PagoExitoso)
//traer de la bd
router.put('/estado/:id', Estado)

module.exports = router;