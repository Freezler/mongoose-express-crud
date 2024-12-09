import mongoose from "mongoose";
import { }

const productSchema = new mongoose.Schema({

  id: {
    type: String,
  },

  name: {
    type: String,
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

