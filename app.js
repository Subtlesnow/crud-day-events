const express = require('express');
const app = express();


app.get('/', function (req, res) {
  res.send('Hello world')
});

app.listen(5000, function() {
  console.log('Starting server on localhost:5000')
})
