const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');

// app.get('/pokemon', (req, res) => {
//   res.send(Pokemon);
// });


// app.get('/pokemon/new', (req, res) => {
//   res.render('index.ejs');
// });
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon : Pokemon
  });
});








app.listen(3000, () => {
  console.log('App is LIVE');
})
