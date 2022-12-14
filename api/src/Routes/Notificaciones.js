const nodemailer = require('nodemailer')
const {Router} = require('express');
const router = Router();

router.post('/', async (req, res) => {

    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth:{
            user: "dosdagasgrill@gmail.com",
            pass: "iwffjehhjcxrmluj"
        }
    }
    const mensaje ={
        from: "dosdagasgrill@gmail.com",
        to: "matiascarballo03@hotmail.com",
        subject: "Correo de prueba",
        text: "Correo de prueba-Correo de prueba"
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje)
    console.log(info);
    res.status(200)
})

module.exports = router;
