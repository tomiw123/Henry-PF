const nodemailer = require('nodemailer')
const {Router} = require('express');
const router = Router();

router.post('/', async (req, res) => {
    const user = req.body
    console.log(user);


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
        to: `${user.contacto}`,
        subject: "Correo de prueba",
        text: "Correo de prueba-Correo de prueba"
    }
//
    //const transport = nodemailer.createTransport(config);
    //const info = await transport.sendMail(mensaje)
    console.log(mensaje);
    res.status(200)
})

module.exports = router;
