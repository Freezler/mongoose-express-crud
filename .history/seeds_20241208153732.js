import mongoose from "mongoose";
import { Product } from "./src/model/products.js";

const url = "mongodb://127.0.0.1:27017/farmStand";

mongoose.connect(url)
  .then(() => {
    console.log(`Connected to MongoDB at ${url}`);
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
    console.log(err);
  });

/*
  const p = new Product({
    name: "Ruby Grapefruit",
    price: 1.99,
    category: "fruit",
  });

  p.save().then((p) => {
    console.log(p);
  }).catch((err) => {
    console.log(err);
})
  */

Product.insertMany([
  {
    name: "Fairy Eggplant",
    price: 1.99,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.50,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
])
  .then((products) => {
    console.log(products);
  })
  .catch((err) => {
    console.log(err);