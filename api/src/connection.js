const mongoose = require('mongoose');

(async ()=> {
  const connectionStr = `mongodb+srv://diego:4bhc1eoPxph143f1@cluster0.ppkazgd.mongodb.net/dosdagas?retryWrites=true&w=majority`;
  try{
    const db = await mongoose.connect(connectionStr);
    console.log('BD conectada', db.connection.name)
  }catch(err){
    console.log('no funco BD')
  }
})() 

mongoose.connection.on('error', err => {
    console.log(err)
  })


//victor, pass:ae2zlaj1OSNIHEmj
//diego, pass:4bhc1eoPxph143f1
//hector, pass:b2JWOGEacF65Ske7
//matias, pass:UFfbWG49Rpy54yne


