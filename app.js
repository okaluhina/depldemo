require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/health', function (req, res) {
  res.send('I am healthy!');
});

app.get('/another', function (req, res) {
  res.send('I am another path!');
});

app.get('/yet_another', function (req, res) {
  res.send('I am yet another path and change!');
});

const port = process.env.PORT || 3000;

app.listen( port, function () {
  console.log(`Example app listening on port ${port}!`);
});