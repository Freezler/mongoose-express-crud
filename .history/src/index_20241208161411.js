import mongoose from 'mongoose';
import Product from '../model/products.js';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB');
  console.log(err);
});


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '../views'));

app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  console.log(products);
  res.render('products/index', { Products: products });
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Product ${id}`);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

