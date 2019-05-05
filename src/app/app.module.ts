import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router'; //Router module


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
    HeaderComponent //New component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) //Import the router module for defines the route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
