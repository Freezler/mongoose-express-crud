import express from 'express';
const app = express();
import { resolve,  } from 'path';

app.use(express.static(resolve(__dirname, 'public')));

app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

