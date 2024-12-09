import express from 'express';
const app = express();
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import mongoose from 'mongoose';

import Product from './model/products.js';

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB');
  console.log(err);
});


app.use(express.static(path.join(__dirname, 'public')));

app.set('views', join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const products = await Product.find({})


  res.send('Hello World!');
});

app.get('/products', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

