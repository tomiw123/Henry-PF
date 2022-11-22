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
    }
});

const User = model('User', userSchema);
module.exports = User;