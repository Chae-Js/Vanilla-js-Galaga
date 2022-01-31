const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'main.html'));
  });
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'));
  });
  app.listen(8080, () => {
    console.log('Express App on port 8080!');
  });