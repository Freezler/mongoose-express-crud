import mongoose from "mongoose";
import {Product} from "./model";

const url = "mongodb://127.0.0.1:27017/farmStand";

mongoose.connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
    console.log(err);
  });

const p = new Product({
  name: "Ruby Grapefruit",
  price: 1.99,
  category: "fruit",
});
p.save().then((p) => {
  console.log(p);
});