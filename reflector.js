/****** Configuration *******/

// On charge le framework Express...
var express = require('express');
// On crée l'application web
var app = express();
// On configure Express pour servir les fichiers contenus dans public/
// à l'url /s
app.use('/s', express.static('public'));

let jours = { 'mon' : 'Lundi',
              'tue' : 'Mardi',
              'wed' : 'Mercredi',
              'thu' : 'Jeudi',
              'fri' : 'Vendredi',
              'sat' : 'Samedi',
              'sun' : 'Dimanche' };

// On définit une route pour l'url /
app.get('/', function(req, res) {
  let str = "";
  for(let j in jours){
    str += jours[j]+"<br>";
  }
  
  res.send(str);
    
});

app.get("/query_string", function(req, res) {
  var str2 = "";
  for(var j2 in req.query){
    str2 += req.query[j2]+"<br>";
    
  }
  res.send(str2);
  
});

// On lance l'application
// (process.env.PORT est un paramètre fourni par Glitch)
app.listen(process.env.PORT);