const {Router} = require('express')
const router = Router();
const User = require('../Models/User.js');

router.get('/', async(req,res) =>{
    try{
      const users = await User.find();
      res.status(200).json(users);
    }catch(err){
        console.log('no hay usuarios')
    }
})

router.post('/', async(req,res) =>{
  const {name, contact, adress, pass}=req.body
  try{
    const users = await User.create({
      name, contact, adress, pass,
    });
    res.status(200).json(users);
  }catch(err){
      console.log('no hay usuarios')
  }
})

module.exports = router;