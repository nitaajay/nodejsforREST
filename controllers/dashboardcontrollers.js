//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var sql = require("mssql");
var app = express(); 
var configFile = require("../config/dbconfig");
var dataaccessfile = require("../dataaccess/datalayer");

// import Db confgiruation file variable
var dbConfig = configFile.dbConfig;
var executeQuery = dataaccessfile.executeQuery;

// dashboard queries
//GET API
module.exports = {

    //GET API
    getuser: function(req , res){
        var query = "select * from dbo.usermaster";
        executeQuery (res, query, 0);
    },

    /*
    //GET API
    app.get("/api/user/:id", function(req , res){
    var query = "select * from dbo.usermaster where userid=" + req.params.id;
    console.log(query);
    executeQuery (res, query, 0);
    });
    */

    //GET API
    getuserusingid: function(req , res){
        var query = "select * from dbo.usermaster where userid=" + req.params.id;
        console.log(query);
        executeQuery (res, query, 0);
        },

    //POST API
    getuserLogin: function(req , res){
        var query = "select UserID as 'UserID', Username as 'Username', Password as 'Password' from dbo.UserMaster as result where username ='" + req.body.Username + "' and Password ='" + req.body.Password + "'";
        executeQuery (res, query, 0);
    },

    getTotalACAEmployees: function(req , res){
        var query = "select count(*) as 'Column1' from [ACA].[xferEmployee]";
        console.log(query);
        executeQuery (res, query, 0);
    },

    //GET API
    getTotalACAHealthRecords: function(req , res){
        var query = "select count(*) as 'Column1' from [ACA].[xferHealthRecord]";
        console.log(query);
        executeQuery (res, query, 0);
    },

    //GET API
    getTotalACAPaymentRecords: function(req , res){
        var query = "select count(*) as 'Column1' from [ACA].[xferPaymentHistory]";
        console.log(query);
        executeQuery (res, query, 0);
    },

    //GET API
    getTotalACATransRecords: function(req , res){
        var query = "select count(*) as 'Column1' from [ACA].[xferTransaction]";
        console.log(query);
        executeQuery (res, query, 0);
    },

    //GET API
    getDataRefreshLog:  function(req , res){
        var query = "SELECT [DataRefreshID] as 'ID', [SchemaAbbreviation] as 'Abbr', [SchemaName] as 'Schema'";
        query += " ,[Date] as 'DateRefreshed', [Time] as 'Timerefreshed'";
        query += " FROM[APP].[DataRefreshLog]";
        console.log(query);
        executeQuery (res, query, 0);
    },  

    //GET API
    getTotalEmployeeWithoutStreet: function(req , res){
        var query = "select  count(*) as 'Total'";
        query += " from aca.xferEmployee WHERE Street = ''";
        console.log(query);
        executeQuery (res, query, 0);
    },

    //GET API
    getTotalEmployeeWithoutCity: function(req , res){
        var query = "select  count(*) as 'Total'";
        query += " from aca.xferEmployee WHERE City = ''";
        console.log(query);
        executeQuery (res, query, 0);
    },

    //GET API
    getTotalEmployeeWithoutState: function(req , res){
        var query = "select  count(*) as 'Total'";
        query += " from aca.xferEmployee  WHERE State = ''";
        console.log(query);
        executeQuery (res, query, 0);
    },

    //GET API
    getTotalEmployeeWithoutZip: function(req , res){
        var query = "select  count(*) as 'Total'";
        query += " from aca.xferEmployee  WHERE ZipCode = ''";
        console.log(query);
        executeQuery (res, query, 0);
    }


};

/*
//POST API
 app.post("/api/user", function(req , res){
                var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password”);
                executeQuery (res, query);
});

//PUT API
 app.put("/api/user/:id", function(req , res){
                var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
                executeQuery (res, query);
});

// DELETE API
 app.delete("/api/user /:id", function(req , res){
                var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
                executeQuery (res, query);
});
*/