var express = require('express');
    var logger = require('morgan');
    var bodyParser = require('body-parser');
    var pjs = require('ejs');
    var nodemailer = require('nodemailer');
    var router = express.Router();


    var app = express();

    // Middleware
    app.set('view engine', 'ejs');
    app.use(express.static('public')); 
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/', function(req, res) {
    // database query
    res.render('index');
     });


    app.get('/html.index.html', function(req, res) {
    // database query
    res.render('index');
    });

    app.get('/index.html', function(req, res) {
    // database query
    res.render('index');
     });

     app.get('/index.html', function(req, res) {
    // database query



router.post('/contact-us', function(req,res){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
            auth: {
                user: 'bagirov.simral@gmail.com', // Your email id
            }    
     })    
 });
