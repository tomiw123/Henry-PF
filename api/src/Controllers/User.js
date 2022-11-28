const User = require('../Models/User')

const getAllUsers =  async(req,res) =>{
    try{
            const users = await User.find();
            res.status(200).json(users);
    }catch(err){
        console.log('no hay usuarios')
    }
}

const createUser = async(req,res) =>{
  const {name, contact, adress, pass}=req.body
  try{
    const users = await User.create({
      name, contact, adress, pass,
    });
    res.status(200).json(users);
  }catch(err){
      console.log('no hay usuarios')
  }
}

const getUserById = async(req,res)=> {
    const {_id} = req.params;
    try{
        const user = await User.findOne({_id: _id})
        res.status(200).json(user);
    }catch(e){
        res.status(404).send(`No existe usuario con es ID`)
    }
}

const deleteUser = async(req, res) => {
    const {_id} = req.params;
    try {
      const users = await User.findByIdAndDelete(_id);
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send(`No existe usuario con es ID`)
    }
}

const changePassword = async(req, res)=> {
    const {_id} = req.params;
    const {pass} = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            _id,
            { $set: { pass } },
            { useFindAndModify: false }
          );
          res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    changePassword
}