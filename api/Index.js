const app = require('./src/app.js')
require('dotenv').config()

app.listen(3001, ()=> {
    console.log("server corriendo en el puerto", 3001);
})