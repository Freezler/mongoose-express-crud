import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  name: {
    type: N,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ["fruit", "vegetable", "dairy"],
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;

