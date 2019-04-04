/****** Configuration *******/

// On charge le framework Express...
var express = require('express');
// On crée l'application web
var app = express();
// On configure Express pour servir les fichiers contenus dans public/
// à l'url /s
app.use('/s', express.static('public'));
app.use('/s', express.static('static'));
app.use(require('body-parser').urlencoded({ extended: false }));
const cookieP = require('cookie-parser');
app.use(cookieP());

let jours = { 'mon' : 'Lundi',
              'tue' : 'Mardi',
              'wed' : 'Mercredi',
              'thu' : 'Jeudi',
              'fri' : 'Vendredi',
              'sat' : 'Samedi',
              'sun' : 'Dimanche' };

// On définit une route pour l'url /
app.all('/', function(req, res) {
  if(Object.keys(req.query).length !== 0){
    res.send(req.query);
  }else if(Object.keys(req.body).length !== 0) {
    res.send(req.body);
  }
  else if(Object.keys(req.headers).length !== 0) {
    res.send(req.headers);
  }
});

app.get("/query_string", function(req, res) {
  //res.send(req.query);
  res.send(req._parsedUrl.query);
  
});

app.post("/form_data", function(req, res) {
  //res.send(req.query);
  res.send(req.body);
  
});

app.all("/headers", function(req, res) {
  //res.send(req.cookies);
  res.send(req.headers);
});

// On lance l'application
// (process.env.PORT est un paramètre fourni par Glitch)
app.listen(process.env.PORT);