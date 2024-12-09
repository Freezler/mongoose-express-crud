import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,


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

/*************  ✨ Codeium Command 🌟  *************/
const Product = mongoose.model("Product", productSchema, "products");
const Product = mongoose.model("Product", productSchema);
/******  544a929b-f3e9-48f5-89c5-8893128d81aa  *******/

export default Product;

