
var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', (req, res) => {
  res.send('It is one Mars.Hello MARS!');
});


// 👇️ Specify port number
const port = 3210;

app.listen(port, () => {
  console.log(`This app is listerning at the port : ${port}
  visit: http://localhost:${port}`);
});




