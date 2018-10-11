const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override')
const Pokemon = require('./models/pokemon');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// app.use('/public', express.static('public'));
//
// app.get('/pokemon', (req, res) => {
//   res.send(Pokemon);
// });


app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});
app.get('/pokemon/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon : Pokemon[req.params.index],
    index : req.params.index
  })
});

app.post('/pokemon', (req, res) => {
  Pokemon.push(req.body);
  res.render('index.ejs', {
    pokemon : Pokemon
  });
})

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon : Pokemon
  });
});


app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    pokemon : Pokemon[req.params.index]
  })
});


app.put('/pokemon/:index', (req, res) => {
  console.log(req.params.id, ' id in the put route');
  console.log(req.body, ' this should be our form data');
  Pokemon[req.params.index] = req.body;

  res.redirect('/pokemon');
});








app.listen(3000, () => {
  console.log('App is LIVE');
})
