/* eslint-disable no-console */
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import methodOverride from 'method-override'
import mongoose from 'mongoose'
import Product from '../model/products.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const categories = ['fruit', 'vegetable', 'dairy', 'fungi', 'meat', 'fish']

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.error('Error connecting to MongoDB')
  console.error(err)
})

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.use(express.urlencoded({
  extended:
    true,
}))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/products', async (req, res) => {
  const { category } = req.query

  if (category) {
    const products = await Product.find({ category })
    res.render('products/index', { products, category })
  }
  else {
    const products = await Product.find({})
    res.render('products/index', { products, category: 'All' })
  }
})

app.get('/products/new', async (req, res) => {
  res.render('products/new', { categories })
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('products/edit', { product, categories })
})

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body)
  await newProduct.save()
  console.log(`we added ${newProduct}`)
  res.redirect('/products')
})

app.put('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
  console.log(product)
  res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndDelete(id)
  res.redirect('/products')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
