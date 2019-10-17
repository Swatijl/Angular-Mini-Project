import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class loginServices
{
 constructor(private _http:HttpClient)
 {}
   public authenticate(login_details):any
   {
      return this._http.post("http://localhost:8080/login",login_details);
   }
 
}
//map and catch function are depriciated in angular 4