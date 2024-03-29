import {Routes} from "@angular/router";
import {LoginComponent} from "../components/login.component";
import {DashboardComponent} from "../components/dashboard.component";
import {AboutComponent} from "../components/about.component";
import {ContactComponent} from "../components/contact.component";
import {PortfolioComponent} from "../components/portfolio.component";

export const appRoutes:Routes =[
    {path:"",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent,
     children:[
    {path :"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"portfolio",component:PortfolioComponent}]
}
];