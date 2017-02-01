import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';

import {ProfileComponent} from './components/profile.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';

import {routing} from './app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, routing, FormsModule ],
  declarations: [ AppComponent, ProfileComponent,LoginComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
