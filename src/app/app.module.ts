import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'; 
import { provideHttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component'; 

@NgModule(
  {
  declarations: [
    AppComponent,
    RequestComponent,  
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    FormsModule
  ],
  providers: [provideHttpClient()], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
