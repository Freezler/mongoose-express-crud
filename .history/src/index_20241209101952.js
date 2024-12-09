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

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.render('products/index', { Products: products });

});

app.get('/products/new', async (req, res) => {
  res.render('products/new')
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product });
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(`we added $[newProduct`);
  res.send('Product Created');
});

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product });
})


app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
  console.log(product);
  res.redirect(`/products/${product._id}`);
});


app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

