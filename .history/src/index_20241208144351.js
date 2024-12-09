/*************  ✨ Codeium Command 🌟  *************/
import express from 'express';
const app = express();
import { resolve } from 'path';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(resolve(__dirname, 'public')));
app.use(express.static(join(__dirname, 'public')));

app.set('views', resolve(__dirname, 'views'));
app.set('views',join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


/******  c570daef-a59c-4cb3-9ad4-5faf373c71d8  *******/