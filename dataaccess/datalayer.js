
//Function to connect to database and execute query
var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var sql = require("mssql");
var configFile = require("../config/dbconfig");

// import Db confgiruation file variable
var dbConfig = configFile.dbConfig;

module.exports.executeQuery = function(res, query, qtype){     
    var res = res;        
    sql.connect(dbConfig, function (err) {
    if (err) {   
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else {
                // create Request object
                var request = new sql.Request();
                // query to the database
                request.query(query, function (err, ret) {
            if (err) {
                        console.log("Error while querying database :- " + err);
                        res.send(err)
                        }
                        else {
                    // check to see if request is for recorset return
                    if (qtype == 1){
                        res.send (ret);
                    } else {
                        res.send (ret.recordset);
                    }
                            }
                    sql.close();
                });

            }
      });           
}