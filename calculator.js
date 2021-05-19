const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //what I need to use body parsser always

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); //the path to our file wherever we are
});

app.get('/contact', function (req, res) {
  res.send('holis');
});

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send('The result is ' + result);
});

app.listen(3000, function () {
  console.log('holis');
});
