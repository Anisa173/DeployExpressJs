import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/mars', (req, res) => {
  res.send('It is one Mars.Hello MARS!');
});


// 👇️ Specify port number
const port = 3456;

app.listen(port, () => {
  console.log(`This app is listerning at the port : ${port}
  visit: http://localhost:${port}`);
});




