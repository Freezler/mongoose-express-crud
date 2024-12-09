import mongoose from 'mongoose';
import Product from '../model/products.js';
import express from 'express';
import path, { dirname } from 'path';
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

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended:
    true
}));



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

