import express from 'express';
const app = express();
import path from 'path';

app.use(express.static(path.join(__dirname, 'public')));
app

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

