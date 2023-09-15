import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  
	declarations: [
    
		AppComponent, 
		DashboardComponent,
	        MessagesComponent,
        	DepartmentsComponent,
	        HomeComponent
  
	],
  
	imports: [
    
   		BrowserModule,
    		FormsModule,
    		ReactiveFormsModule,
    		AppRoutingModule,
    		HttpClientModule
	],
  
	providers: [],
  
	bootstrap: [AppComponent]

})


export class AppModule { }
