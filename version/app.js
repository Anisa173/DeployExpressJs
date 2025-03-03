const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version_222 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});


app.get('/mars', (req, res) => {
  res.send('It is one Mars.Hello MARS!');
});


// 👇️ Specify port number
const port = 8080 ;

app.listen(port, () => {
  console.log(`Server is listerning on port  ${port}
  visit: http://localhost:${port}`);
});




