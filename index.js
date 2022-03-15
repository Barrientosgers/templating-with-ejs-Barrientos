const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));



app.get('/', (req, res) => {
  var title = 'Home Page';
  res.render('pages/index', {'title':title});
});

app.get('/immigrant', (req, res) => {
  var title = 'Immigrant';
  res.render('pages/immigrant', {'title':title});
});

app.get('/venezuela', (req, res) => {
  var title = 'My Story in Venezuela';
  res.render('pages/venezuela', {'title':title});
});

app.get('/american-dream', (req, res) => {
  var title = 'American Dream';
  res.render('pages/american-dream', {'title':title});
});

app.get('/links', (req, res) => {
  var title = 'Links';
  res.render('pages/links', {'title':title});
});

app.get('/disclaimer', (req, res) => {
  var title = 'Disclaimer';
  res.render('pages/disclaimer', {'title':title});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
