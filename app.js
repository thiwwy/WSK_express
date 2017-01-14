
'use strict';

// simple express server
var express = require('express');
var path = require('path');
var app = express();

var router = express.Router();
app.set('view engine', 'pug');

//Change Express view folder based on where is the file that res.render() is called
app.set('views', path.join(__dirname, '/app'));

app.use(express.static('app'));
app.get('/', function(req, res) {
    //res.sendfile('./app/index.html');
    res.render('index',{
      title: "Il mio titolo",
    });
});

app.listen(3000, function(){
  console.log("This application is running on localhost:3000");
});
