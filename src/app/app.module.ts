import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { HeaderComponent } from './header.component';
import { calendarComponent } from './directive.component';
import { RouterModule, Routes } from '@angular/router'; //Router module
import { customFilter } from './customfilter';
import { HttpClientModule } from '@angular/common/http';


//start routing path
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  ];
//End routing path

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent, //New component
    HeaderComponent, //New component
    calendarComponent,
    customFilter
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), //Import the router module for defines the route\
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
