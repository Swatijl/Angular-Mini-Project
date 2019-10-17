import {Component} from "@angular/core";
import { loginServices } from "../services/login.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
//import {FormGroup,FormControl,NgControl} from "@angular/forms";
 @Component ({
     templateUrl:"./login.component.html",
     styleUrls:["./login.component.css"]
 })
export class LoginComponent
{
     constructor(private _service:loginServices,private _router:Router){}
     public login(arg1):any{
        this._service.authenticate(arg1).subscribe(res =>{
        if(res.login == "success")
        {
            window.localStorage.setItem("login_details",JSON.stringify(res));
            this._router.navigate(["/dashboard"]);
        }
        else
        {
            alert("Login Failed");
        }
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client side Error");
            }
            else
            {
                console.log("Server side error");
            }
        })
    }
}