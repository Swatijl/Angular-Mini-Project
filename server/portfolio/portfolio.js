var prop=require("../config/db_properties"); //to compare the token
//import fs module
var fs=require("fs");
var express=require("express");
//create router instance
var router=express.Router();
//create the post rest API
router.post("/",function(req,res){
    var token=req.body.token; //to read the token coming from frontend
    if(token==prop.token)
    {
      fs.readFile("C:/Users/Swati/Desktop/Angular/MiniProject/Project/static/sample.json",
      function(err,data){
          res.send(data);
      })
    }
    else
    {
        res.send("Unauthorized user");
    }
})
module.exports= router;


