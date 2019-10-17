import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {loginServices} from "./services/login.service";
import {dashboardService} from "./services/dashboard.service";

import {IndexComponent} from "./components/index.component";
import {LoginComponent} from "./components/login.component"
import {DashboardComponent} from "./components/dashboard.component";
import {AboutComponent} from "./components/about.component";
import {ContactComponent} from "./components/contact.component";
import {PortfolioComponent} from "./components/portfolio.component";
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes/app.routes";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [dashboardService,loginServices],
  bootstrap: [IndexComponent]
})
export class AppModule { }
