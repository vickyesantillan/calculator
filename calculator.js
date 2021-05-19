const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //what I need to use body parser always

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); //the path to our file wherever we are
});

app.get('/bmi', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
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

app.post('/bmi', function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = weight / (height * height);

  res.send('Your BMI is ' + bmi);
});

app.listen(3000, function () {
  console.log('holis');
});
