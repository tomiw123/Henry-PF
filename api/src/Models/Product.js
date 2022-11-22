const {Schema, model} =  require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Product = model('Product', productSchema);
module.exports = Product;