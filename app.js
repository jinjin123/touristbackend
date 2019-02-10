'use strict'
const express = require('express');
const mongoHelper = require('./utils/mongoUtils');
const urlHelper = require('./routes');
const http = require('http');
const config = require('./config');

const app = express();
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public')) 
urlHelper(app)

mongoHelper.connect(function(error){
    if (error) throw error;
});
mongoHelper.CreateConnection(function(error){
    if (error) throw error;
})


app.on('close', function(errno) {
	mongoHelper.disconnect(function(err) { });
});



app.listen(4000, function(req, res){
    console.log('已经可以访问啦 http://localhost:3000');
})