const { Schema, model, default: mongoose } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const reviewSchema = new Schema({
  reviewname: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true
  },
  comment: {
    type: String,
    require: true
  },
  user: {
    type: String,
    require: true
  }
})

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
    type: Array,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    require: true,
    default: 0
  },
  numReviews: {
    type: Number,
    require: true,
    default: 0
  },
  recipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
}
);
productSchema.plugin(mongoosePaginate);

const Product = model("Product", productSchema);
module.exports = Product;
