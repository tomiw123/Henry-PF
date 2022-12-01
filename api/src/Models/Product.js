const { Schema, model } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  category: [{ type: Schema.Types.ObjectId, ref: "Category"},],
});
productSchema.plugin(mongoosePaginate)

const Product = model("Product", productSchema);
module.exports = Product;
