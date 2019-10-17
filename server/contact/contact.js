
 var express =require("express");
 var mongodb=require("mongodb");
 var prop = require("../config/db_properties");
 var router=express.Router();
 //create the mongoClient
 var MongoCl = mongodb.MongoClient;
 router.post("/",function(req,res){
   var token=req.body.token;
   if(token==prop.token)
   {
       MongoCl.connect("mongodb://localhost:27017/poc",
                function(err,db)
                {
                    db.collection("products").find()
                    .toArray(function(err,array)
                     {
                        res.send(array);
                     })
                })
   }
   else
   {
       res.send("Unauthorized User");
   }
 })
 //export the router
 module.exports = router;