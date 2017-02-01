import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';

import {ProfileComponent} from './components/profile.component';
import {LoginComponent} from './components/login/login.component';

import {routing} from './app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, ProfileComponent,LoginComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
