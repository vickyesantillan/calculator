const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); //the path to our file wherever we are
});

app.get('/contact', function (req, res) {
  res.send('holis');
});

app.post('/', function (req, res) {
  res.send('dude qie es eso');
});

app.listen(3000, function () {
  console.log('holis');
});
