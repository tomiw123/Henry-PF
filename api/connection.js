require ('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://matias:UFfbWG49Rpy54yne@cluster0.ppkazgd.mongodb.net/dosdagas?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('conectado a mongodb'))
.catch(err => console.log(err))


mongoose.connection.on('error', err => {
    console.log(err)
  })


//victor, pass:ae2zlaj1OSNIHEmj
//diego, pass:4bhc1eoPxph143f1
//hector, pass:b2JWOGEacF65Ske7
//matias, pass:UFfbWG49Rpy54yne


