var express=require("express");
var bodyparser=require("body-parser"); //to read the parameter
var app= express();
//enable the CORS
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
                "Origin,X-Requested-With,Content-Type,Accept")
    next();
});
//set json as MIME tye
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//import the login module
var login=require("./login/login");
app.use("/login",login);
//import about module
var about=require("./about/about");
app.use("/about",about);
//import contact module
var contact=require("./contact/contact");
app.use("/contact",contact);
//import portfolio module
var portfolio=require("./portfolio/portfolio");
app.use("/portfolio",portfolio);
//assign the port no
app.listen(8080);
console.log("server listening the port no. 8080");