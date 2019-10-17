//import mysql
var mysql=require("mysql");
var prop=require("./db_properties");
module.exports = {
    getConnection:function(){ //anonymous function returning connection object
        return mysql.createConnection(
            {
                host:prop.host,
                user:prop.user,
                password:prop.password,
                database:prop.database
            });
    }
};