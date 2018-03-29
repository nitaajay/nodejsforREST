//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var sql = require("mssql");
var app = express(); 
var configFile = require("./config/dbconfig");
var dataaccessfile = require("./dataaccess/datalayer");
var routes = require('./config/routes');


// import Db confgiruation file variable
var dbConfig = configFile.dbConfig;
var executeQuery = dataaccessfile.executeQuery;

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });




app.use('/', routes);



