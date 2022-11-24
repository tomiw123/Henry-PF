const { Schema, model } = require("mongoose");

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
  category: [{ type: Schema.Types.ObjectId, ref: "Category", /* autopopulate: true */ },],
});
//productSchema.plugin(require('mongoose-autopopulate'));
/* productSchema.pre(/^find/, function(next) { 
	this.populate({
	path: 'category',
	select: 'name',
	})
	next()
}) */

const Product = model("Product", productSchema);
module.exports = Product;
