//import connection object
var conn=require("../config/db_connection");
//create the connection
var connection=conn.getConnection();
connection.connect();
//import the express
var express=require("express");
var router=express.Router();
//import db properties for token match
var prop=require("../config/db_properties");
//create the Rest API
router.post("/",function(req,res){
    var token=req.body.token;
    if(token == prop.token) //client==server
    {
        connection.query("select * from products",
                          function(err,recordsArray,field)
                          {
                              res.send(recordsArray);
                          });
    }
    else{
        res.send("Unauthorized User");
    }
})
module.exports= router;


