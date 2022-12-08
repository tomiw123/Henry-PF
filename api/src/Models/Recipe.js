const {Schema, model} = require('mongoose');
const mongoosePaginate=require('mongoose-paginate-v2')
const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    product: {
        type: String,
    }
})
recipeSchema.plugin(mongoosePaginate)
const Recipe = model("Recipe", recipeSchema);
module.exports = Recipe;