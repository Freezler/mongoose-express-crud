import mongoose from 'mongoose';
//this line is to import the product model from the products.js file it has .. because the products.js file is in the same directory if it had . then it would be in the src directory
import Product from '../model/products.js';
import express from 'express';
// this line is to import the path module and dirname links: https://nodejs.org/api/path.html
import path, { dirname } from 'path';
// this line is to import the fileURLToPath module link: https://nodejs.org/api/url.html
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB');
  console.log(err);
});

//this line is to serve static files i.e css, images etc
app.use(express.static(path.join(__dirname, 'public')))

// this line is to set the views directory
app.set('views', path.join(__dirname, '../views'));

// this line is to set the view engine
app.set('view engine', 'ejs');


// this line is to parse the body of the request
app.use(express.urlencoded({
  extended:
    true
}));
//this line is to serve static files i.e css, images etc
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'));

app.put('/products/:id', async (req, res) => {
  const _id = req.params.id;
  const product = await Product.findById(id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.category = req.body.category;
  await product.save();
  res.redirect(`/products/${product._id}`);
})
app.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.render('products/index', { Products: products });
  console.log(products);
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
});
app.put('/products/:id', async (req, res) => {
  const id = req.params.id;
  const cheapProduct = await Product.findById(id);
  cheapProduct.name = req.body.name;
  cheapProduct.price = req.body.price;
  cheapProduct.category = req.body.category;
  await cheapProduct.save();
  res.redirect(`/products/${cheapProduct._id}`);
})


app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  console.log(product);
  res.render('products/show', { product: product });
});

app.get('/products/:id/edit', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.render('products/edit', { product: product });
})



app.get('/', (req, res) => {
  res.render('index');
});
app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

