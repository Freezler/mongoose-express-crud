import mongoose from 'mongoose';
//this line is to import the product model from the products.js file it has .. because the products.js file is in the same directory if 
import Product from '../model/products.js';
import express from 'express';
// this line is to import the path module and dirname links: https://nodejs.org/api/path.html
import path, { dirname } from 'path';
// this line is to import the fileURLToPath module link: https://nodejs.org/api/url.html
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

//this line is to serve static files i.e css, images etc
app.use(express.static(path.join(__dirname, 'public')))

// this line is to set the views directory
app.set('views', path.join(__dirname, '../views'));

// this line is to set the view engine
app.set('view engine', 'ejs');


// this line is to parse the body of the request
app.use(express.urlencoded({ extended: true }));


app.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.render('products/index', { Products: products });
  console.log(products);
});

app.get('/products/new', (req, res) => {
  res.render('products/new');
});

app.post('/products', async (req, res) => {
  console.log(req.body);
});

app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  console.log(product);
  res.render('products/show', { product: product });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

