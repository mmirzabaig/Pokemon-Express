const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');

app.get('/', (req, res) => {
  res.send(Pokemon);
});












app.listen(3000, () => {
  console.log('App is LIVE');
})
