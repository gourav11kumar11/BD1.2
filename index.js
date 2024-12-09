const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/shout', (req, res) => {
  let text = req.query.name;
  let result = text.toUpperCase();
  res.send(result);
});

app.get('/fullname', (req, res) => {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  res.send(firstname + ' ' + lastname);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let format = month + ' , ' + year;
  res.send(format);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ', ' + city + ', ' + state;
  res.send(address);
});

app.get('/email', (req, res) => {
  let email = req.query.email;
  let domain = req.query.domain;

  let address = email + '@' + domain;
  res.send(address);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
