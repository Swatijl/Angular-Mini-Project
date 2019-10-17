var conn=require("../config/db_connection");
var g_token=require("../token/generateToken");
//import db properties to store token
var prop=require("../config/db_properties");
var express=require("express"); 
var router=express.Router();
var connection=conn.getConnection();
connection.connect();
router.post('/',function(req,res)
{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    connection.query("select * from login_details where uname ='"+uname+"' and upwd='"+upwd+"'",
    function(err,recordsArray,field)
    {
        if(recordsArray.length>0)
        {
         var token=g_token(uname,
                            upwd,
                           'artcurus.com');
         prop.token=token;
            res.send({login:"success",
                      token:prop.token});
        }
        else
        {
            res.send({login:"Fail"});
        }
    });
});
module.exports=router;
