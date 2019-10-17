import {Component} from "@angular/core";
import {dashboardService} from "../services/dashboard.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
    templateUrl : "./portfolio.component.html"
})
export class PortfolioComponent
{
    private result:any;
    constructor(private _service:dashboardService){}
    ngOnInit()
    {
        this._service.portfolioData().subscribe(res =>{
          this.result=res;
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error)
            {
                console.log("Client side error");
            }
            else
            {
                console.log("Server side error");
            }
        });
        
    }

}

