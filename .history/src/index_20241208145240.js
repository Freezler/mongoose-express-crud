import express from 'express';
const app = express();
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import mongoose from 'mongoose';

/*************  ✨ Codeium Command 🌟  *************/
mongoose.connect('mongodb://127.0.').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
}).catch((err) => {
  console.log('Error connecting to MongoDB');
  console.log(err);
});
/******  422159a4-b555-4ef5-87f8-de9767e364d1  *******/


app.use(express.static(path.join(__dirname, 'public')));

app.set('views',join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});

