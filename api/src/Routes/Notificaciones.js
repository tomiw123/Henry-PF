const nodemailer = require('nodemailer')
const {Router} = require('express');
const router = Router();

router.post('/', async (req, res) => {
    const user = req.body
    const product = user.products.map(p=>p.name)
    console.log(product);
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
        subject: "Notificacion",
        text: `Felicidades por tu compra de ${product}. En breve nos pondremos en contacto contigo. Muchas Gracias por confiar en nosotros`
       
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje)
    console.log(mensaje);
    res.status(200).send('hola') 
})

router.post('/envio', async (req, res) => {
    const user = req.body
    const product = user.products.map(p=>p.name)
    console.log(product);
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
        subject: "Envio de pedidos",
        text: `Todos esta listo. Tu pedido esta en camino a ${user.direccion}`
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje)
    console.log(mensaje);
    res.status(200).send('hola') 
})

module.exports = router;
