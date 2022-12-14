const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    pass:{
        type: String,
        default:0,

    },
});

const User = model('User', userSchema);
module.exports = User;