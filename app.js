const express = require('express');

const app = express();

// localhost:3000/currenttime
app.get('/currenttime', function (request, response) {
  response.send('<h1>' + new Date().toISOString() + '</h1>');
});

// localhost:3000/
app.get('/', function (request, response) {
  response.send('<h1>Hello, world!</h1>');
});

app.listen(3000);
